import '../../css/indexCSS.css';
import long_logo from '../../images/long_logo.png'

function BottomPanel() {
  return (
    <div>
        <section id="footer">
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a className="navbar-brand me-auto" href="#">
                            <img src={long_logo} alt="logo" height="25rem"/>
                        </a>

                        <p className="text-muted">&copy; 2022 Karung Gun-E</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>About</h5>
                        <ul className="nav flex-column" style={{fontWeight: 'lighter'}}>
                            <li className="mb-2">Karung Gun-E</li>
                            <li className="mb-2">The Team</li>
                            <li className="mb-2">Recruitment</li>
                            <li className="mb-2">Investors</li>
                            <li className="mb-2">Mission & Vision</li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Community</h5>
                        <ul className="nav flex-column" style={{fontWeight: 'lighter'}}>
                            <li className="mb-2">Blog</li>
                            <li className="mb-2">Our Partners</li>
                            <li className="mb-2">Accessibility</li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Support</h5>
                        <ul className="nav flex-column" style={{fontWeight: 'lighter'}}>
                            <li className="mb-2">Contact Us</li>
                            <li className="mb-2">Getting Here</li>
                            <li className="mb-2">Locations</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    </div>
  );
}

export default BottomPanel;
