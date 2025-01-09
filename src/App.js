import './App.css'
import Navbar from './components/Navbar'
import WelcomePage from './components/WelcomePage'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact'

const Home=()=>{
    return(
        <div>
            <div className="vertexpace-welcome-container">
                <Navbar />
                <WelcomePage />
            </div>
            <About />
            <WhatWeDo />
            <WhyChooseUs />
            <Contact />
        </div>
    )
}

export default Home