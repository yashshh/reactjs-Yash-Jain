import React,{Component} from 'react'
import ListofPlayers from './ListofPlayers'
import ScoreBelow70 from './ScoreBelow70'
import ListofIndianPlayers from './ListofIndianPlayers'

class Home extends Component {

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
            ],
            IndianTeam:[
                'rohit','dhoni','dhawan','raina','jadeja','rahul','bkumar'
            ]
        }
    }

    render() {
        let flag = false
        if(flag==true) {
            return(
                <div>
                    <ListofPlayers players={this.state.players}></ListofPlayers>
                    <hr/>
                    <ScoreBelow70 players={this.state.players}></ScoreBelow70>
               </div>
    
            )
        }
        else {
            return(
                <div>
                    <div style={{paddingLeft:"20px"}}>
                    <h1>Indian Team</h1>
                    <h1>Odd Players</h1>
                    {oddPlayers(this.state.IndianTeam)}
                    </div>
                    <hr/>
                    <div style={{paddingLeft:"20px"}}>
                    <h1>Even Players</h1>
                    {evenPlayers(this.state.IndianTeam)}
                    </div>
                    <hr/>
                    <div style={{paddingLeft:"20px"}}>
                        <h1>List of Indian Players Merged</h1>
                        <ListofIndianPlayers IndianPlayers={IndianPlayers}></ListofIndianPlayers>
                    </div>
                </div>
            )
        }
        
    }
    

}
export function oddPlayers([first,,third,,fifth]) {
        return(
            <div>
                <li>first:{first}</li>
                <li>third:{third}</li>
                <li>fifth:{fifth}</li>
            </div>
        )
}

export function evenPlayers([second,,fourth,,sixth]) {
    return(
        <div>
            <li>second:{second}</li>
            <li>fourth:{fourth}</li>
            <li>sixth:{sixth}</li>
        </div>
    )
}

const T20Players = ['first player','second player','third player']
const RanjiTrophyPlayers = ['fourth player','fifth player','sixth player']
export const IndianPlayers = [...T20Players,...RanjiTrophyPlayers]


export default Home