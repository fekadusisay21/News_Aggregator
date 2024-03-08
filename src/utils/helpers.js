import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


function generateNumber(){
    const random = Math.random();
    const rounded = Math.round(random*1000000);
    return rounded
}


function sendEmail(e,form) {
    e.preventDefault();
    emailjs
      .sendForm("service_8hh492k", "template_byts9vs", form.current, {
        publicKey: "QxXV0Od-OOutxLAYN",
      })
      .then(
        () => {
          toast.success('Email Sent!!')
        },
        (error) => {
          toast.error(error,'Email not sent')
        }
      )
  }


export {generateNumber,sendEmail}
