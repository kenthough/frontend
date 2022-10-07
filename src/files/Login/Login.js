import axios from 'axios';
import '../../css/signinCSS.css';
import logo_img from '../../images/short_logo.png'

const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:8080/login', { 
        username: document.getElementById("username"),
        password: document.getElementById("password")})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

function Login() {
  return (
    <main className="form-signin w-100 m-auto login-body">
        {/* styling issues */}
        <form name='f' action="login" onSubmit={handleSubmit} className="logintable" style={{flexDirection: "column", justifyContent: "center"}}>
            <a href="/index">
                <img className="mb-4" src={logo_img} alt="" height="100" />
            </a>
            <br/>
            <table className="text-center m-auto login-table">
                <tr>
                    <div className="form-floating">
                        <td className="login-td">
                            <input name='username' type="text" className="form-control" id="floatingInput" placeholder="Username" required/>
                        </td>
                    </div> 
                </tr>
                <tr>
                    <div className="form-floating">
                        <td className="login-td">                            
                            <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                        </td>
                    </div>
                </tr>
                <tr>
                    <td className="login-td">
                        <input type="checkbox" name="remember-me" style={{marginRight: "0.3rem"}}/>
                        <label for="remember-me">Remember me</label>
                    </td>
                </tr>
                <tr><td className="login-td"><br/></td></tr>
                <tr>
                    <td className="login-td"><input className="w-100 btn btn-lg btn-primary" name="submit" type="submit" value="Login" id="submit"/></td>
                </tr>
            </table>    
            <br/><br/>
            <a href="http://localhost:8080/forgot_password">Forgot your password?</a>
            <p className="mb-3 text-muted">&copy; Karung Gun-E.</p>
        </form>
    </main>
  );
}

export default Login;
