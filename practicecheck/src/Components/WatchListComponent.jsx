import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import '../Stylesheets/Mystyle.css'

class WatchListComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            companies:[
                   {
                        name : "A",
                        details : "A cartoon is a type of illustration, sometimes animated, typically in a non-realistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist,[1] and in the second sense they are usually called an animator.",
                        price : 100
                   },
                   {
                        name : "B",
                        details : "A cartoon is a type of illustration, sometimes animated, typically in a non-realistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist,[1] and in the second sense they are usually called an animator.",
                        price : 100
                    },
                    {
                        name : "C",
                        details : "A cartoon is a type of illustration, sometimes animated, typically in a non-realistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist,[1] and in the second sense they are usually called an animator.",
                        price : 100
                   },
                    {
                        name : "E",
                        details : "A cartoon is a type of illustration, sometimes animated, typically in a non-realistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist,[1] and in the second sense they are usually called an animator.",
                        price : 100
                    },
                   {
                    name : "S",
                    details : "A cartoon is a type of illustration, sometimes animated, typically in a non-realistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist,[1] and in the second sense they are usually called an animator.",
                    price : 100
               }

                ]
            
        }
    }
    handleClick = () => {
        alert("Removed successfully from the watchlist.")
    }
    render() {
        
        let flag=AuthenticationService.isUserLoggedin()
        let count = this.state.companies.length

        return(
            <div className="container">
                 <h1>My Companies List</h1>
                {count>0?
                    <div class="row justify-content">
                        {
                            this.state.companies.map(
                                (company) => {
                                    return(
                                        <CompanyDetailsComponent name={company.name} details={company.details} price={company.price}>
                                            {flag && <button className={"btn btn-danger"} onClick={this.handleClick}>
                                                    Remove
                                                </button>}
                                        </CompanyDetailsComponent>
                                    )
                                }
                            )
                        }
                </div>
                :<div><h1>No companies stock price added to watchList</h1></div> 
                }               
            </div>
        )
    }
}
export default WatchListComponent