"use client"
import styles from "./styles.module.css";
import Image from "next/image";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Page() {

  //email functionality
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`, form.current,  `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className={styles.contact}>
      <div className={styles.leftdiv}>
        <form class={styles.form} ref={form} onSubmit={sendEmail}>
          <input placeholder="name" type="text" name="user_name"></input>
          <input placeholder="email" type="email" name="user_email"></input>
          <textarea placeholder="your feedback" rows="10" name="message"></textarea>
          <input type="submit" value="Send" className={styles.subbutton}/>
        </form>
      </div>
      <div className={styles.rightdiv}>
        <Image
          src="/images/contact.svg"
          width={380}
          height={380}
          className={styles.rightimg}
        ></Image>
      </div>
    </section>
  );
}
