import { useState, useEffect, createContext } from 'react';

export const GameContext = createContext();

const cardIcons = {
  1: require('../assets/images/c3po.png'),
  2: require('../assets/images/chewbacca.png'),
  3: require('../assets/images/darth-vader.png'),
  4: require('../assets/images/death.png'),
  5: require('../assets/images/dooku.png'),
  6: require('../assets/images/grie.png'),
  7: require('../assets/images/grooku.jpg'),
  8: require('../assets/images/han.png'),
  9: require('../assets/images/jar.png'),
  10: require('../assets/images/kylo.jpg'),
  11: require('../assets/images/leia.png'),
  12: require('../assets/images/luke.png'),
  13: require('../assets/images/mando.png'),
  14: require('../assets/images/maul.png'),
  15: require('../assets/images/obiwan.webp'),
  16: require('../assets/images/padme.jpg'),
  17: require('../assets/images/palpatine.png'),
  18: require('../assets/images/qui.png'),
  19: require('../assets/images/r2.png'),
  20: require('../assets/images/rex.jpg'),
  21: require('../assets/images/tano.png'),
  22: require('../assets/images/trooper.png'),
  23: require('../assets/images/windu.png'),
  24: require('../assets/images/yoda.png'),
};

function MemoryGameLogic({ children }) {
  const [cards, setCards] = useState([
    { id: 1, value: 1, isFlipped: false, isMatched: false },
    { id: 2, value: 1, isFlipped: false, isMatched: false },
    { id: 3, value: 2, isFlipped: false, isMatched: false },
    { id: 4, value: 2, isFlipped: false, isMatched: false },
    { id: 5, value: 3, isFlipped: false, isMatched: false },
    { id: 6, value: 3, isFlipped: false, isMatched: false },
    { id: 7, value: 4, isFlipped: false, isMatched: false },
    { id: 8, value: 4, isFlipped: false, isMatched: false },
    { id: 9, value: 5, isFlipped: false, isMatched: false },
    { id: 10, value: 5, isFlipped: false, isMatched: false },
    { id: 11, value: 6, isFlipped: false, isMatched: false },
    { id: 12, value: 6, isFlipped: false, isMatched: false },
    { id: 13, value: 7, isFlipped: false, isMatched: false },
    { id: 14, value: 7, isFlipped: false, isMatched: false },
    { id: 15, value: 8, isFlipped: false, isMatched: false },
    { id: 16, value: 8, isFlipped: false, isMatched: false },
    { id: 17, value: 9, isFlipped: false, isMatched: false },
    { id: 18, value: 9, isFlipped: false, isMatched: false },
    { id: 19, value: 10, isFlipped: false, isMatched: false },
    { id: 20, value: 10, isFlipped: false, isMatched: false },
    { id: 21, value: 11, isFlipped: false, isMatched: false },
    { id: 22, value: 11, isFlipped: false, isMatched: false },
    { id: 23, value: 12, isFlipped: false, isMatched: false },
    { id: 24, value: 12, isFlipped: false, isMatched: false },
    { id: 25, value: 13, isFlipped: false, isMatched: false },
    { id: 26, value: 13, isFlipped: false, isMatched: false },
    { id: 27, value: 14, isFlipped: false, isMatched: false },
    { id: 28, value: 14, isFlipped: false, isMatched: false },
    { id: 29, value: 15, isFlipped: false, isMatched: false },
    { id: 30, value: 15, isFlipped: false, isMatched: false },
    { id: 31, value: 16, isFlipped: false, isMatched: false },
    { id: 32, value: 16, isFlipped: false, isMatched: false },
    { id: 33, value: 17, isFlipped: false, isMatched: false },
    { id: 34, value: 17, isFlipped: false, isMatched: false },
    { id: 35, value: 18, isFlipped: false, isMatched: false },
    { id: 36, value: 18, isFlipped: false, isMatched: false },
    { id: 37, value: 19, isFlipped: false, isMatched: false },
    { id: 38, value: 19, isFlipped: false, isMatched: false },
    { id: 39, value: 20, isFlipped: false, isMatched: false },
    { id: 40, value: 20, isFlipped: false, isMatched: false },
    { id: 41, value: 21, isFlipped: false, isMatched: false },
    { id: 42, value: 21, isFlipped: false, isMatched: false },
    { id: 43, value: 22, isFlipped: false, isMatched: false },
    { id: 44, value: 22, isFlipped: false, isMatched: false },
    { id: 45, value: 23, isFlipped: false, isMatched: false },
    { id: 46, value: 23, isFlipped: false, isMatched: false },
    { id: 47, value: 24, isFlipped: false, isMatched: false },
    { id: 48, value: 24, isFlipped: false, isMatched: false },
  ]);

  const [easierCard, setEasierCard] = useState([
    { id: 1, value: 1, isFlipped: false, isMatched: false },
    { id: 2, value: 1, isFlipped: false, isMatched: false },
    { id: 3, value: 2, isFlipped: false, isMatched: false },
    { id: 4, value: 2, isFlipped: false, isMatched: false },
    { id: 5, value: 3, isFlipped: false, isMatched: false },
    { id: 6, value: 3, isFlipped: false, isMatched: false },
    { id: 7, value: 4, isFlipped: false, isMatched: false },
    { id: 8, value: 4, isFlipped: false, isMatched: false },
    { id: 9, value: 5, isFlipped: false, isMatched: false },
    { id: 10, value: 5, isFlipped: false, isMatched: false },
    { id: 11, value: 6, isFlipped: false, isMatched: false },
    { id: 12, value: 6, isFlipped: false, isMatched: false },
    { id: 13, value: 7, isFlipped: false, isMatched: false },
    { id: 14, value: 7, isFlipped: false, isMatched: false },
    { id: 15, value: 8, isFlipped: false, isMatched: false },
    { id: 16, value: 8, isFlipped: false, isMatched: false },
    { id: 17, value: 9, isFlipped: false, isMatched: false },
    { id: 18, value: 9, isFlipped: false, isMatched: false },
    { id: 19, value: 10, isFlipped: false, isMatched: false },
    { id: 20, value: 10, isFlipped: false, isMatched: false },
    { id: 21, value: 11, isFlipped: false, isMatched: false },
    { id: 22, value: 11, isFlipped: false, isMatched: false },
    { id: 23, value: 12, isFlipped: false, isMatched: false },
    { id: 24, value: 12, isFlipped: false, isMatched: false },
    { id: 25, value: 13, isFlipped: false, isMatched: false },
    { id: 26, value: 13, isFlipped: false, isMatched: false },
    { id: 27, value: 14, isFlipped: false, isMatched: false },
    { id: 28, value: 14, isFlipped: false, isMatched: false },
    { id: 29, value: 15, isFlipped: false, isMatched: false },
    { id: 30, value: 15, isFlipped: false, isMatched: false },
    { id: 31, value: 16, isFlipped: false, isMatched: false },
    { id: 32, value: 16, isFlipped: false, isMatched: false },
    { id: 33, value: 17, isFlipped: false, isMatched: false },
    { id: 34, value: 17, isFlipped: false, isMatched: false },
    { id: 35, value: 18, isFlipped: false, isMatched: false },
    { id: 36, value: 18, isFlipped: false, isMatched: false },
  ]);

  const [shuffledCards, setShuffledCards] = useState([]);
  const [time, setTime] = useState(null);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [twoCardsFlipped, setTwoCardsFlipped] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [sixXSix, setSixXSix] = useState(false);
  const [eightXSix, setEightXSix] = useState(false);
  const [pairCount, setPairCount] = useState(0);
  const [playerWin, setPlayerWin] = useState(true);
  const [isTimeZero, setIsTimeZero] = useState(false);
  const [gameTime, setGameTime] = useState(null);
  const [isCardsChecking, setIsCardChecking] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const gameStarter = () => {
    setIsGameStarted(true);
    setIsTimeZero(false);
    setPlayerWin(false);
    setFirstCard(null);
    setSecondCard(null);
    if (sixXSix) {
      setShuffledCards(shuffleArray(easierCard));
    }
    if (eightXSix) {
      setShuffledCards(shuffleArray(cards));
    }
  };

  const newGameHandler = () => {
    setIsGameStarted(false);
    setTime(null);
    setPairCount(0);
    setFirstCard(null);
    setSecondCard(null);
    setIsTimeZero(false);
    setPlayerWin(false);
  };

  const resetHandler = () => {
    setTime(gameTime);
    setIsGameStarted(true);
    setPairCount(0);
    setIsTimeZero(false);
    setPlayerWin(false);
    setFirstCard(null);
    setSecondCard(null);
    if (sixXSix) {
      setShuffledCards(shuffleArray(easierCard));
    }
    if (eightXSix) {
      setShuffledCards(shuffleArray(cards));
    }
  };

  useEffect(() => {
    let timer;
    if (isGameStarted && !isTimeZero && !playerWin) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (time <= 0) {
      setIsTimeZero(true);
      setIsGameStarted(false);
      setPlayerWin(false);
    }
    return () => clearTimeout(timer);
  }, [isGameStarted, time, isTimeZero, playerWin]);

  useEffect(() => {
    if (pairCount === 18 && sixXSix) {
      setPlayerWin(true);
      setIsGameStarted(false);
    }
    if (pairCount === 24 && eightXSix) {
      setPlayerWin(true);
      setIsGameStarted(false);
    }
  }, [eightXSix, pairCount, sixXSix]);

  const clickHandler = (id) => {
    if (twoCardsFlipped) {
      return;
    }

    setShuffledCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isFlipped: true,
          };
        }
        return card;
      }),
    );

    if (!firstCard) {
      setFirstCard(id);
      return;
    }
    setSecondCard(id);
  };

  useEffect(() => {
    if (secondCard !== null && firstCard !== null && firstCard !== secondCard) {
      if (
        shuffledCards.find((card) => card.id === firstCard).value ===
        shuffledCards.find((card) => card.id === secondCard).value
      ) {
        setTwoCardsFlipped(true);
        setPairCount(pairCount + 1);
        setIsCardChecking(true);
        const delay = setInterval(() => {
          setShuffledCards((prevCards) =>
            prevCards.map((card) => {
              if (card.id === firstCard || card.id === secondCard) {
                return {
                  ...card,
                  isFlipped: true,
                  isMatched: true,
                };
              }
              return card;
            }),
          );
          setFirstCard(null);
          setSecondCard(null);
          setTwoCardsFlipped(false);
          setIsCardChecking(false);
        }, 1000);

        return () => {
          clearInterval(delay);
        };
      }

      if (
        shuffledCards.find((card) => card.id === firstCard).value !==
          shuffledCards.find((card) => card.id === secondCard).value &&
        secondCard !== null &&
        firstCard !== null
      ) {
        setTwoCardsFlipped(true);
        setIsCardChecking(true);
        const delay = setInterval(() => {
          setShuffledCards((prevCards) =>
            prevCards.map((card) => {
              if (card.id === firstCard || card.id === secondCard) {
                return {
                  ...card,
                  isFlipped: false,
                  isMatched: false,
                };
              }
              return card;
            }),
          );
          setFirstCard(null);
          setSecondCard(null);
          setTwoCardsFlipped(false);
          setIsCardChecking(false);
        }, 1000);

        return () => {
          clearInterval(delay);
        };
      }
    }
  }, [firstCard, secondCard, shuffledCards]);

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        clickHandler,
        cardIcons,
        shuffledCards,
        gameStarter,
        sixXSix,
        eightXSix,
        setEightXSix,
        setSixXSix,
        time,
        setTime,
        pairCount,
        playerWin,
        isTimeZero,
        gameTime,
        setGameTime,
        resetHandler,
        newGameHandler,
        isCardsChecking,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default MemoryGameLogic;
