import './index.css'

const WelcomePage=()=>{
    return(
        <div className="welcomepage-container">
            <div className='text-container'>
                <h1 className="welcomepage-heading">
                    Welcome To <br />
                    <span className="span-element">Vertexpace!</span>
                </h1>
                <p className="welcomepage-quotation">“The Function of education is to teach one to 
                    think intensively and to think critically. Intelligence and character - that is 
                    the goal of true education.”</p>
                <p className="quotation-author">-Martin Luther King</p>
                <button className="get-started-button">GET STARTED</button>
                <button className="browse-course-button">BROWSE COURSE</button>
            </div>
            <div className="image-container">
                <img src="https://s3-alpha-sig.figma.com/img/5c25/5e02/8df184b67e7f9ada6d1b0dfc3b3ef3bb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNdiegWgcKbz~sbfJRapaYaYUpC~l7dbItXhQWmn4LsJNHernz3CALVqTKfTgDiMo5MSCt4Ft3Y2eV-bEdiEVv48~8ISodMsnY3alAsX8KKrjJWGKms0kKC9uLRyIOvH2u8jOIIRKR1uIT2LnSBbvrGyCa~8oAwNTNQMdJYXeIB1bO-v2IBc-TqOqV5YQzeAfDG4J-~9NVV5CfBPq-FhnR3Qa632CadIeNTOQg1aK6LfuQT--B1oDyPh8himAgjpH2HEjVK~kXtkJRlfXPvKDLVIyBww67~phFVwBdU4wJwy7yZDDhxrZZt-X5ygDwIRm1VxLBNKSk~kx3kcDJZOYQ__" alt="home-image" className="home-image"/>
            </div>
        </div>
    )
}

export default WelcomePage