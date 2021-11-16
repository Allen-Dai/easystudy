import Link from "next/link"
import {Container} from "@chakra-ui/react";

const index = () => (
 <Link href="/flipcard">
 <a>
 <Container bg="white" color="black" mt={20} borderRadius={15}>
 Flip cards
 </Container>
 </a>
 </Link>
)

export default index;
