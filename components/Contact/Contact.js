import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./Contact.module.css"
import React from "react"

const Contact = ({ titre, corps, form }) => {

  const [hydrated, setHydrated] = useState(false);
	  useEffect(() => {
		setHydrated(true);
	}, []);
	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}

  return (
    <div className={styles.container}>
      <div className={styles.contactText}>
        <h1>{titre}</h1>
        <p>{corps}</p>
      </div>
      <div className={styles.formContainer}>
        <form 
          className={styles.form} 
          name="contact" 
          method="POST"
          // action={form}
          encType="application/x-www-form-urlencoded" 
          data-netlify="true" 
          onSubmit="submit"
          >
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.nameContainer}>
            <div>
              <label htmlFor="firstName">Prénom: </label>
              <input type="text" name="firstName" />
            </div>
              <div>
                <label htmlFor="lastName">Nom: </label>
                <input type="text" name="lastName" />
              </div>
            </div>        
            <div>
              <label htmlFor="email">E-mail: </label>
              <input type="email" name="email" />
            </div>  
            <div>
              <label htmlFor="message">Votre message </label>
            <textarea name="message" rows="5"/>
            </div>                
          <button className={styles.button} type="submit">Envoyer</button>        
        </form>
      </div>
      <div className={styles.pictureContainer}>
      <Image 
        className={styles.pictureBottom} 
        src={"/images/contact-daria-kraplak-d34DtRp1bqo-unsplash.webp"} 
        fill={true}
        sizes="(max-width: 384px) 90vw,
              (max-width: 600px) 60vw,
              50vw"
        alt={""}/>
      </div>
    </div>
  )
}

export default Contact