import './index.css'

const Achievements=()=>{
    return(
        <div>
            <div className="achievements-container">
                <div className='achievements-md1'>
                    <h1 className="achievements-heading">Have A Look</h1>
                    <h1 className="achievements-description">Certifications Counseling Success & Institutional Partnerships</h1>
                    <hr className="line"/>
                    <p className="achievement-text">We are ISO certified, ensuring top-quality counseling services. Over 1,000 counseling 
                        sessions and partnerships with 100+ institutions reflect our commitment to student success.</p>
                    <div className='button-align'>
                        <button className="start-learning-now">Start Learning Now</button>
                    </div>
                </div>
                <br/>
                <br/>
                <div className='achievements-md2'>
                    <h1 className="achievements-heading2">OUR ACHIEVEMENTS</h1>
                    <h1 className="our-achievements-heading">OUR GREAT ACHIEVEMENTS</h1>
                    <hr className="line"/>
                    <br/>
                    <br/>
                    <div className='achievements-cards-container'>
                        <div className="achievements-card">
                            <h1 className="achievement-card-heading">1000+</h1>
                            <p className="achievement-card-paragraph">Counselling done</p>
                        </div>
                        <div className="achievements-card">
                            <h1 className="achievement-card-heading">100+</h1>
                            <p className="achievement-card-paragraph">Institutes associated</p>
                        </div>
                        <div className="achievements-card">
                            <h1 className="achievement-card-heading">ISO 9001</h1>
                            <p className="achievement-card-paragraph">2015 Certified</p>
                        </div>
                        <div className="achievements-card">
                            <h1 className="achievement-card-heading">1000+</h1>
                            <p className="achievement-card-paragraph">Students Succeded</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="why-choose-us-container">
                <h1 className="why-choose-us-heading">WHY CHOOSE VERTEXPACE?</h1>
                <p className="why-choose-us-description">Vertexpace is dedicated to empowering students and their families, 
                turning the often-complicated admission process into a manageable and rewarding experience. With us by your side, 
                achieving admission to your dream school, college, or university becomes smoother and more attainable.</p>
                <hr className="full-line"/>
                <div className="why-choose-us-row">
                    <p className="reason">Personalized Attention</p>
                    <p className="white-line">|</p>
                    <p className="reason">Streamlined & Efficient Process</p>
                    <p className="white-line">|</p>
                    <p className="reason">Reliable & Consistent Results</p>
                </div>
                <button className="join-us-now">JOIN US NOW</button>
            </div>
        </div>
    )
}

export default Achievements