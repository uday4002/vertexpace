import './index.css'
import Navbar from '../Navbar'
import WelcomePage from '../WelcomePage'
import About from '../About'

const Home=()=>{
    return(
        <div>
            <div className="vertexpace-welcome-container">
                <Navbar />
                <WelcomePage />
            </div>
            <About />
        </div>
    )
}

export default Home