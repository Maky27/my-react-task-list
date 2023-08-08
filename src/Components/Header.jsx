import { Box, Flex, Heading, useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
<Box background={colorMode === 'light' ? 'background.light' : 'background.blue'} color={colorMode === 'light' ? 'text.light' : 'text.dark'}>    
<Button onClick={toggleColorMode} align='left' justify="space-between">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      <Flex flexDirection="column" align="center" justify="space-between">
        <Heading margin={10} fontFamily="Lobster, cursive" fontSize={60} color={colorMode === 'light' ? 'black' : 'white'}>
          Proyecto Lista de Tareas
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
