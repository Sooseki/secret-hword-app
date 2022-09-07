import React, {useEffect, useContext} from 'react';
import PlayerIcon from '../../components/PlayerIcon/PlayerIcon';
import './Board.scss';
import { io } from 'socket.io-client';
import { UserContext } from '../../themeContext';

const socket = io("http://localhost:5555");

function Board() {
  const {player,setPlayer} = useContext(UserContext); 
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const roomId = urlParams.get('room');
  const startGame = (players: any) => {
    const ennemyPlayer = players.querySelector((p: any) => p.socketId != player.socketId);
    ennemyUsername = ennemyPlayer.username;
    console.log('start game')
    /*if (player.host && player.turn) {
      setTurnMessage('alert-info', 'alert-success', "C'est ton tour de jouer");
    } else {
      setTurnMessage('alert-success', 'alert-info', `C'est au tour de <b>${ennemyUsername}</b> de jouer`);
    }*/
  };
  console.log("room has been created", player)
  let ennemyUsername = ['test'];
  useEffect(() => {
      const linkToShare = document.getElementById('link-to-share');
      if (player.username && linkToShare) {
        console.log('has entered function')
        //check if roomId is defined or not
        if (roomId) {
          setPlayer({...player, roomId: roomId})
          localStorage.setItem('roomId', roomId)
        } else {
          setPlayer({...player, host: true})
          setPlayer({...player, turn: true})
          localStorage.setItem('host', 'true')
          localStorage.setItem('turn', 'true')
        }
          setPlayer({...player, socketId: socket.id})
          localStorage.setItem('socketId', socket.id)
          socket.emit('playerData', player);
          
        /*document.querySelector("#restart").addEventListener('click', function () {
          restartGame();
        })*/
        
        socket.on('join room', (roomId: any) => {
          setPlayer({...player, roomId: roomId})
          localStorage.setItem('roomId', roomId)
          //here put <Link> react router
          linkToShare.innerHTML = `<a href="http://localhost:3001/?room=${roomId}" target="_blank">http://localhost:3001/?room=${roomId}</a>`;
        });
      
        socket.on('start game', (players) => {
          console.log(players)
          startGame(players);
        });

        socket.on('play', (ennemyPlayer) => {
          //insert secret-hitler logic here
        });
        console.log("working", player)
        /*function restartGame(players = null) {
          if (player.host && !players) {
              player.turn = true;
              socket.emit('play again', player.roomId);
          }
      
          const cells = document.getElementsByClassName('cell');
      
          for (const cell of cells) {
              cell.innerHTML = '';
              cell.classList.remove('win-cell', 'text-danger');
          }
      
          turnMsg.classList.remove('alert-warning', 'alert-danger');
      
          if (!player.host) {
              player.turn = false;
          }
      
          player.win = false;
      
          if (players) {
              startGame(players);
          }
        }*/
    }
  }, [])
  return (
    <div className="Board">
      <PlayerIcon></PlayerIcon>
      <div id='link-to-share'></div>
    </div>
  );
}

export default Board;