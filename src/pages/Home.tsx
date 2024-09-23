import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ChessImage from '../assets/removed_back.png'
// src/pages/Home.tsx
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-chess-white dark:bg-chess-black">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-chess-black dark:text-chess-white leading-tight">
              Master the Game of Kings
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-chess-gray dark:text-chess-gray">
            Improve your skills by playing against our intelligent chess bot.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-chess-gray dark:text-chess-gray text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Play anytime, anywhere against our AI
              </p>
              <p className="flex items-center text-chess-gray dark:text-chess-gray text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Test your strategies against a competent opponent
              </p>
              <p className="flex items-center text-chess-gray dark:text-chess-gray text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Hone your skills with each game
              </p>
            </div>
            <Link
              to="/chess"
              className="inline-block mt-6 sm:mt-8 bg-chess-white dark:bg-chess-black text-chess-black dark:text-chess-white border-2 border-chess-black dark:border-chess-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-chess-black hover:text-chess-white dark:hover:bg-chess-white dark:hover:text-chess-black text-sm sm:text-base"
            >
              Let's Play
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <img 
              src={ChessImage}
              alt="Chess game in progress" 
              className="   w-full h-auto object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

// The rest of the files remain the same