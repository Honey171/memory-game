import React, { useContext } from 'react';
import { GameContext } from '../logic/MemoryGameLogic';
import { useNavigate } from 'react-router-dom';

function WinModal() {
  const { resetHandler, newGameHandler } = useContext(GameContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center text-center space-y-5 w-[15rem] h-[21rem] bg-black/30 text-white rounded-md">
      <p>Noice you found all!</p>
      <img
        src="https://custom-doodle.com/wp-content/uploads/doodle/michael-rosen-noice-meme/michael-rosen-noice-meme-doodle.gif"
        alt="noice"
      />
      <div className="space-x-5">
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

export default WinModal;
