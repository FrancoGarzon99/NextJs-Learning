import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import themeChakra from '../styles/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={themeChakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
