import { useState } from "react"

import styles from "./CategoryButton.module.css"

const CategoryButton = ({children, value, onClick, status}) => {
  //const [isActive, setIsActive] = useState(false)

 /* const handleClick = (event) => {
    onClick(event)
    setIsActive(!isActive)
  }*/

  return (
    <button className={styles.CategoryButton + ' ' + (status ? styles.active : "")} onClick={event => onClick(event)} value={value}>{children}</button>
  )

}

export default CategoryButton