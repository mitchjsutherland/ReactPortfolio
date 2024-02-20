import MCLogo from './assets/MCIcon.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg customNav">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"><img src={MCLogo} id="navIcon"></img></a> */}
                    <Link to ="/"><img className="navbar-brand" src={MCLogo} id="navIcon" /></Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse custom-nav-links" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to = "/"><a className="nav-link active hp-nav-link" id="hp-nav-home" aria-current="page" href="#">Homepage</a></Link>
                            <Link to = "/projects"><a className="nav-link hp-nav-link" id="hp-nav-projects" href="#">Projects</a></Link>
                            <Link to = "/contact"><a className="nav-link hp-nav-link" id="hp-nav-contact" href="#">Contact</a></Link>
                            {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header;