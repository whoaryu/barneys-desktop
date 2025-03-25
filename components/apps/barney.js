import React, { useState, useEffect } from 'react';
import { Star, Award, Briefcase, Bookmark, Heart, ThumbsUp, TrendingUp } from 'lucide-react';

const AboutBarney = () => {
  const [activeScreen, setActiveScreen] = useState("about");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Get last visited screen from localStorage
    const lastVisitedScreen = localStorage.getItem("about-section") || "about";
    setActiveScreen(lastVisitedScreen);
    
    // Trigger entrance animation
    setAnimate(true);
    
    // Optional: Track page view if ReactGA is available
    if (typeof window !== 'undefined' && window.ReactGA) {
      window.ReactGA.send({ hitType: "pageview", page: `/${lastVisitedScreen}`, title: "Barney Stinson" });
    }
  }, []);

  const changeScreen = (screen) => {
    setAnimate(false);
    
    // Short delay for exit animation
    setTimeout(() => {
      setActiveScreen(screen);
      setAnimate(true);
      localStorage.setItem("about-section", screen);
      
      // Optional: Track screen change if ReactGA is available
      if (typeof window !== 'undefined' && window.ReactGA) {
        window.ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Barney Stinson" });
      }
    }, 300);
  };

  // Render the active screen content
  const renderScreen = () => {
    switch (activeScreen) {
      case "about":
        return <About animate={animate} />;
      case "legendary":
        return <LegendaryMoments animate={animate} />;
      case "suitup":
        return <SuitUp animate={animate} />;
      case "playbook":
        return <Playbook animate={animate} />;
      case "brocode":
        return <BroCode animate={animate} />;
      default:
        return <About animate={animate} />;
    }
  };

  return (
    <div className="w-full h-full flex bg-gray-900 text-white select-none relative">
      {/* Sidebar */}
      <div className="flex flex-col w-1/4 text-sm overflow-y-auto border-r border-gray-800 bg-gray-800">
        <div className="p-4 bg-indigo-900 border-b border-indigo-800">
          <h1 className="text-xl font-bold text-center text-yellow-400">Barney Stinson</h1>
          <p className="text-center text-white opacity-80 text-sm mt-1">Legendary Since 2005</p>
        </div>
        
        <NavLink 
          id="about" 
          label="About Me" 
          icon={<Star size={18} />}
          active={activeScreen === "about"} 
          onClick={() => changeScreen("about")} 
        />
        
        <NavLink 
          id="legendary" 
          label="Legendary Moments" 
          icon={<Award size={18} />}
          active={activeScreen === "legendary"} 
          onClick={() => changeScreen("legendary")} 
        />
        
        <NavLink 
          id="suitup" 
          label="Suit Up" 
          icon={<Briefcase size={18} />}
          active={activeScreen === "suitup"} 
          onClick={() => changeScreen("suitup")} 
        />
        
        <NavLink 
          id="playbook" 
          label="The Playbook" 
          icon={<Bookmark size={18} />}
          active={activeScreen === "playbook"} 
          onClick={() => changeScreen("playbook")} 
        />
        
        <NavLink 
          id="brocode" 
          label="The Bro Code" 
          icon={<ThumbsUp size={18} />}
          active={activeScreen === "brocode"} 
          onClick={() => changeScreen("brocode")} 
        />
        
        <div className="mt-auto p-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">"Challenge Accepted!"</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col w-3/4 justify-start items-center flex-grow bg-gray-900 overflow-y-auto p-6">
        {renderScreen()}
      </div>
    </div>
  );
};

// Navigation Link Component
const NavLink = ({ id, label, icon, active, onClick }) => (
  <div 
    id={id}
    onClick={onClick}
    className={`
      cursor-pointer px-4 py-3 flex items-center space-x-3 transition-all duration-200
      ${active ? 'bg-indigo-700 text-white' : 'text-gray-300 hover:bg-gray-700'}
    `}
  >
    {icon}
    <span>{label}</span>
    {active && <div className="w-1 h-full bg-yellow-400 absolute right-0"></div>}
  </div>
);

// About Screen
function About({ animate }) {
  return (
    <div className={`w-full max-w-3xl transition-all duration-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <div className="w-32 h-32 rounded-full bg-indigo-800 flex items-center justify-center mb-4 md:mb-0 md:mr-6 border-2 border-yellow-400">
          <span className="text-4xl font-bold text-yellow-400">BS</span>
        </div>
        
        <div className="md:mt-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            Barney Stinson
          </h2>
          <p className="text-xl text-indigo-400 text-center md:text-left">
            <span className="italic">Legen... wait for it... dary!</span>
          </p>
          <div className="mt-4 flex space-x-3 justify-center md:justify-start">
            <Badge color="yellow">Suit Enthusiast</Badge>
            <Badge color="indigo">Professional Bro</Badge>
            <Badge color="blue">Wingman Extraordinaire</Badge>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">About Me</h3>
        <p className="text-lg mb-4">
          My name is <span className="font-bold">Barney Stinson</span>, and I'm <span className="text-yellow-400 font-bold">AWESOME!</span> I live in New York City, where I spend my time being legendary, wearing suits, and creating elaborate schemes to meet women.
        </p>
        
        <h4 className="text-xl font-semibold mt-6 mb-3 text-indigo-300">The Barney Manifesto:</h4>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start space-x-3">
            <Star size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
            <span>I live by three words: <span className="font-bold">Suit Up!</span></span>
          </li>
          <li className="flex items-start space-x-3">
            <Award size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
            <span>Author of <span className="font-bold">The Bro Code</span> and <span className="font-bold">The Playbook</span>.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Heart size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
            <span>Professional <span className="font-bold">wingman</span> and <span className="font-bold">legendary storyteller</span>.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Briefcase size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
            <span>My job? <span className="italic">Please</span>. <span className="text-sm">(Hint: PLEASE)</span></span>
          </li>
          <li className="flex items-start space-x-3">
            <TrendingUp size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
            <span>I have a success rate with women that defies both math and science.</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-800">
        <p className="text-lg font-semibold text-center text-yellow-300">"When I get sad, I stop being sad and be awesome instead. True story."</p>
      </div>
    </div>
  );
}

// Legendary Moments Screen
function LegendaryMoments({ animate }) {
  return (
    <div className={`w-full max-w-3xl transition-all duration-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Legendary Moments</h2>
      <p className="text-lg mb-6">
        Every night has the potential to be legendary when you're Barney Stinson. Here are some of my most epic achievements:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <MomentCard 
          title="The Perfect Week" 
          description="Seven ladies in seven days without a single rejection. A feat previously thought impossible." 
          icon={<Award className="text-yellow-400" size={24} />} 
        />
        
        <MomentCard 
          title="The Playbook" 
          description="Created, authored and mastered over 100 different plays to meet women, including 'The Lorenzo Von Matterhorn'." 
          icon={<Bookmark className="text-yellow-400" size={24} />} 
        />
        
        <MomentCard 
          title="Robin Sparkles Video" 
          description="Discovered Robin's secret past as Canadian pop star Robin Sparkles and her hit 'Let's Go to the Mall'." 
          icon={<Star className="text-yellow-400" size={24} />} 
        />
        
        <MomentCard 
          title="Slap Bet" 
          description="Endured Marshall's legendary slaps with dignity and only minimal whimpering." 
          icon={<ThumbsUp className="text-yellow-400" size={24} />} 
        />
        
        <MomentCard 
          title="Suited Up" 
          description="Maintained a perfect suit-wearing streak even in situations where suits are completely inappropriate." 
          icon={<Briefcase className="text-yellow-400" size={24} />} 
        />
        
        <MomentCard 
          title="Challenge Accepted" 
          description="Accepted and conquered countless challenges that tested the very limits of awesome." 
          icon={<TrendingUp className="text-yellow-400" size={24} />} 
        />
      </div>
      
      <div className="mt-8 p-5 bg-indigo-900 bg-opacity-30 rounded-lg border border-indigo-800">
        <h3 className="text-xl font-bold mb-3 text-center text-yellow-300">The Night Is Always Young</h3>
        <p className="text-center text-lg">
          "Whatever you do in this life, it's not legendary unless your friends are there to see it."
        </p>
      </div>
    </div>
  );
}

// Suit Up Screen
function SuitUp({ animate }) {
  return (
    <div className={`w-full max-w-3xl transition-all duration-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Suit Up!</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
        <p className="text-lg mb-4">
          A gentleman always wears a suit. It's the universal symbol of class, sophistication, and awesomeness. 
          True story – suits make you 83% more attractive and 100% more legendary.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-indigo-300">Why Suits Matter:</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <div className="bg-indigo-700 p-2 rounded-full">
              <Briefcase size={18} className="text-yellow-400" />
            </div>
            <div>
              <span className="font-bold text-lg">The International Symbol of Awesomeness</span>
              <p className="text-gray-300 mt-1">Suits are recognized worldwide as the attire of extraordinary men who do extraordinary things.</p>
            </div>
          </li>
          
          <li className="flex items-start space-x-3">
            <div className="bg-indigo-700 p-2 rounded-full">
              <Award size={18} className="text-yellow-400" />
            </div>
            <div>
              <span className="font-bold text-lg">Statistical Advantage</span>
              <p className="text-gray-300 mt-1">Scientific fact: Everything is 83% more awesome when done while wearing a suit.</p>
            </div>
          </li>
          
          <li className="flex items-start space-x-3">
            <div className="bg-indigo-700 p-2 rounded-full">
              <Star size={18} className="text-yellow-400" />
            </div>
            <div>
              <span className="font-bold text-lg">Suit = Success</span>
              <p className="text-gray-300 mt-1">Suits create respect, demand attention, and establish dominance in any social situation.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-indigo-900 bg-opacity-40 p-6 rounded-lg border border-indigo-800">
        <h3 className="text-xl font-bold mb-4 text-center text-yellow-300">The Suit Pledge</h3>
        <p className="text-center text-lg italic">
          "Nothing suits me like a suit! Every day I'm suited up!"
        </p>
        <div className="mt-4 flex justify-center">
          <Button>SUIT UP NOW!</Button>
        </div>
      </div>
    </div>
  );
}

// The Playbook Screen (New Addition)
function Playbook({ animate }) {
  return (
    <div className={`w-full max-w-3xl transition-all duration-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">The Playbook</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
        <p className="text-lg mb-6">
          The Playbook is my magnum opus - a collection of every scam, con, hustle, hoodwink, gambit, flimflam, stratagem, and bamboozle I've ever used or ever hope to use to pick up chicks and give them the night of their lives.
        </p>
        
        <h3 className="text-xl font-bold mb-4 text-indigo-300">Featured Plays:</h3>
        
        <div className="space-y-4">
          <PlayCard 
            title="The Lorenzo Von Matterhorn" 
            description="Create fake websites about your fictional famous alter ego that women can find when they Google you." 
          />
          
          <PlayCard 
            title="The SNASA" 
            description="Claim to work for SNASA (Secret NASA) and that you've been to the smoon (secret moon)." 
          />
          
          <PlayCard 
            title="The Ted Mosby" 
            description="Pretend to be left at the altar, gain sympathy, and seal the deal." 
          />
          
          <PlayCard 
            title="The Time Traveler" 
            description="Convince her you're from the future and she's about to miss the love of her life." 
          />
        </div>
      </div>
      
      <div className="bg-indigo-900 bg-opacity-40 p-5 rounded-lg border border-indigo-800 text-center">
        <h3 className="text-xl font-bold mb-3 text-yellow-300">Disclaimer</h3>
        <p className="text-gray-300 text-lg italic">
          "The plays in this book are designed to be used by Barney Stinson because he's awesome. Results may vary."
        </p>
      </div>
    </div>
  );
}

// The Bro Code Screen (New Addition)
function BroCode({ animate }) {
  return (
    <div className={`w-full max-w-3xl transition-all duration-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">The Bro Code</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
        <p className="text-lg mb-6">
          The Bro Code is a sacred document that contains the rules, regulations, and guidelines that govern the behavior between bros. It was established in the dawn of history when the first bro picked up a club, looked at his bro, and uttered the fateful words: "Dibs."
        </p>
        
        <h3 className="text-xl font-bold mb-4 text-indigo-300">Selected Articles:</h3>
        
        <div className="space-y-5">
          <div className="p-4 bg-gray-700 rounded-lg">
            <h4 className="font-bold text-lg text-yellow-300">Article 1</h4>
            <p>Bros before hoes. A Bro shall at all times place the well-being and interests of his Bros above those of any woman.</p>
          </div>
          
          <div className="p-4 bg-gray-700 rounded-lg">
            <h4 className="font-bold text-lg text-yellow-300">Article 2</h4>
            <p>A Bro is always entitled to do something stupid, as long as the rest of his Bros are doing it.</p>
          </div>
          
          <div className="p-4 bg-gray-700 rounded-lg">
            <h4 className="font-bold text-lg text-yellow-300">Article 3</h4>
            <p>If a Bro calls dibs on a chick, that chick is off-limits to all other Bros.</p>
          </div>
          
          <div className="p-4 bg-gray-700 rounded-lg">
            <h4 className="font-bold text-lg text-yellow-300">Article 4</h4>
            <p>A Bro never divulges the existence of The Bro Code to a woman. It is a sacred document not to be shared with chicks for any reason.</p>
          </div>
          
          <div className="p-4 bg-gray-700 rounded-lg">
            <h4 className="font-bold text-lg text-yellow-300">Article 87</h4>
            <p>A Bro shall always honor thy father and thy mother, for they are the original Bros in thy life.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-900 bg-opacity-40 p-5 rounded-lg border border-indigo-800 text-center">
        <h3 className="text-xl font-bold mb-3 text-yellow-300">Bro Oath</h3>
        <p className="text-gray-300 text-lg italic">
          "On my honor, I will never break the Bro Code, so help me Bro."
        </p>
      </div>
    </div>
  );
}

// Helper Components
const Badge = ({ children, color }) => {
  const colors = {
    yellow: "bg-yellow-500 bg-opacity-20 text-yellow-300 border-yellow-600",
    indigo: "bg-indigo-500 bg-opacity-20 text-indigo-300 border-indigo-600",
    blue: "bg-blue-500 bg-opacity-20 text-blue-300 border-blue-600"
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${colors[color]}`}>
      {children}
    </span>
  );
};

const Button = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="px-6 py-2 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-400 transition-colors"
  >
    {children}
  </button>
);

const MomentCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-indigo-600 transition-all">
    <div className="flex items-start space-x-3">
      <div className="mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-indigo-300">{title}</h3>
        <p className="mt-1 text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const PlayCard = ({ title, description }) => (
  <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
    <h4 className="font-bold text-lg text-yellow-300">{title}</h4>
    <p className="mt-1 text-gray-300">{description}</p>
  </div>
);

export default AboutBarney;

export const displayAboutBarney = () => {
  return <AboutBarney />;
};