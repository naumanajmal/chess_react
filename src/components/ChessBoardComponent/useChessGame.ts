import { useState, useCallback } from "react";
import { ChessInstance, ShortMove, Chess } from "chess.js";
 
interface CapturedPieces {
  w: string[];
  b: string[];
}

interface MoveHistory {
  from: string;
  to: string;
  piece: string;
  color: "w" | "b";
}

export const useChessGame = () => {
  const [chess] = useState<ChessInstance>(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );
  const [fen, setFen] = useState(chess.fen());
  const [gameStatus, setGameStatus] = useState<string | null>(null);
  const [capturedPieces, setCapturedPieces] = useState<CapturedPieces>({ w: [], b: [] });
  const [moveHistory, setMoveHistory] = useState<MoveHistory[]>([]);

  const updateMoveHistory = useCallback(() => {
    const history = chess.history({ verbose: true });
    if (history.length === 0) return;

    const lastMove = history[history.length - 1];
    setMoveHistory(prevHistory => [
      ...prevHistory,
      {
        from: lastMove.from,
        to: lastMove.to,
        piece: lastMove.piece,
        color: lastMove.color
      }
    ]);
  }, [chess]);

  const checkGameStatus = useCallback(() => {
    if (chess.isCheckmate()) {
      setGameStatus(`Checkmate! ${chess.turn() === 'w' ? 'Black' : 'White'} wins!`);
    } else if (chess.isDraw()) {
      setGameStatus("Game Over! It's a draw.");
    } else if (chess.isStalemate()) {
      setGameStatus("Game Over! It's a stalemate.");
    } else if (chess.isThreefoldRepetition()) {
      setGameStatus("Game Over! Draw by threefold repetition.");
    } else if (chess.isInsufficientMaterial()) {
      setGameStatus("Game Over! Draw by insufficient material.");
    }
  }, [chess]);

  const updateCapturedPieces = useCallback(() => {
    const history = chess.history({ verbose: true });
    if (history.length === 0) return;

    const lastMove = history[history.length - 1];
    if (lastMove.captured) {
      setCapturedPieces((prev) => {
        const capturedBy = lastMove.color === 'w' ? 'w' : 'b';
        return {
          ...prev,
          [capturedBy]: [...prev[capturedBy], lastMove.captured]
        };
      });
    }
  }, [chess]);

  const handleMove = useCallback((move: ShortMove) => {
    try {
      const result = chess.move(move);
      if (result) {
        updateMoveHistory();
        setFen(chess.fen());
        updateCapturedPieces();
        checkGameStatus();

        if (!gameStatus) {
          setTimeout(() => {
            const moves = chess.moves({ verbose: true });
            if (moves.length > 0) {
              const computerMove = moves[Math.floor(Math.random() * moves.length)];
              const result = chess.move(computerMove);
              if (result) {
                setFen(chess.fen());
                updateCapturedPieces();
                updateMoveHistory();
                checkGameStatus();
              }
            }
          }, 300);
        }
      }
    } catch (error) {
      console.error("Error handling move:", error);
    }
  }, [chess, gameStatus, checkGameStatus, updateCapturedPieces, updateMoveHistory]);

  const resetGame = useCallback(() => {
    chess.reset();
    setFen(chess.fen());
    setGameStatus(null);
    setCapturedPieces({ w: [], b: [] });
    setMoveHistory([]);
  }, [chess]);

  return {
    chess,
    fen,
    gameStatus,
    capturedPieces,
    moveHistory,
    handleMove,
    resetGame
  };
};