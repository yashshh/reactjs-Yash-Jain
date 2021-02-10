import React,{Component} from 'react'
import Home from './Home'

class ListofPlayers extends Component {

    render() {
        return(
            <div style={{paddingLeft:"20px"}}>
                <div>
                <h1>List of Players</h1>
                {this.props.players.map(
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