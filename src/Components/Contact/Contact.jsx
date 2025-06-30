import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg'; // Adjust the path as necessary
import mail_icon from '../../assets/mail_icon.svg'; // Adjust the path as necessary
import location_icon from '../../assets/location_icon.svg'; // Adjust the path as necessary
import call_icon from '../../assets/call_icon.svg'; // Adjust the path as necessary
const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e7777a2c-b3c2-48c0-9e79-758e263c6d8d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
    }
  };


    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className='contact-section'>
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Feel free to collaborate for projects.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>riteshdashbros@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>Seawoods, Navi Mumbai</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>+91 9372824724</p>
                        </div>
                    </div>

                </div>
                   <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name'  name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="">Your Message</label>
                    <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Send Message</button>
                    
                   </form>
            </div>
        </div>
    )
}
export default Contact;