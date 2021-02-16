import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'

class PerformanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            click:false,
            performance:[
                {date:"01/02/2020",company:"A",price:"100"},
                {date:"01/02/2020",company:"B",price:"100"},
                {date:"03/02/2020",company:"A",price:"100"},
                {date:"03/02/2020",company:"B",price:"100"},
                {date:"05/02/2020",company:"A",price:"100"},
                {date:"05/02/2020",company:"B",price:"100"}
            ]
        }
    }

    handleClick=()=>{
        this.setState(
            {
                click:true
            }
        )
    }

    render() {
        //unique dates storing
        const dates = [...new Set(this.state.performance.map(item => item.date))];
        var count=1;
        var i=0;
        return(
            <div className="container">
                <h1>Compare Potential Companies</h1>
                <h3>Make smart investment decision</h3>
                <br/>
                <div className="row g-1">
                    <div className="col">
                        <div className="form-outline">
                            <label for="sel1">Select Company 1*:</label>
                            <select className="form-control" id="sel1">
                            <option disabled selected value> choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label for="sel2">Select Company 2*:</label>
                            <select className="form-control" id="sel2">
                                <option disabled selected value>choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row g-1">
                    <div className="col">
                        <div className="form-outline">
                            From Date* <input type="date" className="form-control" id="fromdate" name="fromdate"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            To Date* <input type="date" className="form-control" id="todate" name="todate"/>
                        </div>
                   </div>
                </div>
                <br/>
                <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Fetch Details</button>

                {this.state.click && <div className="container">
                <br/>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Date</th>
                            <th>Company</th>
                            <th>Stock Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.performance.map((performance,index)=>{
                            {for(i;i<dates.length;) {
                                var j=dates[i];
                                if(count==1) {
                                    var x=0;
                                }
                                else{
                                    x=1;
                                }
                                count++;
                                if(count==3) {
                                    i=i+1;
                                    count=1;
                                }
                                
                          return  (
                                <tr key={index}>
                                    {/* <td>{todo.id}</td> */}
                                    {x==0?<td><b>{j}</b></td>:<td></td>}
                                    <td>{performance.company}</td>
                                    <td>${performance.price}</td>
                                </tr>
                                
                            )

                        }}
                        })
                        }       
                    </tbody>
                </table>
                </div>
                </div>}
            </div>
            
        )
    }
}
export default PerformanceComponent