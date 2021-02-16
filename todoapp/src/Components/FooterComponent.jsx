import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'

class FooterComponent extends Component {
    render() {
        return(
            <div>
                <wrapper class="d-flex flex-column">
                <nav>
                </nav>
                <main class="flex-fill">
                </main>
                <footer className="footer">
                    <span className="text-muted">All rights reserved 2020 @TodoApp</span>                
                </footer>
            </wrapper>
            </div>
        )
    }
}
export default FooterComponent