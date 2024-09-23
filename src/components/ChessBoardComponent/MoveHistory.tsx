// src/components/ChessBoardComponent/MoveHistory.tsx
import React, { useRef, useEffect } from "react";

interface MoveHistoryProps {
    moves: Array<{
        from: string;
        to: string;
        piece: string;
        color: "w" | "b";
    }>;
}

export const MoveHistory: React.FC<MoveHistoryProps> = ({ moves }) => {
    const moveHistoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (moveHistoryRef.current) {
            moveHistoryRef.current.scrollLeft = moveHistoryRef.current.scrollWidth;
        }
    }, [moves]);

    const renderMoves = () => {
        return moves.reduce((acc, move, index) => {
            if (index % 2 === 0) {
                acc.push(
                    <span key={index} className="inline-block mr-4 mb-2 text-gray-800 dark:text-white">
                        {`${Math.floor(index / 2) + 1}. ${move.piece.toUpperCase()}${move.to}`}
                    </span>
                );
            } else {
                acc[acc.length - 1] = React.cloneElement(
                    acc[acc.length - 1],
                    {},
                    acc[acc.length - 1].props.children + ` ${move.piece.toUpperCase()}${move.to}`
                );
            }
            return acc;
        }, [] as JSX.Element[]);
    };

    return (
        <div className="mt-4 p-2 rounded  w-3/4 ">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Move History</h2>
            <div
                ref={moveHistoryRef}
                className="overflow-x-auto whitespace-nowrap pb-2 pr-4"
                style={{
                    maxHeight: "50px",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#4A5568 #CBD5E0",
                }}
                role="log"
                aria-label="Chess move history"
            >
                <div className="pr-4 pb-4">
                    {renderMoves()}
                </div>
            </div>
        </div>
    );
};