import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MySocial</h3>
                    <span className="loginDesc">Where you can find your friends...</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Email" />
                        <input className="loginInput" placeholder="Password" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}