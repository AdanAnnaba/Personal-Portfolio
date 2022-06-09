import { useRef } from "react";
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kk2zmrn', 'template_wdf5x49', form.current, 'fSe9JWV5B0enXesca')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  
     <div className="mx-auto">
          <form ref={form} onSubmit={sendEmail}>
      <div className="grid grid-cols-1" >
          <h2 className="mx-auto">Contact Us</h2>
      <input type="text" required placeholder="Your Name" name="name" class="input input-bordered w-64 mx-auto" />
      <input type="email" required placeholder="Sender Email" name="email" class="input input-bordered w-64 mx-auto" />
      <textarea name="message" required placeholder="Your Message"  class="input input-bordered w-64 h-32 mx-auto"></textarea>
      <button type="submit">Send Mail</button>
      </div>
      </form>
     </div>
   
  );
};