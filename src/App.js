import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {
  
  const App_ID = "d62bfb4b";
  const App_Key = "8589da38056f28d0291d4d803ee38e75";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken");
  
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${App_ID}&app_key=${App_Key}`);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
      // or
  
      // fetch(tps: /prgnri
      //   .then(response => {
      //     response.json
      //   })
      // );
    }
    getRecipes();
  }

    // () => { getRecipes(); }
    , [query]);
  
 

  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  }

  const formSubmit = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className="header">Find Your Recipe!</h1>
      <form onSubmit={formSubmit} className="search-form">
        <div className="header">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}></input>
          <button type="submit" className="search-button" >Search</button>
          </div>
        {/* recipes : the state we created */}
        <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label + recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}>
          </Recipe>
        )
        // parantheses cause we wanna return jsx
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
