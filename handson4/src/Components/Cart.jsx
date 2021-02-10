import React,{Component} from 'react';
import '../Stylesheets/Mystyles.css';

class Cart extends Component {
    render() {
        return(
            <div  style={{position:"absolute",left:"550px",padding:"20px",color:"green"}}>
                <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
              {this.props.item.map(
            (item) => {
                return(
                    <tr>
                        <td>{item.itemname}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            }
        )}
                </table>
            </div>
        );
    }
}
export default Cart;