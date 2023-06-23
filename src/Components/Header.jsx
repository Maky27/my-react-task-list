import { Box, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
      <Box >
        <Flex flexDirection="column" align="center" justify="space-between">
         <Heading margin={10} fontFamily='Lobster, cursive' fontSize={60} >Proyecto Lista de Tareas</Heading>
        </Flex>
      </Box>
  );
};

export default Header;