import "./App.css";
import Game from "./components/Game";
import {
  Container,
  Heading,
  VStack,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Container
        w="full"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
      >
        <VStack>
          <HStack>
            <Divider
              orientation="horizontal"
              borderColor="blue.500"
              w="120px"
            />
            <Heading as="h2" size="xl">
              Tic-Tac-Toe
            </Heading>
            <Divider
              orientation="horizontal"
              borderColor="blue.500"
              w="120px"
            />
          </HStack>
          <Divider orientation="horizontal" borderColor="blue.500" />
          <Game />
          <Button
            mt="10"
            colorScheme="messenger"
            onClick={() => window.location.reload()}
          >
            Play Again
          </Button>
        </VStack>
      </Container>
    </>
  );
}

export default App;
