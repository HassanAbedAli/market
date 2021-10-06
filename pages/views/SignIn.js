
import React from "react";

export default class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <>
                <form action="http://localhost:3000/login" method="POST">
                    <input type="text" name="email" />
                    <input type="text" name="password" />
                    <input type="submit" value="Sign In"/>
                </form>

                <>
                <form action="http://localhost:3000/logout" method="POST">
                    <input type="submit" value="logout"/>
                </form>
                </>
            </>
        )
        
    }
}