import React from "react";
import {
  Input,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Button,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const FormBoxes = (): JSX.Element => {
  const { register, formState } = useFormContext();
  const [monedaList, setMonedaList] = React.useState([]);
  const [counterMonedasList, setCounterMonedasList] = React.useState(0);
  const [usersList, setUsersList] = React.useState([]);
  const [counterUsersList, setCounterUsersList] = React.useState(0);

  const addMonedas = () => {
     // @ts-ignore: Unreachable code error
     setMonedaList((monedaList) => [...monedaList, counterMonedasList]);
     setCounterMonedasList(prevCounterMonedas => prevCounterMonedas + 1);
  };
  const removeMonedas = (index:any) => () => {
    setMonedaList(monedaList => [...monedaList.filter(item => item !== index)]);
    setCounterMonedasList(prevCounterMonedas => prevCounterMonedas - 1);
  };
  const addUserList = () => {
     // @ts-ignore: Unreachable code error
     setUsersList((usersList) => [...usersList, counterUsersList]);
     setCounterUsersList(prevCounterUser => prevCounterUser + 1);
  };
  const removeUserList = (index:any) => () => {
    setUsersList(usersList => [...usersList.filter(item => item !== index)]);
    setCounterUsersList(prevCounterUser => prevCounterUser - 1);
  };

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab _selected={{ color: "white", bg: "blue.300" }}>MONEDAS</Tab>
        <Tab _selected={{ color: "white", bg: "blue.300" }}>USUARIOS</Tab>
      </TabList>
      {/* MONEDAS */}
      <TabPanels>
        <TabPanel>
          <Box>
            <Text>MONEDAS</Text>
            {monedaList.map((moneda) => {
              return (
                <Box key={moneda}>
                  {/*  @ts-ignore: Unreachable code error */}
                  <Input {...register(`monedasExamples.fila${moneda}`)} placeholder={`fila${moneda}`} />
                  <Button type="button" onClick={removeMonedas(moneda)}>
                    Quitar
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Button type="button" onClick={addMonedas}>
            Agregar Moneda
          </Button>
        </TabPanel>
        {/* USUARIOS */}
        <TabPanel>
          <Box>
            <Text>USUARIOS</Text>
            {usersList.map((user) => {
              return (
                <Box key={user}>
                  {/*  @ts-ignore: Unreachable code error */}
                  <Input {...register(`usersExamples.user${user}`)} placeholder={`user${user}`} />
                  <Button type="button" onClick={removeUserList(user)}>
                    Quitar
                  </Button>
                </Box>
              );
            })}
          <Button type="button" onClick={addUserList}>
            Agregar User
          </Button>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FormBoxes;
