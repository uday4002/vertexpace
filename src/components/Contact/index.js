import './index.css'
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { TfiTwitter } from "react-icons/tfi"
import { AiOutlineYoutube } from "react-icons/ai"
import { MdOutlineMail } from "react-icons/md"
import { IoLocation } from "react-icons/io5"
import {Link} from 'react-router-dom'

const Contact=()=>{
    return(
        <>
            <div className="contact-container">
                <div className="section1">
                    <img src="https://s3-alpha-sig.figma.com/img/a3c3/0b90/d10a77d1359747e5e08c0397f689ec1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4yNNCsCU9FdDhLo~hY6IqpYWhysDuYkqpJZu6kDMFtRgMrI4~H7KcQnh6lij~JFqdTgzRXJFVRT7DqGIb9alsxJiuU22~EV9LqyWU0Q5qpZh3v24byKPiKr5wV~aHnin1AFtq8z6HCTZgJb09cd-nuTI7gXhuUVJSUO65dk~G1osXn-2MSQOU67l53HC2XzvQTbGUG8h8PlCYWNXQIQ0fNStF2eouOkfVctjUbmdiLtad5ZuvMRRd8P9rhAUgseJY4n7TuJ3KOdIfYH0zhrFREe-2cQNoXOJAn5GaoCPapXKd83gEQOfKVNQQOJbOCKMRaWX6wiKZTc0JAgAzN9Rg__" alt="logo" className="contact-logo"/>
                    <p className="section-para">Vertexpace is a leading education consultancy helping students achieve their academic and career goals.</p>
                    <div className="icons-container">
                        <FaFacebook className="social-icon"/>
                        <TfiTwitter className="social-icon"/>
                        <FaInstagram className="social-icon"/>
                        <AiOutlineYoutube className="social-icon"/>
                    </div>
                </div>
                <div className="section2">
                    <h1 className="section-para h">Quick Links</h1>
                    <hr className="section-line"/>
                    <Link to="/" className="link-item"><p className="section-para">About Us</p></Link> 
                    <Link to="/what-we-do" className="link-item"><p className="section-para">What We do</p></Link> 
                    <Link to="/colleges" className="link-item"><p className="section-para">Colleges</p></Link> 
                    <Link to="/contact" className="link-item"><p className="section-para">Contact Us</p></Link> 
                </div>
                <div className="section3">
                    <h1 className="section-para h">Contact Us</h1>
                    <hr className="section-line"/>
                    <div className="contact-align">
                        <FaPhoneAlt className='contact-icon'/>
                        <p className="section-para">+91 9620201058</p>
                    </div>
                    <div className="contact-align">
                        <MdOutlineMail className='contact-icon'/>
                        <p className="section-para">info@vertexpace.com</p>
                    </div>
                    <div className="contact-align">
                        <IoLocation className='contact-icon location'/>
                        <p className="location-info">No.362 / 7,2nd Floor,16th main,4th T Block, Jayanagar,Bangalore, Karnataka-560041</p>
                    </div>
                </div>
                <div className="section4">
                    <p className="section-para">Copyright © 2024 Vertexpace. <br/>
                    All rights reserved.</p>
                    <div className="fotter-right-container">
                        <p className="section-para p">Private Policy</p>
                        <p className="section-para p">Support</p>
                        <p className="section-para p">Terms & Conditions</p>
                    </div>
                </div>
            </div>
            <div className="fotter-container">
                <p className="section-para">Copyright © 2024 Vertexpace. All rights reserved.</p>
                <div className="fotter-right-container">
                    <p className="section-para">Private Policy</p>
                    <p className="section-para">Support</p>
                    <p className="section-para">Terms & Conditions</p>
                </div>
            </div>
        </>
    )
}

export default Contact