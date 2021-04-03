import React from 'react';
import Layout from '../components/Layout';
import { Box, InputGroup, Input } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
// import HomeContainer from '../components/Home/HomeContainer';

const Home = (): JSX.Element => {
  const router = useRouter();
  const [dataInput, setDataInput] = React.useState('');
  const [dataInputStorage, setDataInputStorage] = React.useState<any>('');

  React.useEffect(() => {
    const dataSearch = localStorage.getItem('DataInput');

    setDataInputStorage(dataSearch);
  }, []);

  return (
    <>
      <Layout>
        <Box p="20px" w="400px">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push({
                pathname: '/buscar',
                query: { busqueda: dataInput || dataInputStorage },
              });
              localStorage.setItem('DataInput', JSON.stringify(dataInput));
            }}
          >
            <InputGroup>
              <Input
                placeholder="Marca o modelo del Auto"
                onChange={(e) => setDataInput(e.target.value)}
              />
            </InputGroup>
          </form>
        </Box>
        {/* <Link as={`/buscar/${dataInput}`} href="/buscar/[id]"></Link> */}
        {/* <HomeContainer /> */}
      </Layout>
    </>
  );
};

export default Home;
