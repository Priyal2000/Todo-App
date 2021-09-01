import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Recipe from './components/Recipe';
import Alert from './components/Alert';

const App =() => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "9d12776e";

  const APP_KEY= "6edfe9e3ffe8ab4b3345118ef391e83a";

  const url =
   `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

 

  const getData = async () => {
    if(query !== "")
    {
      const res = await axios.get(url);
      if(!res.data.more)
      {
        return setAlert("No food with such name!");
      }
      setRecipes(res.data.hits);
      console.log(res);
      setAlert("")
      setQuery("");
    }
    else 
    {
      setAlert("Please Enter food item");
      setTimeout(() =>setAlert(""), 3000);
    }
    
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();

  }

  return (
    <div className="App">
      <h1 onClick = {getData}>Recipe Searching App</h1>
      <form className='search-form' onSubmit =
       {onSubmit}>
         {alert !== "" && <Alert alert = {alert}  />}
        <input type = "text" placeholder = "Search Food" autoComplete= "off" onChange = {onChange} value ={query}/>
        <input type ="submit" value = "Search" />
      </form>
      <div className = "recipes" >
         {recipes !== []  && 
         recipes.map(recipe  => 
         <Recipe key ={uuidv4()} recipe = {recipe}> </Recipe>) }
      </div>
    </div>
  );
}

export default App;
