import React from 'react';
import Header from '../components/Header';
import ChessBoardComponent from '../components/ChessBoardComponent';
const ChessBoard: React.FC = () => {
  return (
    <div className="min-h-screen bg-chess-white dark:bg-chess-black">
      <Header />
      <main className="container mx-auto px-4 py-16">
       <ChessBoardComponent/>
      </main>
    </div>
  );
};

export default ChessBoard;