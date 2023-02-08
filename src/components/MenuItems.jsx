import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../logic/MemoryGameLogic';

function MenuItems() {
  const {
    gameStarter,
    sixXSix,
    eightXSix,
    setSixXSix,
    setEightXSix,
    time,
    setTime,
    setGameTime,
  } = useContext(GameContext);

  const navigate = useNavigate();

  return (
    <div className="w-[16.5rem] h-[21rem] shadow-2xl px-4 flex flex-col justify-around rounded-md">
      <div className="text-[#e6e2df] space-y-3">
        <p className="tracking-widest text-lg font-semibold">Difficulty</p>
        <div className="flex justify-around">
          <button
            onClick={() => {
              setSixXSix(true);
              setEightXSix(false);
            }}
            className={`${
              sixXSix ? 'bg-[#b84509] font-bold' : 'bg-transparent'
            } rounded-full px-2 py-0.5 transition-all duration-300`}
          >
            6x6
          </button>
          <button
            className={`${
              eightXSix ? 'bg-[#b84509] font-bold' : 'bg-transparent'
            } rounded-full px-2 py-0.5 transition-all duration-300`}
            onClick={() => {
              setEightXSix(true);
              setSixXSix(false);
            }}
          >
            6x8
          </button>
        </div>
      </div>
      <div className="text-[#e6e2df] space-y-3">
        <p
          className="tracking-widest
          text-lg font-semibold"
        >
          Time
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => {
              setTime(120);
              setGameTime(120);
            }}
            className={`${
              time === 120 ? 'bg-[#b84509] font-bold' : 'bg-transparent'
            } transition-all duration-300 px-1 rounded-md`}
          >
            2min
          </button>
          <button
            onClick={() => {
              setTime(180);
              setGameTime(180);
            }}
            className={`${
              time === 180 ? 'bg-[#b84509] font-bold' : 'bg-transparent'
            } transition-all duration-300 px-1 rounded-md`}
          >
            3min
          </button>
          <button
            onClick={() => {
              setTime(300);
              setGameTime(300);
            }}
            className={`${
              time === 300 ? 'bg-[#b84509] font-bold' : 'bg-transparent'
            } transition-all duration-300 px-1 rounded-md`}
          >
            5min
          </button>
          <button
            onClick={() => {
              setTime(360);
              setGameTime(360);
            }}
            className={`${
              time === 360 ? 'bg-[#b84509] font-bold' : 'bg-transparent'
            } transition-all duration-300 px-1 rounded-md`}
          >
            6min
          </button>
        </div>
      </div>
      <div className="self-center">
        <button
          className={`${
            time !== null && (sixXSix || eightXSix)
              ? 'bg-green-600 hover:px-5'
              : 'bg-red-600 cursor-not-allowed'
          } transition-all duration-300 px-3 py-2 rounded-md tracking-wider text-white`}
          onClick={() => {
            navigate('/game');
            gameStarter();
          }}
          disabled={time !== null && (sixXSix || eightXSix) ? false : true}
        >
          {time !== null && (sixXSix || eightXSix)
            ? 'START GAME'
            : 'CHOOSE OPTIONS'}
        </button>
      </div>
    </div>
  );
}

export default MenuItems;
