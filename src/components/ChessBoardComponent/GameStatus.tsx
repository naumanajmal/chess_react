import React from "react";

interface GameStatusProps {
  status: string | null;
  onNewGame: () => void;
}

export const GameStatus: React.FC<GameStatusProps> = ({ status, onNewGame }) => {
  if (!status) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" style={{ zIndex: 9999 }}>
      <div className="bg-white text-black p-4 rounded-lg flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">{status}</h2>
        <p>Would you like to play again?</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onNewGame}
        >
          New Game
        </button>
      </div>
    </div>
  );
};
