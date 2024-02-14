import React from 'react';
import { useLocation } from 'react-router-dom';

function YourBotArmy() {
  const location = useLocation();
  const selectedBot = location.state.selectedBot;

  return (
    <div>
      <h2>Your Bot Army</h2>
      {selectedBot && (
        <div>
          <h3>{selectedBot.name}</h3>
          <img src={selectedBot.avatar_url} alt={`Avatar of ${selectedBot.name}`} />
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
