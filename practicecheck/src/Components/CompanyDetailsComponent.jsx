import AuthenticationService from "./AuthenticationService"
import CustomButton from './CustomButton'

function CompanyDetailsComponent(props) {

    let flag=AuthenticationService.isUserLoggedin()
    return(
        <div className="col col-lg-4">
            <ul className="list-group">
                <li className="list-group-item py-3 list-group-item-secondary">{props.name}</li>
                <li className="list-group-item py-5 list-group-item-light ">{props.details}</li>
                <li className="list-group-item py-2 list-group-item-secondary">Today's Price : ${props.price}
                {/* {flag && <button className={props.className} onClick={props.handleClick}>{props.children}</button>} */}
                {flag && <CustomButton className={props.className} onClick={props.onClick}>{props.children}</CustomButton>}
                </li>
            </ul>
        <br/>
        </div>
    )
}
export default CompanyDetailsComponent