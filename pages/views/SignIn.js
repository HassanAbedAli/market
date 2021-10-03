
import React from "react";

export default class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <>
                <form action="http://localhost:3000/registration/login" method="POST">
                    <input type="text" name="username" />
                    <input type="text" name="password" />
                    <input type="submit" value="Sign In"/>
                </form>

                <>
                <form action="http://localhost:3000/registration/logout" method="POST">
                    <input type="submit" value="logout"/>
                </form>

                <form action="http://localhost:3000/registration/register" method="POST">
                    <input type="submit" value="register"/>
                </form>

                </>
            </>
        )
        
    }
}