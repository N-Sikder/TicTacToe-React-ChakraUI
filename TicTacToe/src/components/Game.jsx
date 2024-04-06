import { useState } from "react";
import {
  Button,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
} from "@chakra-ui/react";

//The square component
function Square({ value, onSquareClick }) {
  return (
    <Button
      bg="blackAlpha.300"
      size="lg"
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </Button>
  );
}

//The game-board
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //create an empty board
  const [isNext, setIsNext] = useState(true); // toggle between X's and O's turn
  const [showAlert, setShowAlert] = useState(false); //to alert or not to alert that is the question

  const winner = calculateWinner(squares);
  let status;
  //To display the winner or the display whose move is next
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next player is: ${isNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    if (squares[i] !== null || calculateWinner(squares)) {
      setShowAlert(true); // Show the alert
      return; // Exit the function early
    }

    const copySquares = [...squares];

    if (isNext) {
      copySquares[i] = "X";
    } else {
      copySquares[i] = "O";
    }

    setSquares(copySquares);
    setIsNext(!isNext);
  }

  return (
    <>
      {showAlert && ( // Conditionally render the alert
        <Alert status="error" onClose={() => setShowAlert(false)}>
          <AlertIcon />
          <AlertTitle>Invalid Move!</AlertTitle>
          <AlertDescription>You can't click there.</AlertDescription>
        </Alert>
      )}
      <Box>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </Box>
      <Box>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </Box>
      <Box>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </Box>
      <Text fontSize="2xl">{status}</Text>
    </>
  );
}

// calculate winner by matching our square[] with the possible winning [] variations
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //We need to loop through our main array and enter into each sub-array and check if our played game's array is a match with any of the above winning combinations.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
