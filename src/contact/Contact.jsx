import './contact.css'
import { aboutImg } from '../assets';

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="txt">
          <h1>  Contact <span>Us</span> </h1>
          <p>
            Feel free to reach out to us with any questions, feedback, or
            inquiries. We are here to help and support you on your journey.
            Contact us via email, phone, or through our online form.
          </p>
        </div>
        <div className="aboutImg">
          <img src={aboutImg} className="rightImg" />
        </div>
      </section>
      <section className="form-1">
        <form action="index.html" method="GET">
            <input type="text" placeholder="Name"  required />
            <input type="email" placeholder="E-mail Address" required />
            <textarea name="subject" placeholder="Message" />

          <button className="btn" type="submit">  Send  </button>
        </form>
      </section>
    </>
  );
}

export default Contact