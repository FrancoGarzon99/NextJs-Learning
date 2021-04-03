import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Stack, Box } from '@chakra-ui/react';

const index = (): JSX.Element => {
  const router = useRouter();

  console.log(router.query.busqueda);

  const [DataInput, setDataInput] = React.useState<string | undefined | string[]>(
    router.query.busqueda,
  );
  const [dataFetch, setDataFetch] = React.useState<any>([]);

  const SearchListData = (search: string | undefined | string[]): Promise<any> => {
    return fetch(`https://nuestrosautos.cca.org.ar/api/classifieds/search/${search}`).then((res) =>
      res.json(),
    );
  };

  React.useEffect(() => {
    SearchListData(DataInput).then((res) => setDataFetch(res));
  }, []);

  return (
    <Box>
      HOLA SOY BUSCAR
      <Stack>
        {dataFetch.datos !== undefined ? (
          dataFetch.datos.map((v: any) => (
            <Box key={v.id}>
              <Link
                href={{
                  pathname: '/detalle',
                  query: {
                    id: v.id,
                    model: v.title,
                  },
                }}
              >
                <a>
                  <h1
                    onClick={() => {
                      localStorage.setItem('id', v.id);
                      localStorage.setItem('title', v.title);
                    }}
                  >
                    {v.title}
                  </h1>
                </a>
              </Link>
            </Box>
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
      </Stack>
    </Box>
  );
};

export default index;
