import './index.css'
import {Component} from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import {Link} from 'react-router-dom'

class Navbar extends Component{
    state={showNavbar:false}

    toggleNavbar=()=>{
        this.setState((prevState)=>{
            this.setState({showNavbar:!prevState.showNavbar})
        })
    }

    render(){
        const {showNavbar}=this.state
        return(
            <div className="navbar-total-container">
                <div className="contact">
                    <p className="contact-item">+91 9620201058</p>
                    <p className="white-line">|</p>
                    <p className="contact-item">Jayanagar,Bangalore.</p>
                    <p className="white-line">|</p>
                    <p className="contact-item">info@vertexpace.com</p>
                </div>
                <div className="navbar-main-container">
                    <div className="navbar-container">
                        <img src="https://s3-alpha-sig.figma.com/img/a3c3/0b90/d10a77d1359747e5e08c0397f689ec1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4yNNCsCU9FdDhLo~hY6IqpYWhysDuYkqpJZu6kDMFtRgMrI4~H7KcQnh6lij~JFqdTgzRXJFVRT7DqGIb9alsxJiuU22~EV9LqyWU0Q5qpZh3v24byKPiKr5wV~aHnin1AFtq8z6HCTZgJb09cd-nuTI7gXhuUVJSUO65dk~G1osXn-2MSQOU67l53HC2XzvQTbGUG8h8PlCYWNXQIQ0fNStF2eouOkfVctjUbmdiLtad5ZuvMRRd8P9rhAUgseJY4n7TuJ3KOdIfYH0zhrFREe-2cQNoXOJAn5GaoCPapXKd83gEQOfKVNQQOJbOCKMRaWX6wiKZTc0JAgAzN9Rg__" alt="app-logo" className="website-logo"/>
                        <div>
                            <nav className="nav-container">
                                <Link to="/" className='link-item'><p className="nav-item">HOME</p></Link>
                                <Link to="/what-we-do" className='link-item'><p className="nav-item">WHAT WE DO</p></Link>
                                <Link to="/colleges" className='link-item'><p className="nav-item">COLLEGES</p></Link>
                                <Link to="/contact" className='link-item'><p className="nav-item">CONTACT</p></Link>
                            </nav>
                        </div>
                        <GiHamburgerMenu className="hamburger-menu" onClick={this.toggleNavbar}/>
                        <button className="join-us-now">JOIN US NOW</button>
                    </div>
                    {showNavbar?<div className="navbar-nav">
                        <Link to="/" className='link-item'><p className="nav-item">HOME</p></Link>
                        <Link to="/what-we-do" className='link-item'><p className="nav-item">WHAT WE DO</p></Link>
                        <Link to="/colleges" className='link-item'><p className="nav-item">COLLEGES</p></Link>
                        <Link to="/contact" className='link-item'><p className="nav-item">CONTACT</p></Link>
                    </div>:""}
                </div>
            </div>
        )
    }
}

export default Navbar