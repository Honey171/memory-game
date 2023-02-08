import React, { useContext } from 'react';
import { GameContext } from '../logic/MemoryGameLogic';
import { useNavigate } from 'react-router-dom';

function GameItems() {
  const {
    shuffledCards,
    cardIcons,
    clickHandler,
    time,
    pairCount,
    sixXSix,
    resetHandler,
    newGameHandler,
    isCardsChecking,
  } = useContext(GameContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between mx-5">
        <div
          className={`space-x-4 text-lg ${
            isCardsChecking ? 'text-red-500' : 'text-white'
          } transition-all duration-200`}
        >
          <button
            onClick={() => resetHandler()}
            disabled={isCardsChecking ? true : false}
            className={`${
              isCardsChecking ? 'cursor-not-allowed' : 'hover:text-green-500'
            }  transition-all duration-200`}
          >
            Reset
          </button>
          <button
            disabled={isCardsChecking ? true : false}
            className={`${
              isCardsChecking ? 'cursor-not-allowed' : 'hover:text-green-500'
            }  transition-all duration-200`}
            onClick={() => {
              newGameHandler();
              navigate('/');
            }}
          >
            New game
          </button>
        </div>
        <div className="space-x-4 text-lg text-white">
          <span>
            Time: {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </span>
          <span>Pair: {pairCount}</span>
        </div>
      </div>
      <div
        className={`grid ${
          sixXSix ? 'grid-cols-6' : 'grid-cols-6 md:grid-cols-8'
        } gap-3 shadow-xl rounded-lg px-4 py-4`}
      >
        {shuffledCards.map((card) => (
          <button
            key={card.id}
            style={{
              backgroundImage: `url(${
                card.isFlipped ? cardIcons[card.value] : ''
              })`,
            }}
            className={`lg:w-24 lg:h-24 md:w-20 md:h-20 w-14 h-14 rounded-full ${
              card.isFlipped
                ? 'bg-transparent border border-white'
                : 'bg-[#0f2264]/60'
            } shadow-lg transition-colors duration-100 cursor-pointer flex items-center justify-center bg-cover outline-white ${
              card.isMatched ? 'border-green-500' : ''
            }`}
            onClick={() => clickHandler(card.id)}
            disabled={card.isMatched ? true : false}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default GameItems;
