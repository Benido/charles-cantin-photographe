import { useState, useEffect } from "react"

import styles from "./Contact.module.css"
import React from "react"



const Contact = ({ titre, corps }) => {

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
      <form 
        className={styles.form} 
        name="contact" 
        method="POST"
        encType="application/x-www-form-urlencoded" 
        data-netlify="true" 
        onSubmit="submit"
        >
        <div className={styles.nameContainer}>
          <div>
            <label for="firstName">Prénom: </label>
            <input type="text" name="firstName" />
          </div>
            <div>
              <label for="lastName">Nom: </label>
              <input type="text" name="lastName" />
          </div>
          </div>        
          <div>
            <label for="email">E-mail: </label>
            <input type="email" name="email" />
          </div>  
          <div>
            <label for="message">Votre message </label>
          <textarea name="message" rows="5"/>
        </div>                
        <button className={styles.button} type="submit">Envoyer</button>        
      </form>
    </div>
  )
}

export default Contact