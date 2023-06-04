import { logout, useUser, logInWithGoogle, logInWithGithub } from "../../firebase/AuthService";
import "./Login.css";
const Login = () => {
    const user = useUser();
    console.log("user" + user);
    if (user)
        return (
            <div className="App">
                <h2>You are logged in as {user.email}</h2>
                <button onClick={logout}> Log me out </button>
            </div>
        );

    return (
        <div className="App ">
            <h2>Please log in</h2>
            <div><button className="btn btn-primary custom-btn" onClick={logInWithGoogle}>Login with Google</button></div>
            <div><button className="btn btn-primary custom-btn" onClick={logInWithGithub}>Login with Github</button></div>
        </div>
    );
}

export default Login;
