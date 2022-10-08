import '../../../css/dashboardCSS.css';

function DBSidePanel() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Profile
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Wish List
                        </a>
                    </li>
                    <hr style={{width:"100%", margin:"1rem auto"}} />
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default DBSidePanel;
