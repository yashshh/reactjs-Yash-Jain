import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js';
import '../Stylesheets/Mystyle.css'
import CompanyDetailsComponent from './CompanyDetailsComponent';
import CompanyListService from '../api/CompanyListService.js';
class CompanyListComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            companyList:[],
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
                        name : "D",
                        details : "A cartoon is a type of illustration, sometimes animated, typically in a non-realistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist,[1] and in the second sense they are usually called an animator.",
                        price : 100
                    },
                    {
                        name : "E",
                        details : "A cartoon is a type of illustration, sometimes animated, typically in a non-realistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist,[1] and in the second sense they are usually called an animator.",
                        price : 100
                    },
                    {
                        name : "M",
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
    handleClick = (companyid) => {
        var userid=AuthenticationService.getUserIdLoggedin()
        CompanyListService.addWatchList({userId:userid,companyId:companyid})
        .then(response=>
            console.log(response),
            alert("successfully added to the watchlist.")
            )
        
    }
    // handleClick = () => {
    //     alert("successfully added to the watchlist.")
    // }

    componentDidMount() {
        CompanyListService.getCompanyList()
        .then(response=>{console.log(response)
            this.setState({companyList:response.data})
        })
        .catch()
    }

    render() {
        let flag=AuthenticationService.isUserLoggedin()
        return(
            <div className="container">
                 <h1>Companies List</h1>
                <div class="row justify-content">
                    {
                        this.state.companyList.map(
                            (company) => {
                                return(
                                    <CompanyDetailsComponent name={company.companyName} details={company.description} price={company.currentStockPrice} className={"btn btn-primary"} onClick={()=>this.handleClick(company.companyId)}>
                                        {/* {flag && <button className={"btn btn-primary"} onClick={this.handleClick}>
                                                Watch
                                            </button>} */}Watch
                                    </CompanyDetailsComponent>
                                )
                            }
                        )
                    }
                </div>               
            </div>
        )
    }
}
export default CompanyListComponent