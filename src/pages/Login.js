import React from "react";
import logo from '../assets/logo.svg'
import './Login.css'

class Login extends React.Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center h-75">
                <div className="d-flex flex-column">  
                    <div className="wrapper fadeInDown">
                        <div id="formContent">

                            <div className="fadeIn first my-3">
                                <img src={logo} id="icon" alt="Logo" />
                            </div>

                            <form>
                                <div className="form-group">
                                    <input type="text" id="login" className="form-control fadeIn second" name="login" placeholder="Login"/>
                                    <input type="password" id="password" className="form-control fadeIn third" name="login" placeholder="Password"/>
                                    <input type="submit" className="btn fadeIn fourth" value="Log In"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;