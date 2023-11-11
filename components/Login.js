import React,{Component, components} from 'react';
import './style.css';
//extend:ke thua
//vd:a extend b , a la con cua b.
// login ke thua methods,properties trong lop components
class login extends Component
{
    render(){
        return(
            <div> <h2>Login form</h2> 
            Username: <input type="text"/>;
            <br/>
            Password: <input type="button"/>;
            <br/>
            <input type="submit"/>
            </div>
        );
    }
}
export default login;

