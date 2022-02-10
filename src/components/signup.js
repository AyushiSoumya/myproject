import React from 'react';
import "./login.scss";
export default function SignUp() {
    return (
        <div className="login_container">
            <div className="login_box">
                <div className="heading">
                    <h3>New User Registration</h3>
                </div>
                <div className="content">

                    <form action="/" method="post">
                        <div className="content_box">
                            <ul>
                                <li>
                                    <label for="Name">NAME :</label>
                                    <input align="right" type="text" id="Name" name="Name" required></input>
                                </li>
                                <li>
                                    <label for="email"> EMAIL ID:</label>
                                    <input type="email" id="email" name="email" required></input>
                                </li>
                                <li>
                                    <label for="dob"> DATE OF BIRTH:</label>
                                    <input type="date" id="dob" name="dob" required></input>
                                </li>
                                <li>
                                    <label for="userName"> SET USERNAME:</label>
                                    <input type="text" id="userName" name="userName" required></input>
                                </li>
                                <li>
                                    <label for="password"> SET PASSWORD:</label>
                                    <input type="password" id="password" name="password" required></input>
                                </li>
                                <li>
                                    <label for="password"> CONFIRM PASSWORD:</label>
                                    <input type="password" id="password" name="password" required></input>
                                </li>

                            </ul>
                        </div>
                        <div className="btn_box">
                            <input type="submit" value="SIGN UP" />
                        </div>

                    </form>

                </div>


            </div>
        </div>
    );
}