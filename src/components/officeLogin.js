import React from 'react';
import "./login.scss";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function TravellersLogin() {
    function togglePassword() {
        let x = document.getElementById("password");
        let y = document.getElementById("eyeopen");
        let z = document.getElementById("eyeclose");
        let w = document.getElementById("eye");
        if (x.type === "text") {
            x.type = "password";
            y.style.display = "inline-block";
            z.style.display = "none";
            w.title = "show";
        }
        else {
            x.type = "text";
            y.style.display = "none";
            z.style.display = "inline-block";
            w.title = "hide";
        }
    }
    return (
        < div className="login_container" >
            <div className="login_box">
                <div className="heading">
                    <h3>Office Login</h3>
                </div>
                <div className="content">

                    <form action="/" method="post">
                        <div className="content_box">
                            <ul>
                                <li>
                                    <label for="userName">USER NAME :</label>
                                    <input type="text" id="userName" name="userName"></input>
                                </li>
                                <li>
                                    <label for="password">PASSWORD :</label>
                                    <input type="password" id="password" name="password"></input>
                                    <span title="show" id="eye" onClick={togglePassword}>
                                        <AiFillEye id="eyeopen" />
                                        <AiFillEyeInvisible id="eyeclose" />
                                    </span>

                                </li>

                            </ul>
                        </div>
                        <div className="btn_box">
                            <button>LOGIN</button>
                        </div>

                    </form>

                </div>


            </div>
        </div >
    );

}