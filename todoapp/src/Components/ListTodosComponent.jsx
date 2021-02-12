import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'

class ListTodosComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos:[
                {id:1,description:'learn react',isCompleted:false,date:new Date()},
                {id:2,description:'learn java',isCompleted:false,date:new Date()},
                {id:3,description:'learn python',isCompleted:false,date:new Date()},
                {id:4,description:'learn mysql',isCompleted:false,date:new Date()},
                {id:5,description:'learn c',isCompleted:false,date:new Date()}
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>List todos</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Description</th>
                            <th>isCompleted</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo)=>{
                            return(
                                <tr>
                                    {/* <td>{todo.id}</td> */}
                                    <td>{todo.description}</td>
                                    <td>{todo.isCompleted.toString()}</td>
                                    <td>{todo.date.toString()}</td>
                                </tr>
                            )
                        })
                        }       
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent