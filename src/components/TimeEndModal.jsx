import React, { useContext } from 'react';
import { GameContext } from '../logic/MemoryGameLogic';
import { useNavigate } from 'react-router-dom';

function TimeEndModal() {
  const { pairCount, resetHandler, newGameHandler } = useContext(GameContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center text-center space-y-14 w-[16.5rem] h-[20rem] bg-black/30 text-white rounded-md">
      <p>Your time has ended! </p> <p>You found {pairCount} pair!</p>
      <div className="space-x-7">
        <button
          className="bg-[#b84509] px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-green-600"
          onClick={() => {
            newGameHandler();
            navigate('/');
          }}
        >
          New game
        </button>
        <button
          className="bg-[#b84509] px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-green-600"
          onClick={() => resetHandler()}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default TimeEndModal;
