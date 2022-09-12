import React from "react"
import "./rules.scss"
export const Rules = () => {
  return (
    <div className="rulesContainer">
      <div className="ruleAllPage">
        <div className="rulePage">
          <div className="leftPage page">
            <p className="n_text i_style">
              The year is 1932. The place is pre -WWII Germany. In Secret Hitler
              , players are German politicians attempting to hold a fragile
              Liberal government together and stem the rising tide of Fascism.
              Watch out though—there are secret Fascists among you, and one
              player is Secret Hitler.
            </p>
            <p className="t_text">OVERVIEW</p>
            <p className="n_text">
              At the beginning of the game, each player is secretly assigned to
              one of three roles: <span className="b_style">Liberal</span> ,
              <span className="b_style">Fascist</span> , or
              <span className="b_style">Hitler</span>. The Liberals have a
              majority, but they don’t know for sure who anyone is; Fascists
              must resort to secrecy and sabotage to accomplish their goals.
              Hitler plays for the Fascist team, and the Fascists know Hitler’s
              identity from the outset, but Hitler doesn’t know the Fascists and
              must work to figure them out.
            </p>
            <p className="n_text b_style">
              The Liberals win by enacting five Liberal Policies or killing
              Hitler . The Fascists win by enacting six Fascist Policies , or if
              Hitler is elected Chancellor after three Fascist Policies have
              been enacted.
            </p>
            <p className="n_text">
              Whenever a Fascist Policy is enacted, the government becomes more
              powerful, and the President is granted a single-use power which
              must be used before the next round can begin. It doesn’t matter
              what team the President is on; in fact, even Liberal players might
              be tempted to enact a Fascist Policy to gain new powers.
            </p>
            <p className="t_text">OBJECT</p>
            <p className="n_text">
              Every player has a secret identity as a member of either the
              Liberal team or the Fascist team.
            </p>
            <p className="n_text l_space">
              • Five Liberal Policies are enacted.
            </p>
            <p className="n_text l_space">OR</p>
            <p className="n_text l_space">• Hitler is assassinated.</p>
            <p className="n_text">Players on the Fascist team win if either:</p>
            <p className="n_text l_space">
              • Six Fascist Policies are enacted.
            </p>
            <p className="n_text l_space">OR</p>
            <p className="n_text l_space">
              • Hitler is elected Chancellor any time after the third Fascist
              Policy has been enacted.
            </p>
          </div>
          <div className="rightPage page">
            <p className="t_text">SET UP</p>
            <p className="n_text">
              Select the Fascist track that corresponds to the number of players
              and place it next to any Liberal track. Shuffle the 11 Fascist
              Policy tiles and the 6 Liberal Policy tiles into a single Policy
              deck and place that deck face down on the Draw pile card.
            </p>
            <p className="n_text">
              You’ll need an envelope for each player, and each envelope should
              contain a Secret Role card, a corresponding Party Membership card,
              one Ja! Ballot card, and one Nein Ballot card. Use the table below
              to determine the correct distribution of roles.
            </p>
            <p className="n_text">
              Liberal Secret Role cards must always be packed together with a
              Liberal Party Membership card, and Fascist and Hitler Secret Role
              cards must always be packed together with a Fascist Party
              Membership card.
            </p>
            <p className="n_text">
              Once the envelopes have been filled, be sure to shuffle them so
              each player’s role is a secret! Each player should get one
              envelope selected at random.
            </p>
            <p className="t_text red_style">
              WHY ARE THERE SECRET ROLE AND PARTY MEMBERSHIP CARDS?
            </p>
            <p className="n_text red_style">
              Secret Hitler features an investigation mechanic that allows some
              players to find out what team other players are on, and this
              mechanic only works if Hitler’s special role is not revealed. To
              prevent that from happening, every player has both a Secret Role
              card and a Party Membership card. Hitler’s Party Membership card
              shows a Fascist party loyalty, but gives no hint about a special
              role. Liberals who uncover Fascists must work out for themselves
              whether they’ve found an ordinary Fascist or their leader.
            </p>
          </div>
        </div>

        <div className="rulePage">
          <div className="leftPage page">
            <p className="t_text red_style">
              WHY ARE THERE SECRET ROLE AND PARTY MEMBERSHIP CARDS?
            </p>
            <p className="n_text red_style">
              Secret Hitler features an investigation mechanic that allows some
              players to find out what team other players are on, and this
              mechanic only works if Hitler’s special role is not revealed. To
              prevent that from happening, every player has both a Secret Role
              card and a Party Membership card. Hitler’s Party Membership card
              shows a Fascist party loyalty, but gives no hint about a special
              role. Liberals who uncover Fascists must work out for themselves
              whether they’ve found an ordinary Fascist or their leader.
            </p>
            <p className="n_text">
              Once each player has been dealt an envelope, all players should
              examine their Secret Role cards in secret. Randomly select the
              first Presidential Candidate and pass that player both the
              President and Chancellor placards.
            </p>
            <p className="n_text red_style">
              <span className="">GET THE APP</span>: Go to secrethitler.com/app
              to get a companion app that can narrate these directions for you.
            </p>
            <p className="n_text">
              For games of 5-6 players, give the following directions to all
              players:
            </p>
            <p className="n_text l_space">• Everybody close your eyes.</p>
            <p className="n_text l_space">
              • Fascist and Hitler, open your eyes and acknowledge each other.
            </p>
            <p className="n_text">Take a long pause</p>
            <p className="n_text l_space">• Everyone close your eyes.</p>
            <p className="n_text l_space">
              • Everyone can open your eyes. If anyone is confused or something
              went wrong, please tell the group now.
            </p>
          </div>
          <div className="rightPage page">
            <p className="t_text">GAMEPLAY</p>
            <p className="n_text">
              Secret Hitler is played in rounds. Each round has an
              <span>Election</span> to form a government, a
              <span>Legislative Session</span> to enact a new Policy, and an
              <span>Executive Action</span> to exercise governmental power.
            </p>
            <p className="lt_text">ELECTION </p>
            <p className="n_text n_space b_style">
              1. Pass the Presidential Candidacy
            </p>
            <p className="n_text">
              At the beginning of a new round, the President placard moves
              clockwise to the next player, who is the new Presidential
              Candidate.
            </p>
            <p className="n_text n_space b_style">2. Nominate a Chancellor</p>
            <p className="n_text">
              The Presidential Candidate chooses a Chancellor Candidate by
              passing the Chancellor placard to
            </p>
            <p className="n_text">
              any other eligible player. The Presidential Candidate is free to
              discuss Chancellor options with the table to build consensus and
              make it more likely the Government gets elected.
            </p>
            <p className="n_text n_space b_style">Eligibility:</p>
            <p className="n_text">
              The last elected President and Chancellor are “term-limited,” and
              ineligible to be nominated as Chancellor Candidate.
            </p>
            <p className="n_text red_style">ON ELIGIBILITY: </p>
            <p className="n_text red_style">
              • Term limits apply to the President and Chancellor who were last
              elected, not to the last pair nominated.
            </p>
          </div>
        </div>

        <div className="rulePage">
          <div className="leftPage page">
            <p className="n_text red_style i_style">
              • If there are only five players left in the game, only the last
              elected Chancellor is ineligible to be Chancellor Candidate; the
              last President may be nominated.
            </p>
            <p className="n_text red_style i_style">
              • There are some other rules that affect eligibility in specific
              ways: the Veto Power and the Election Tracker. You don’t need to
              worry about those yet, and we’ll talk about each one in its
              relevant section.
            </p>
            <p className="n_text b_style">3. Vote on the government</p>
            <p className="n_text">
              Once the Presidential Candidate has chosen an eligible Chancellor
              Candidate, players may discuss the proposed government until
              everyone is ready to vote. Every player, including the Candidates,
              votes on the proposed government. Once everyone is ready to vote,
              reveal your Ballot cards simultaneously so that everyone’s vote is
              public.
            </p>
            <p className="n_text b_style">
              If the vote is a tie, or if a majority of players votes no:
            </p>
            <p className="n_text">
              The vote fails. The Presidential Candidate misses this chance to
              be elected, and the President placard moves clockwise to the next
              player. The Election Tracker is advanced by one Election.
            </p>
            <p className="n_text">
              <span className="b_style">Election Tracker:</span> If the group
              rejects three governments in a row, the country is thrown into
              chaos. Immediately reveal the Policy on top of the Policy deck and
              enact it. Any power granted by this Policy is ignored, but the
              Election Tracker resets, and existing term-limits are forgotten.
              All players become eligible to hold the office of Chancellor for
              the next Election. If there are fewer than three tiles remaining
              in the Policy deck at this point, shuffle them with the Discard
              pile to create a new Policy deck.
            </p>
            <p className="n_text i_stylex">
              Any time a new Policy tile is played face-up, the Election Tracker
              is reset, whether it was enacted by an elected government or
              enacted by the frustrated populace.
            </p>
          </div>
          <div className="rightPage page">
            <p className="n_text b_style">
              If a majority of players votes yes:
            </p>
            <p className="n_text">
              The Presidential Candidate and Chancellor Candidate become the new
              President and Chancellor, respectively.
            </p>
            <p className="n_text b_style">
              If three or more Fascist Policies have been enacted already:
            </p>
            <p className=" n_text i_style">
              Ask if the new Chancellor is Hitler. If so, the game is over and
              the Fascists win. Otherwise, other players know for sure the
              Chancellor is not Hitler.
            </p>
            <p className="lt_text">LEGISLATIVE SESSION</p>
            <p className="n_text">
              During the Legislative Session, the President and Chancellor work
              together to enact a new Policy in secret. The President draws the
              top three tiles from the Policy deck, looks at them in secret, and
              discards one tile face down into the Discard pile. The remaining
              two tiles go to the Chancellor, who looks in secret, discards one
              Policy tile face down, and enacts the remaining Policy by placing
              the tile face up on the corresponding track.
            </p>
            <p className="n_text">
              Verbal and nonverbal communication between the President and
              Chancellor is forbidden. The President and Chancellor MAY NOT pick
              Policies to play at random, shuffle the tiles before
            </p>
            <p className="n_text">
              discarding one, or do anything else clever to avoid secretly and
              intentionally selecting a Policy. Additionally, the President
              should hand both Policies over at the same time, rather than one
              at a time to gauge the Chancellor’s reaction. Attempting to
              telegraph the contents of your hand using randomness or any other
              unusual selection procedure violates the spirit of the game. Don’t
              do it.
            </p>
            <p className="n_text b_style">
              Discarded Policy tiles should never be revealed to the group.
              Players must rely on the word of the President and Chancellor, who
              are free to lie.
            </p>
          </div>
        </div>

        <div className="rulePage">
          <div className="leftPage page">
            <p className="n_text red_style">
              <span className="b_style">ABOUT LYING:</span> Often, some players
              learn things that the rest of the players don’t know, like when
              the President and Chancellor get to see Policy tiles, or when a
              President uses the Investigate power to see someone’s Party
              Membership card. You can always lie about hidden knowledge in
              Secret Hitler. The only time players MUST tell the truth is in
              gameending, Hitler-related scenarios: a player who is Hitler must
              say so if assassinated or if elected Chancellor after three
              Fascist Policies have been enacted.
            </p>
            <p className="n_text">
              <span className="b_style">
                If there are fewer than three tiles remaining in the Policy deck
                at the end of a Legislative Session
              </span>
              , shuffle them with the Discard pile to create a new Policy deck.
              Unused Policy tiles should never be revealed, and they should not
              be simply placed on top of the new Policy deck.
            </p>
            <p className="n_text">
              <span className="b_style">
                If the government enacted a Fascist Policy that covered up a
                Presidential Power
              </span>
              , the sitting President gets to use that power. Proceed to the
              Executive Action.
            </p>
            <p className="n_text">
              <span className="b_style">
                If the government enacted a Liberal Policy or a Fascist Policy
                that grants no Presidential Power
              </span>
              , begin a new round with a new Election.
            </p>
            <p className="lt_text">EXECUTIVE ACTION</p>
            <p className="n_text">
              If the newly-enacted Fascist Policy grants a Presidential Power,
              the President must use it
            </p>
            <p className="n_text">
              before the next round can begin. Before using a power, the
              President is free to discuss the issue with other players, but
              ultimately the President gets to decide how and when the power is
              used. Gameplay cannot continue until the President uses the power.
              Presidential Powers are used only once; they don’t stack or roll
              over to future turns.
            </p>
            <p className="lt_text">PRESIDENTIAL POWERS</p>
            <p className="n_text">
              <span className="b_style">Investigate Loyalty</span> The President
              chooses a player to investigate. Investigated players should hand
              their Party Membership card (not Secret Role card!) to the
              President, who checks the player’s
            </p>
          </div>
          <div className="rightPage page">
            <p className="n_text">
              loyalty in secret and then returns the card to the player. The
              President may share (or lie about!) the results of their
              investigation at their discretion. No player may be investigated
              twice in the same game.
            </p>
            <p className="n_text">
              <span className="b_style">Call Special Election </span>
              The President chooses any other player at the table to be the next
              Presidential Candidate by passing that player the President
              placard. Any player can become President—even players that are
              term-limited. The new President nominates an eligible player as
              Chancellor Candidate and the Election proceeds as usual.
            </p>
            <p className="n_text b_style">
              A Special Election does not skip any players. After a Special
              Election, the President placard returns to the left of the
              President who enacted the Special Election.
            </p>
            <p className="n_text">
              If the President passes the presidency to the next player in the
              rotation, that player would get to run for President twice in a
              row: once for the Special Election and once for their normal shift
              in the Presidential rotation.
            </p>
            <p className="n_text">
              <span className="b_style">Policy Peek</span> The President
              secretly looks at the top three tiles in the Policy deck and then
              returns them to the top of the deck without changing the order.
            </p>
          </div>
        </div>

        <div className="rulePage">
          <div className="leftPage page">
            <p className="t_text">STRATEGY NOTES</p>
            <p className="n_text">
              <span className="b_style">
                • Everyone should claim to be a Liberal.
              </span>
              Since the Liberal team has a voting majority, it can easily shut
              out any player claiming to be a Fascist. As a Fascist, there is no
              advantage to outing yourself to the majority. Additionally,
              Liberals should usually tell the truth. Liberals are trying to
              figure out the game like a puzzle, so lying can put their team at
              a significant disadvantage.
            </p>
            <p className="n_text">
              <span className="b_style">
                If this is your first time playing Hitler, just remember: be as
                Liberal as possible.
              </span>
              Enact Liberal Policies. Vote for Liberal governments. Kiss babies.
              Trust your fellow Fascists to create opportunities for you to
              enact Liberal Policies and to advance Fascism on their turns. The
              Fascists win by subtly manipulating the table and waiting for the
              right cover to enact Fascist Policies, not by overtly playing as
              evil.
            </p>
            <p className="n_text">
              <span className="b_style">
                • Liberals frequently benefit from slowing play down and
                discussing the available information.
              </span>
              Fascists frequently benefit from rushing votes and creating
              confusion.
            </p>
            <p className="n_text">
              <span className="b_style">
                Fascists most often win by electing Hitler, not by enacting six
                Policies!{" "}
              </span>{" "}
              Electing Hitler isn’t an optional or secondary win condition, it’s
              the core of a successful Fascist strategy. Hitler should always
              play as a Liberal, and should generally avoid lying or getting
              into fights and disagreements with other players. When the time
              comes, Hitler needs the Liberals’ trust to get elected. Even if
              Hitler isn’t ultimately elected, the distrust sown among Liberals
              is key to getting Fascists elected late in the game.
            </p>
          </div>
          <div className="rightPage page">
            <p className="n_text">
              <span className="b_style">
                • Ask other players to explain why they took an action.
              </span>
              This is especially important with Presidential Powers—in fact, ask
              ahead of time whom a candidate is thinking of investigating/
              appointing/assassinating.
            </p>
            <p className="n_text">
              <span className="b_style">
                • If a Fascist Policy comes up, there are only three possible
                culprits: The President, the Chancellor, or the Policy Deck.{" "}
              </span>{" "}
              Try to figure out who (or what!) put you in this position.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
