import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/envelope-solid.svg'
import facebook_icon from '../../assets/square-facebook-brands-solid.svg'
import linkedin_icon from '../../assets/linkedin-brands-solid.svg'
import phone_icon from '../../assets/phone-solid.svg'
import {useState} from 'react'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "224d31bf-6a5c-46ee-ac9b-0984ee2b853a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contactez-moi</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Discutons-nous</h1>
                <p>Je suis disponible pour recevoir les offres de projets, n'hésitez pas à me contacter.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>handriantovosoa@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={facebook_icon} alt="" /><p>Harena Andriantovosoa</p>
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin_icon} alt="" /><p>Harena</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" /><p>+261 34 94 964 65</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Votre nom :</label>
                <input type="text" placeholder='Entrer votre nom...' name='nom'/>
                <label htmlFor="">Votre email :</label>
                <input type="email" placeholder='Entrer votre adresse email...' name='email'/>
                <label htmlFor="">Ecrivez votre message ici :</label>
                <textarea name="message" rows="8" placeholder='Entrer votre message...'></textarea>
                <button className="contact-submit">Envoyer</button>
            </form>
        </div>
    </div>
  )
}

export default Contact