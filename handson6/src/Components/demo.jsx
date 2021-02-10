import React,{Component} from 'react'

class ListofPlayers extends Component {

    constructor() {
        super();
        this.state = {
            players:[
                {playerName:"sachin",scores:100},
                {playerName:"sehwag",scores:101},
                {playerName:"dhoni",scores:102},
                {playerName:"rohit",scores:103},
                {playerName:"dhawan",scores:104},
                {playerName:"raina",scores:110},
                {playerName:"jadeja",scores:50},
                {playerName:"rahul",scores:102},
                {playerName:"bumrah",scores:25},
                {playerName:"bkumar",scores:50},
                {playerName:"kumble",scores:50}
            ]
        }
    }

    render() {
        let player70 = []
        {this.state.players.map(
            (player) => {
                if(player.scores<70) {
                    player70.push(player);
                }
            }
        )}
        return(
            <div style={{paddingLeft:"20px"}}>
                <div>
                <h1>List of Players</h1>
                {this.state.players.map(
                    (player) => {
                        return(
                            <div>
                                <li> Mr.{player.playerName}<span> {player.scores}</span></li>
                            </div>
                        )
                    }
                )}
                </div>
                <div>
                <h1>List of Players having scores less than 70</h1>
                {player70.map(
                    (player) => {
                        return(
                            <div>
                                <li> Mr.{player.playerName}<span> {player.scores}</span></li>
                            </div>
                        )
                    }
                )}
                </div>
            </div>
        )
    }

}
export default ListofPlayers