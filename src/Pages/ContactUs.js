import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { clear } from "@testing-library/user-event/dist/clear";


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



    <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
  <div class="card-body">
  <div className="mx-auto">
      <form ref={form} onSubmit={sendEmail}>
      <div className="grid grid-cols-1" >
      <h2 className="mx-auto font-serif text-3xl">Contact Us</h2>
      <input type="text" required placeholder="Your Name" name="name" class="input input-bordered w-72 mx-auto mt-2" />
      <input type="email" required placeholder="Sender Email" name="email" class="input input-bordered w-72 mx-auto mt-2" />
      <textarea name="message" required placeholder="Your Message"  class="input input-bordered w-72 h-32 mx-auto mt-2"></textarea>
      <button className="btn btn-accent mt-3" type="submit">Send Mail</button>
      </div>
      </form>
     </div>
  </div>
</div>

  
     
   
  );
};