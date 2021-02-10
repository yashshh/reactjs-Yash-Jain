import React,{Component} from 'react'

class ListofIndianPlayers extends Component {

    render() {
        return(
            <div style={{paddingLeft:"0px"}}>
                <div>
                {this.props.IndianPlayers.map(
                    (player) => {
                        return(
                            <div>
                                <li>{player}</li>
                            </div>
                        )
                    }
                )}
                </div>
            </div>
        )
    }

}
export default ListofIndianPlayers