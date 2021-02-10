import React,{Component} from 'react'

class ListofPlayers extends Component {

    render() {
        let player70 = []
        {this.props.players.map(
            (player) => {
                if(player.scores<70) {
                    player70.push(player);
                }
            }
        )}
        return(
            <div style={{paddingLeft:"20px"}}>
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