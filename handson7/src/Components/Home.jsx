import React,{Component} from 'react'
import sr from '../officespace.jpg'
import '../StyleSheets/mystyle.css'

class Home extends Component {

    render() {

        const element = "Office Space"
        const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space"/> 
        const itemName = {name:"DBS",rent:5000,address:"dbs"}

        let colors = []
        if(itemName.rent>60000) {
            colors.push("textRed");
        }
        else {
            colors.push("textGreen");
        }

        return(
            <div className="home">
                <h1>{element} at Affordable Range</h1>
                {jsxatt}
                <h1>Name: {itemName.name}</h1>
                <h3 className={colors}>Rent: Rs. {itemName.rent}</h3>
                <h3>Address: {itemName.address}</h3>
            </div> 
        )
    }
}
export default Home