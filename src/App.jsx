import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  let info = [
    {
      expiry: "28/10/2020",
      logo: "https://pngimg.com/uploads/amazon/small/amazon_PNG27.png",
      title:"Amazon Gift",
      subTitle :"pay",
      onUse:"Desktop-Mobile",
      color:"orange",

    },
    {
      expiry: "29/5/2029",
      logo: "https://pngimg.com/uploads/apple_logo/small/apple_logo_PNG19666.png",
      title:"Apple Gift",
      subTitle :"payment",
      onUse:"Desktop-Mobile",
      color:"grey",

    }
    

  ]
 

  return (
    <div className="App">
      <Cards info={info}/>

    </div>
  )
}

export default App
