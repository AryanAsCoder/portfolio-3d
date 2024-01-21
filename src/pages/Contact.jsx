import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import bgc from '../assets/bgc.png';

const Contact = () => {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_tj084ri', 'template_ehavijm', form.current, 'BgDHZIu8nq9nCGQXj')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <h3 className="mt-3 font-semibold font-poppins">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h3>

        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              value={form.name}
            />
          </label>

          <label className="text-black-500 font-semibold">
          Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              value={form.email}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea 
              type="text"
              rows={4}
              required
              name="message"
              className="textarea"
              placeholder="How can I help you?"
              value={form.message}      
            />
          </label>

          <button type="submit"
          className="btn">
            Submit
          </button>
        </form>
      </div>

        <div className=" w-full lg:flex items-center justify-center lg:ml-5">
          <img src={bgc} alt="Image" />
        </div>

    </section>
  );
};

export default Contact;
