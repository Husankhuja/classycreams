import {
  Card as ChakraCard,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
} from "@chakra-ui/react";

function Card({ item }) {
  return (
    <ChakraCard bg="white" w="auto" m={10}>
      <CardBody>
        <Image
          src={
            "https://as1.ftcdn.net/v2/jpg/02/86/63/44/1000_F_286634408_rRsYpLK1veXlZoy7EoTAkLmB5zVTj2tR.jpg"
          }
          boxSize="250px"
          bg="white"
          borderRadius={4}
          alt={item.name}
        />
        <Text color="black" fontWeight={500} fontSize={"medium"}>
          {item.name}
        </Text>
        <Text color="black" fontSize={"small"}>
          {item.description}
        </Text>
        {/* <h3 color="black">{item.name}</h3>
        <hr />
        <p className="description" color="black">
          {item.description}
        </p>
        <p color="black">{item.basePrice}</p> */}
      </CardBody>
    </ChakraCard>
  );
}

export default Card;
