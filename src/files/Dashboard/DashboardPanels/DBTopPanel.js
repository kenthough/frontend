import '../../../css/dashboardCSS.css';
import long_logo from '../../../images/long_logo.png'

function DBTopPanel() {
  return (
    <header className="navbar navbar-dark bg-light sticky-top flex-md-nowrap p-0 shadow">
        <a className="navbar-brand me-auto bg-light" href="/index">
            <img src={long_logo} alt="logo" height="22px" style={{margin: "0 1rem"}}/>
        </a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-100 rounded-2 border ms-3 me-3" type="text"
            placeholder="Search" aria-label="Search" style={{height: "2rem"}}/>
        <div className="navbar-nav">
            <div className="nav-item text-nowrap rounded-2 border me-2 searchbutton">
                <a className="nav-link px-3" href="#/">Search</a>
            </div>
        </div>
    </header>
  );
}

export default DBTopPanel;
