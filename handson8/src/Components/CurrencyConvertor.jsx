import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'

export class CurrencyConvertor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        amount:1,
        currency: '',
        TotalAmt:1
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
        console.log(this.state.amount)
      }
      
    CurrencyChangeMethod=()=>
    {
        var totalamt = this.state.amount*80 ;
        this.setState({
          TotalAmt : totalamt
          })
    }
  
    handleSubmit(event) {
        var msg='Converting to  '+ this.state.currency +' Amount is ' + this.state.TotalAmt;
        alert(msg);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="form">
        <form className="form" onSubmit={this.handleSubmit}>
            <table>
                <tr>
                    <td colspan="2" align="center">
                        <h1><font color="Green"> Currency Convertor!!!</font> </h1>
                    </td>
                </tr>
                <tr>
                  <td>Amount:</td>
                <td><input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                <td>  Currency: </td>
                  <td><textarea type="text" name="currency" value={this.state.currency} onChange={this.handleChange} /></td>
               </tr>
                <tr>
              <td colspan="2" align="center"><input type="submit" value="Submit" onClick={this.CurrencyChangeMethod} /></td>
                </tr>
          </table>
        </form>
        </div>
      );
    }
  }
  export default CurrencyConvertor

