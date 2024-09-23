# React Chess Game

This project is a React-based chess game that allows users to play against a simple AI opponent. It features a responsive chessboard, move history, and captured pieces display.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Project Structure](#project-structure)
 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

## Installation

To install the Chess Game, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/naumanajmal/chess_react.git
   ```

2. Navigate to the project directory:
   ```
   cd react-chess-game
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

## Running the Application

To run the Chess Game, use the following command:

```
npm run dev
```
or if you're using yarn:
```
yarn dev
```

This will start the development server. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## Features

- Interactive chessboard
- Play against a simple AI opponent
- Move history display
- Captured pieces display
- Responsive design
- Accessible UI with ARIA labels

## Project Structure

The main components of the project are structured as follows:

```
src/
├── components/
│   └── ChessBoardComponent/
│       ├── index.tsx
│       ├── CapturedPieces.tsx
│       ├── GameStatus.tsx
│       ├── MoveHistory.tsx
│       └── useChessGame.ts
├── pages/
│   ├── Home.tsx
│   └── ChessBoard.tsx
├── contexts/
│   └── ThemeContext.tsx
├── App.tsx
└── main.tsx
```

- `ChessBoardComponent/`: Contains the main chess game logic and UI components
- `pages/`: Contains the main pages of the application
- `contexts/`: Contains the theme context for light/dark mode
- `App.tsx`: The main application component
- `main.tsx`: The entry point of the application

## Contributing

Contributions to the Chess Game project are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a pull request

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).