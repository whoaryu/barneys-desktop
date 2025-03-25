import React, { useState, useEffect } from "react";
import { Check, X, RefreshCw } from "lucide-react";

// Using the provided quotes
const quotes = [
  { quote: "Nothing good happens after 2 AM.", character: "Ted Mosby" },
  { quote: "I'm not a father. I'm a cool uncle. Uncle Barney.", character: "Barney Stinson" },
  { quote: "Lawyered!", character: "Marshall Eriksen" },
  { quote: "Whenever I'm sad, I stop being sad and be awesome instead.", character: "Barney Stinson" },
  { quote: "A lie is just a great story that someone ruined with the truth.", character: "Barney Stinson" },
  { quote: "If you have chemistry, you only need one other thing. Timing.", character: "Ted Mosby" },
  { quote: "I love everything about her, and I'm not a guy who says that lightly. I'm a guy who has faked love his entire life.", character: "Barney Stinson" },
  { quote: "The Bro Code is not just a book… it's a way of life.", character: "Barney Stinson" },
  { quote: "I'm not ready to settle down. I want to stay in the game.", character: "Barney Stinson" },
  { quote: "You can't just skip ahead to where you think your life should be.", character: "Lily Aldrin" },
  { quote: "Because sometimes even if you know how something's gonna end, that doesn't mean you can't enjoy the ride.", character: "Ted Mosby" },
  { quote: "If you're not scared, you're not taking a chance. If you're not taking a chance, what the hell are you doing?", character: "Ted Mosby" },
  { quote: "People don't get the chance to discover each other anymore.", character: "Tracy McConnell" },
  { quote: "You can't design your life like a building. It doesn't work that way. You just have to live it… and it'll design itself.", character: "Lily Aldrin" },
  { quote: "Sometimes we search for one thing but discover another.", character: "Barney Stinson" },
  { quote: "The future is scary, but you can't just run back to the past because it's familiar.", character: "Robin Scherbatsky" },
  { quote: "You are the love of my life. Everything I have and everything I am is yours forever.", character: "Barney Stinson" },
  { quote: "We struggle so hard to hold on to these things that we know are gonna disappear eventually. And that's really noble.", character: "Lily Aldrin" },
  { quote: "When you meet the right person, you know it. You can't stop thinking about them. They're your best friend.", character: "Ted Mosby" },
  { quote: "There's more than one love story in your life.", character: "Tracy McConnell" }
];

const QuoteGame = () => {
  const [allQuotes, setAllQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Characters from the show
  const characters = [
    "Ted Mosby", 
    "Barney Stinson", 
    "Marshall Eriksen", 
    "Robin Scherbatsky", 
    "Lily Aldrin", 
    "Tracy McConnell"
  ];

  useEffect(() => {
    // Initialize game with shuffled quotes
    setAllQuotes(shuffleArray([...quotes]));
  }, []);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const currentQuote = allQuotes[currentQuoteIndex] || { quote: "Loading...", character: "" };

  const checkAnswer = (character) => {
    if (showAnswer) return;
    
    const isCorrect = character === currentQuote.character;
    
    if (isCorrect) {
      setScore(score + 1);
      setMessage("Correct! 🎉");
    } else {
      setMessage("Wrong! 😕");
      setShowAnswer(true);
    }

    setTimeout(() => {
      if (currentQuoteIndex < allQuotes.length - 1) {
        setFadeOut(true);
        setTimeout(() => {
          setCurrentQuoteIndex(currentQuoteIndex + 1);
          setMessage("");
          setShowAnswer(false);
          setFadeOut(false);
        }, 500);
      } else {
        setGameOver(true);
      }
    }, isCorrect ? 1200 : 2500);
  };

  const restartGame = () => {
    setAllQuotes(shuffleArray([...quotes]));
    setCurrentQuoteIndex(0);
    setScore(0);
    setMessage("");
    setGameOver(false);
    setShowAnswer(false);
    setFadeOut(false);
  };

  const getScoreMessage = () => {
    const percentage = Math.round((score / allQuotes.length) * 100);
    if (percentage >= 90) return "Legendary! Barney would be proud.";
    if (percentage >= 70) return "Awesome! High five! ✋";
    if (percentage >= 50) return "Not bad. At least it's above average.";
    return "Challenge yourself to do better next time!";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900 text-white p-6 rounded-lg shadow-xl">
      {/* Header styled like Barney's suit */}
      <div className="w-full text-center p-4 mb-6 bg-indigo-900 border-b-4 border-indigo-600 rounded-t-lg">
        <h1 className="text-3xl font-bold text-yellow-400">How I Met Your Mother</h1>
        <h2 className="text-2xl font-bold">Who Said It?</h2>
      </div>

      {!gameOver ? (
        <>
          <div className={`transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
            <div className="relative">
              <p className="text-xl italic text-center bg-gray-800 p-6 rounded-md mb-8 w-full max-w-2xl min-h-24 flex items-center justify-center">
                "{currentQuote.quote}"
              </p>
              {showAnswer && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-4 bg-yellow-500 text-gray-900 px-4 py-1 rounded-full font-bold">
                  {currentQuote.character}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
              {characters.map((character) => (
                <button
                  key={character}
                  onClick={() => checkAnswer(character)}
                  disabled={showAnswer}
                  className={`
                    relative overflow-hidden font-bold py-3 px-4 rounded-md transition-all
                    ${character === "Barney Stinson" 
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-yellow-400" 
                      : "bg-blue-600 hover:bg-blue-700 text-white"}
                    ${showAnswer && character === currentQuote.character ? "ring-4 ring-green-500" : ""}
                    ${showAnswer ? "opacity-70" : ""}
                  `}
                >
                  {character}
                  {showAnswer && character === currentQuote.character && (
                    <Check className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-300" size={16} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {message && (
            <div className={`mt-6 text-xl font-bold ${message.includes("Correct") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </div>
          )}

          <div className="mt-6 flex items-center justify-center">
            <div className="bg-gray-800 px-6 py-2 rounded-full">
              <span className="text-lg font-semibold">Score: </span>
              <span className="text-xl font-bold text-yellow-300">{score}</span>
              <span className="text-gray-400"> / {allQuotes.length}</span>
            </div>
          </div>

          <div className="w-full max-w-2xl mt-4 bg-gray-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-yellow-400 h-full transition-all duration-300 ease-out"
              style={{ width: `${((currentQuoteIndex + 1) / allQuotes.length) * 100}%` }}
            ></div>
          </div>
        </>
      ) : (
        <div className="text-center p-8 bg-gray-800 rounded-lg max-w-2xl w-full">
          <h3 className="text-3xl font-bold mb-4">Game Over!</h3>
          <p className="text-2xl mb-6">
            Your score: <span className="text-yellow-300 font-bold">{score}</span> out of {allQuotes.length}
          </p>
          <p className="text-xl mb-8 text-blue-300">{getScoreMessage()}</p>
          
          <button
            onClick={restartGame}
            className="flex items-center justify-center mx-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md transition-all"
          >
            <RefreshCw className="mr-2" size={20} />
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteGame;

export const displayQuoteGame = () => {
  return <QuoteGame />;
};