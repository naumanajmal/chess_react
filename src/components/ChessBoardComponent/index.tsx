import React from "react";
 
import Chessboard from "chessboardjsx";
import { CapturedPieces } from "./CapturedPieces";
import { MoveHistory } from "./MoveHistory";
import { GameStatus } from "./GameStatus";
import { useChessGame } from "./useChessGame";

export const ChessBoardComponent: React.FC = () => {
  const {
 
    fen,
    gameStatus,
    capturedPieces,
    moveHistory,
    handleMove,
    resetGame
  } = useChessGame();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row justify-between w-full h-20">
        <CapturedPieces color="w" pieces={capturedPieces.w} />
        <CapturedPieces color="b" pieces={capturedPieces.b} />
      </div>
      
      <Chessboard
        width={400}
        position={fen}
        onDrop={(move) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: "q",
          })
        }
        darkSquareStyle={{ backgroundColor: "#B58863" }}
        lightSquareStyle={{ backgroundColor: "#F0D9B5" }}
      />
      
      <MoveHistory moves={moveHistory} />
      <div>
      <GameStatus status={gameStatus} onNewGame={resetGame} />
      </div>
    </div>
  );
};

export default ChessBoardComponent;