import PortfolioProfile from './assets/ProfilePic2.png'

function Homepage() {

    return (
        <>
            <main className="mainhome">
                {/* <video className="home-backgroundvid" autoPlay loop muted poster="https://assets.mixkit.co/videos/preview/mixkit-dehydrated-dirt-surface-texture-in-the-desert-33008-large.mp4">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-dehydrated-dirt-surface-texture-in-the-desert-33008-large.mp4" />
                </video> */}
                <div className="title">
                    <img src={PortfolioProfile} className="profile-pic"></img>
                    {/* <h1 className="maintitle firstname"><span className="titlem">M</span><span className="titlei">i</span><span className="titlet">t</span><span className="titlec">c</span><span className="titleh">h</span><span className="titlee">e</span><span className="titlel">l</span></h1>
                    <h1 className = "maintitle lastname">SUTHERLAND</h1> */}
                    {/* <h3 className="subtitle"> Just here to make the web a better place.</h3> */}
                </div>
                {/* <div className="d-flex justify-content-center home-action-box">
                    <div className="col-12 d-flex justify-content-between">
                        <h4 className= "home-action">PROJECTS</h4>
                        <h4 className= "home-action">CONTACT</h4>
                    </div>
                </div> */}
                <div className="row d-flex justify-content-between action-row">
                    <div className="col-2 p-0 text-center">
                        <h4 className= "home-action">PROJECTS</h4>
                    </div>
                    <div className="col-2 p-0 text-center">
                        <h4 className= "home-action">CONTACT</h4>
                    </div>
                </div>


            </main>
        </>
    ) 
};

export default Homepage;