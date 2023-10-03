import { useState, useEffect } from "react"

import Categories from "./Categories"
import PictureGrid from "./PictureGrid"

import styles from "./Gallery.module.css"


const Gallery = ({ photos, titre, corps }) => {

  const [categories, setCategories] = useState([])

  let photosFiltered = photos
  if (categories.length > 0) {
    photosFiltered = photos.filter((pic) => categories.includes(pic.categories[0]))
  }
  
  const handleCategories = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories(categories.filter((categorie) => categorie !== e.target.value))
    } else {
      let newCategories = [...categories, e.target.value]
      setCategories(newCategories)
    }      
    if (e.target.className.includes("active"))  {
      e.target.className += " active"  
      e.target.className -= " active"}
  }

  return (
  <div className={styles.Gallery}>
    <div className={styles.galleryText}>
      <h1>{titre}</h1>
      <p>{corps}</p>
      <p>{categories.join(' ')}</p>
    </div>
    <Categories handleCategories={handleCategories} handleReset={() => setCategories([])}/>
    <PictureGrid displayedPhotos={photosFiltered}/>
  </div>
  )
}


export default Gallery