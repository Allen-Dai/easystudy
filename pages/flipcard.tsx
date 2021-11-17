import useWindowDimensions from "../components/window";
import {useBreakpointValue, Container, Flex, Box, Button, Textarea, IconButton, SimpleGrid} from "@chakra-ui/react";
import {ArrowForwardIcon, AddIcon, RepeatIcon, CloseIcon} from "@chakra-ui/icons"
import Card from "../components/Card";
import {useState, useEffect} from "react";

const FlipCard = () =>{
  const [textarea, setTextarea] = useState<String>("");
  const [words, setWords] = useState<string[]>([]);
  const [formDisplay, setFormDisplay] = useState("block");
  const {width} = useWindowDimensions();
  const [columns, setColumns] = useState(10);
  const [reset, setReset] = useState(false);
  useEffect( ()=>{
    setColumns(Math.floor(width/200));
  },[width])

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function start(){
    if (textarea.length>0){
    const arr = shuffle(textarea.match(/\S+/g));
    var r = [];
    arr.forEach( (word, i)=>{
      r.push(<Card key={i} state={reset} >{word}</Card>);
    });
    setWords(r);
    setFormDisplay("none");
    setReset(!reset);
    }
  }

  //This is just to force rerender the card component. looking for better implementation
  function reShuffle(){
    if (textarea.length>0){
    const arr = shuffle(textarea.match(/\S+/g));
    var r = [];
    arr.forEach( (word, i)=>{
      r.push(<Card key={i} state={reset} >{word}</Card>);
    });
    setWords(r);
    setReset(!reset);
    }
  }


  function add(){
    setFormDisplay("block");
  }

  function clear(){
    setWords([]);
  }


  return (
  <>
  <SimpleGrid columns={columns}  m={10} gap={5}>
  {words}
  </SimpleGrid>

  <Container display={formDisplay}>
  <Box pos="fixed" bottom="10">
  <Textarea color="black" size="lg" resize="none" bg="white" onChange={e => setTextarea(e.target.value)} placeholder="Enter words"/>
  <Button onClick={start} mt={2} colorScheme="blue" rightIcon={<ArrowForwardIcon/>}>Submit</Button>
  </Box>
  </Container>

  <IconButton aria-label="add" pos="fixed" left={5} bottom="10px" icon={<AddIcon />} colorScheme="green"
  onClick={add}
  />

  <IconButton aria-label="add" pos="fixed" left={5} bottom="60px" icon={<RepeatIcon />} colorScheme="green"
  onClick={reShuffle}
  />

  <IconButton aria-label="add" pos="fixed" left={5} bottom="110px" icon={<CloseIcon />} colorScheme="red"
  onClick={clear}
  />


  </>
  )
}


export default FlipCard;
