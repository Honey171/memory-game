import React, { useContext } from 'react';
import GameItems from '../components/GameItems';
import TimeEndModal from '../components/TimeEndModal';
import WinModal from '../components/WinModal';
import { GameContext } from '../logic/MemoryGameLogic';

function GamePage() {
  const { playerWin, isGameStarted, isTimeZero } = useContext(GameContext);

  return (
    <main className="flex flex-col space-y-10 items-center justify-center h-screen">
      {isGameStarted && <GameItems />}
      {playerWin && <WinModal />}
      {!playerWin && isTimeZero && <TimeEndModal />}
    </main>
  );
}

export default GamePage;
