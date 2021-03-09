import { Box, Text } from '@chakra-ui/react';

// Types
interface Props {
  title: string;
  w?: string;
  h?: string;
  font?: string;
  mt?: string;
  onClick?: () => void;
}

const ButtonLineGradient = ({
  title,
  w = '16.7rem',
  h = '3.7rem',
  font = '1.25rem',
  mt = '0px',
  onClick,
}: Props): JSX.Element => {
  // Render
  return (
    <Box
      _active={{
        transform: 'scale(0.5)',
      }}
      _focus={{
        borderColor: 'none',
        outline: 'none',
      }}
      _hover={{
        boxShadow: ' 0 5px 15px rgb(0 0 0 / 5%), 0 4px 10px rgb(0 123 255 / 25%)',
      }}
      alignItems="center"
      as="button"
      bgGradient="linear-gradient(120deg,#ff0042,#ff8d05)"
      borderRadius={9}
      color="white"
      display="flex"
      fontSize={font}
      fontWeight="medium"
      height={h}
      justifyContent="center"
      lineHeight="1.2"
      mt={mt}
      paddingX={12}
      paddingY={4}
      position="relative"
      px="8px"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      w={w}
      onClick={onClick}
    >
      <Box bgColor="white" borderRadius={7} h="95%" position="absolute" w="99%" />
      <Text bgClip="text" bgGradient="linear-gradient(120deg,#ff0042,#ff8d05)" position="relative">
        {title}
      </Text>
    </Box>
  );
};

export default ButtonLineGradient;
