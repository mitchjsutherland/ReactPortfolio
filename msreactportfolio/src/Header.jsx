

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">INSERT LOGO HERE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse custom-nav-links" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Homepage</a>
                            <a className="nav-link" href="#">Projects</a>
                            <a className="nav-link" href="#">Contact</a>
                            {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header;