import '../../css/signinCSS.css';
import logo_img from '../../images/short_logo.png'

function SignUp() {
    return (
        <main className="form-signin m-auto login-body">
            <div className='logintable'>
            <div className="signup-box">
                {/* form action th:action="@{/register}" th:object="${user}" */}
                <form name='f' method='POST' style={{ flexDirection: "column", justifyContent: "center" }}>
                    <h3 className="text-start">Start your journey with us</h3>
                    <p className="text-start" style={{ width: "20rem" }}>Discover the art of breathing new life into your old electronics.</p>
                    <table style={{ margin: "auto" }}>
                        <tr>
                            <div className="form-floating">
                                {/* <div th:if="${error != null}">
                                <p style="display: inline-block;" className="text-danger text-center">[[${error}]]</p>
                            </div> */}
                                <td className='login-td'>
                                    <input name='username' type="text" className="form-control" id="usernameInput" placeholder="Username*" min="5" max="20" required />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-floating">
                                <td className='login-td'>
                                    <input name='password' type="password" className="form-control" id="passwordInput" placeholder="Password*" min="8" required />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-floating">
                                <td className='login-td'>
                                    <input name='email' type="email" className="form-control" id="emailInput" placeholder="Email*" required />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-floating">
                                <td className='login-td'>
                                    <input name='name' type="text" className="form-control" id="nameInput" placeholder="Name*" min="4" required />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-floating">
                                <td className='login-td'>
                                    <input name='address' type="text" className="form-control" id="addressInput" placeholder="Address" />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-floating">
                                <td className='login-td'>
                                    <input name='contact' type="tel" className="form-control" id="contactInput" placeholder="Contact Number" />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <td className='login-td'><input className="w-100 btn btn-lg btn-primary mt-3" name="signup" type="submit" value="Sign Up" id="submit" /></td>
                        </tr>
                    </table>
                </form>
            </div>
            <br />
                    <div className="redirect-login" style={{ display: "flex", justifyContent: "center" }}>
                        <p style={{ marginRight: "2%" }}>Already have an account?</p>
                        <a href="/login">Log in instead.</a>
                    </div>
                    <br />
                    <div className="text-center">
                        <img className="text-center" src={logo_img} alt="logo-img" height="75px" />
                    </div>
                    <p className="mb-3 text-muted">&copy; Karung Gun-E.</p>
            </div>
        </main>
    );
}

export default SignUp;
