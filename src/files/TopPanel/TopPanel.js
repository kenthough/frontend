import '../../css/indexCSS.css';
import long_logo from '../../images/long_logo.png'

function TopPanel() {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light" aria-label="navbar">
        <div className="container-fluid">
            <a className="navbar-brand me-4 pt-1" href="/index">
                <img src={long_logo} alt="logo" height="22px"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle"
                aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navToggle">
                <ul className="navbar-nav ms-auto align-items-center me-auto mb-2 mb-md-0">
                    <li className="nav-item px-2">
                        <a className="nav-link active" aria-current="page" href="/index">Home</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link active" aria-current="page" href="/about">About</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link active" aria-current="page" href="/faq">FAQ</a>
                    </li>
                </ul>
                <div className="text-center" style={{display: 'flex'}}>
                    {/* sec:authorize="!isAuthenticated() */}
                    <a href="/login">
                        <button type="button" className="btn btn-sm btn-outline-primary me-2">
                            Login
                        </button>
                    </a>
                    {/* <a href="/dashboard">
                        <button type="button" className="btn btn-sm btn-primary me-2">
                            Dashboard
                        </button>
                    </a> */}
                    {/* <a href="/logout">
                        <button type="button" className="btn btn-sm btn-outline-primary me-2">
                            Log Out
                        </button>
                    </a> */}
                    <a href="/register">
                        <button type="button" className="btn btn-sm btn-primary me-2">
                            Sign-up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default TopPanel;
