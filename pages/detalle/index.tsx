import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Box, Stack } from '@chakra-ui/react';

const index = (): JSX.Element => {
  const router = useRouter();

  const [dataSearchPath, setDataSearchPath] = React.useState<any>({
    dataId: '',
    dataTitle: '',
  });
  const [idSelectCar] = React.useState<string | string[] | undefined>(router.query.id);

  const [dataFetchDetail, setDataFetchDetail] = React.useState<any>([]);

  const DetailVehicle = (id: string | string[] | undefined | null): Promise<any> => {
    return fetch(`https://nuestrosautos.cca.org.ar/api/classifieds/detail/${id}`).then((res) =>
      res.json(),
    );
  };

  React.useEffect(() => {
    const dataSearchId = localStorage.getItem('id');
    const dataSearchTitle = localStorage.getItem('title');

    DetailVehicle(idSelectCar || dataSearchId).then((res) => setDataFetchDetail(res));

    setDataSearchPath({ ...dataSearchPath, dataId: dataSearchId, dataTitle: dataSearchTitle });
  }, []);

  console.log(dataSearchPath);

  return (
    <Box>
      <Stack>
        {dataFetchDetail.datos !== undefined ? (
          <Box key={dataFetchDetail.datos.id}>
            <h1>
              {dataFetchDetail.datos.brand} {dataFetchDetail.datos.model}
            </h1>
            <h1>
              {dataFetchDetail.datos.company} {dataFetchDetail.datos.id}
            </h1>
          </Box>
        ) : (
          <h1>Cargando...</h1>
        )}
      </Stack>
    </Box>
  );
};

export default index;
