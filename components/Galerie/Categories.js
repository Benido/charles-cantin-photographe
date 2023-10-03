import CategoryButton from "./CategoryButton"
import { useState } from "react"

import styles from "./Categories.module.css"

const Categories = ({ handleCategories, handleReset}) => {

 const initialState = {
  mariage : false,
  grossesse : false,
  bebe : false,
  bapteme : false,
  famille : false,
  portrait : false
 } 

const [activeState, setActiveState] =  useState(initialState)   

const handleClick = (event) => {
  handleCategories(event)
  setActiveState({...activeState, [event.target.value] : !activeState[event.target.value]})
}

const handleResetClick = (event) => {
  handleReset(event)
  setActiveState({...initialState})
} 

return (
  <div >
    <CategoryButton status={activeState.mariage} onClick={handleClick} value="mariage">Mariage</CategoryButton>
    <CategoryButton status={activeState.grossesse} onClick={handleClick} value="grossesse">Grossesse</CategoryButton>
    <CategoryButton status={activeState.bebe} onClick={handleClick} value="bebe">Bébé</CategoryButton>
    <CategoryButton status={activeState.bapteme} onClick={handleClick} value="bapteme">Baptême</CategoryButton>
    <CategoryButton status={activeState.famille} onClick={handleClick} value="famille">Famille</CategoryButton>
    <CategoryButton status={activeState.portrait} onClick={handleClick} value="portrait">Portrait</CategoryButton>
    <CategoryButton status={false} onClick={handleResetClick}>Toutes</CategoryButton> 
  </div>
)}

export default Categories