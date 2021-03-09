import { Box } from '@chakra-ui/react';
// Types
interface Props {
  title: string;
  w?: string;
  h?: string;
  font?: string;
  onclick?: () => void;
}

const ButtonGradient = ({
  title,
  w = '16.7rem',
  h = '3.7rem',
  font = '1.25rem',
  onclick,
}: Props): JSX.Element => {
  //Render
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
        bg: 'linear-gradient(120deg,#ff0042,#ff8d05)',
        boxShadow: ' 0 5px 15px rgb(0 0 0 / 5%), 0 4px 10px rgb(0 123 255 / 25%)',
      }}
      as="button"
      bg="linear-gradient(120deg,#ff0042,#ff8d05)"
      border="none"
      borderRadius={7}
      color="fontPrimary"
      fontSize={font}
      fontWeight="medium"
      height={h}
      lineHeight="1.2"
      px="8px"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      w={w}
      onClick={onclick}
    >
      {title}
    </Box>
  );
};

export default ButtonGradient;
