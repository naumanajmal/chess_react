import React from "react";

interface CapturedPiecesProps {
  color: "w" | "b";
  pieces: string[];
}

export const CapturedPieces: React.FC<CapturedPiecesProps> = ({ color, pieces }) => {
  const renderPiece = (piece: string) => {
    const pieceSymbols: Record<string, string> = {
      p: "♙", n: "♘", b: "♗", r: "♖", q: "♕", k: "♔"
    };
    return pieceSymbols[piece] || "";
  };

  return (
    <div className="mr-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {color === "w" ? "Player (White)" : "Bot (Black)"}
      </h2>
      <div className="text-2xl text-gray-800 dark:text-white">
        {pieces.map((piece, index) => (
          <span key={index}>{renderPiece(piece)}</span>
        ))}
      </div>
    </div>
  );
};
