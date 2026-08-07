import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import "../CSS_CODE/ContactUsCSS.css"

function ContactUs () {
  return (
    <div>
      <Navbar/>
      
      <div>

        <div className="headerContantContactUs">
          <span>Let's Plan Your Next Journey</span>
          <p>Whether you're planning your next adventure or need support with an existing booking, our team is available 24×7 to provide fast, reliable, and personalized assistance.</p>
        </div>

        <div className="LeftAndRightSectionDiv">
          {/* Left Side Details Info */}
          <div className="LeftSideDetails">
            <p className="HaveQuestions">Have questions? We're available 24×7.</p>
            
            <div className="SingleDetails">
              <span className="iconBox">📍</span>
              <div className="LeftSideDetailsTextDiv">
                <p className="HeadingSectionContant">Office Address</p>
                <p className="TextDetails">11th Floor, 233 S Wacker Drive, Chicago, IL 60606, USA</p>
              </div>
            </div>

            <div className="SingleDetails">
              <span className="iconBox">📞</span>
              <div className="LeftSideDetailsTextDiv">
                <p className="HeadingSectionContant">Phone Support</p>
                <p className="TextDetails">+1 (312) 555-0123 (24x7)</p>
              </div>
            </div>

            <div className="SingleDetails">
              <span className="iconBox">✉</span>
              <div className="LeftSideDetailsTextDiv">
                <p className="HeadingSectionContant">Email Us</p>
                <p>info@yatrasetu.com</p>
              </div>
            </div>

            <div className="SingleDetails">
              <span className="iconBox">🕐</span>
              <div className="LeftSideDetailsTextDiv">
                <p className="HeadingSectionContant">Working Hours</p>
                <p className="TextDetails">Support available round the clock</p>
              </div>
            </div>

            <div className="SingleDetails">
              <span className="iconBox">⭐</span>
              <div className="LeftSideDetailsTextDiv">
                <p className="HeadingSectionContant">Trusted by 50,000+ Travellers</p>
                <p className="TextDetails">Average response time <br/> Under 15-25 minutes</p>
              </div>
            </div>
          </div>

          {/* Right Side Form Details */}
          <form className="FromMainDiv">
            <p className="SendMessage">Send Us a Message</p>

            <div className="InputDetails">
              <label htmlFor="name">Full Name</label>
              <input 
                required
                type="text" 
                name="firstName"
                className="InputTag"
                placeholder="Your Name"
              />
            </div>

            <div className="InputDetails">
              <label htmlFor="name">Email</label>
              <input 
                required
                type="email" 
                name="email"
                className="InputTag"
                placeholder="you@xample.com"
              />
            </div>

            <div className="InputDetails">
              <label htmlFor="name">Subject</label>
              <input 
                required
                type="text" 
                name="subject"
                className="InputTag"
                placeholder="Booking issue, refund, feedback"
              />
            </div>

            <div className="InputDetails">
              <label htmlFor="name">Message</label>
              <textarea 
                required
                type="text" 
                name="firstName"
                className="TextAreaInputTag"
                placeholder="Write your message here..."
              />
            </div>

            <div className="ButtonButton">
              <button className="SubmitButton" type="submit">Send Message</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default ContactUs;