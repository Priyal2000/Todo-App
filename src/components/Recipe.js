import React , {useState} from 'react'

import RecipeDetails from './RecipeDetails'

function Recipe({recipe}) {
    const [show, setShow] = useState(false);
    const { label, image,url,ingredients } = recipe.recipe;
    return (
        <div className = "recipe">
            <h2>{label}</h2>
            <a href = {url} target = "_blank" rel ="noopener noreferrer">
            <img src = {image} alt = {label}></img>
           </a>
            <button onClick = { () =>setShow(!show)}> Ingredients</button>
            { show &&<RecipeDetails ingredients = {ingredients}></RecipeDetails>}
            
        </div>
    )
}

export default Recipe
