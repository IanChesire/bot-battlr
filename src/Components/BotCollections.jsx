import { useState, useEffect } from 'react'
import YourBotArmy from './YourBotArmy';

function BotCollections() {

    const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((response) => response.json())
    .then((data) => setBots (data))
  }, []);

  function addBotToMyArmy(newArmyBots) {
    setBots(...bots, newArmyBots);
  }

  return (
    <>
    <h1>My Bot Army!</h1>
    <div className='cards-container'>
    {bots.map((bot) => (
        <div className='bot-cards' key={bot.id}>
            <ul>
          <h2>{bot.name}</h2>
          <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`}/> 
          </ul>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          
        </div>
      ))}
      <YourBotArmy armyOfBots={addBotToMyArmy}/>
    </div>
    </>
  )
}

export default BotCollections;


