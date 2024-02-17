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

            </main>
        </>
    ) 
};

export default Homepage;