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
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const addFriend = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
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
            <Input
              {...register("monedasExamples.moneda1", { required: true })}
              placeholder="Moneda 1 "
            />
            {formState.errors.monedasExamples?.moneda1 && <span>Moneda 1 es requerido</span>}
            <Input
              {...register("monedasExamples.moneda2", { required: true })}
              placeholder="Moneda 2 "
            />
            {formState.errors.monedasExamples?.moneda2 && <span>Moneda 2 es requerido</span>}

            <Input
              {...register("monedasExamples.moneda3", { required: true })}
              placeholder="Moneda 3"
            />
            {formState.errors.monedasExamples?.moneda3 && <span>Moneda 3 es requerido</span>}

            <Input
              {...register("monedasExamples.moneda4", { required: true })}
              placeholder="Moneda 4"
            />
            {formState.errors.monedasExamples?.moneda4 && <span>Moneda 4 es requerido</span>}
            {indexes.map((fila) => {
              return (
                <Box key={fila}>
                  <Input {...register(`monedasExamples.fila${fila}`)} placeholder={`fila${fila}`} />
                </Box>
              );
            })}
          </Box>
          <Button type="button" onClick={addFriend}>
            Agregar fila
          </Button>
        </TabPanel>
        {/* USUARIOS */}
        <TabPanel>
          <Box>
            <Text>USUARIOS</Text>
            <Input {...register("usersExamples.user1", { required: true })} placeholder="user 1" />
            {formState.errors.usersExamples?.user1 && <span>User 1 es requerido</span>}
            <Input {...register("usersExamples.user2", { required: true })} placeholder="user 2" />
            {formState.errors.usersExamples?.user2 && <span>User 2 es requerido</span>}

            <Input {...register("usersExamples.user3", { required: true })} placeholder="user 3" />
            {formState.errors.usersExamples?.user3 && <span>User 3 es requerido</span>}

            <Input {...register("usersExamples.user4", { required: true })} placeholder="user 4" />
            {formState.errors.usersExamples?.user4 && <span>User 4 es requerido</span>}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FormBoxes;
