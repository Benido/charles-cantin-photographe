import styles from "./Contact.module.css"

const Contact = ({ titre, corps }) => {

  return (
    <div className={styles.container}>
      <div className={styles.contactText}>
        <h1>{titre}</h1>
        <p>{corps}</p>
      </div>
      <form className={styles.form} name="contact" method="POST" data-netlify="true">
        <div className={styles.nameContainer}>
          <div>
            <label for="firstName">Prénom: </label>
            <input type="text" name="firstName" />
          </div>
            <div><label for="lastName">Nom: </label>
            <input type="text" name="lastName" />
          </div>
        </div>        
          <div><label for="email">E-mail: </label>
          <input type="email" name="email" />
        </div>  
          <div><label for="message">Votre message </label>
          <textarea name="message" rows="5"/>
        </div>                
        <button className={styles.button} type="submit">Envoyer</button>        
      </form>
    </div>
  )
}

export default Contact