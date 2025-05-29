import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipes from './Recipes'
import Gallery from './Gallery'


function List(props) {
  if(!props.animals) {
    return <div>Loading...</div>;
  }

  if(props.animals.length === 0) {
    return <div>There are no animals in the list !</div>;
  }

  return <ul>
    {props.animals.map((animal) => {
      return <li key={animal}>{animal}</li>
    })}
  </ul>
}

const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function App() {
// const animals = ['camel', 'meow']

// return <div>
//   <h1> Animals: </h1>
//   <List animals={animals} />
// </div>
// https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key challenge 2
// return <Recipes recipes = {recipes} />

  return <Gallery />
}

export default App
