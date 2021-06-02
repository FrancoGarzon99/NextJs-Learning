import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";
import FormDataMain from "./FormDataMain";
import FormBoxes from "./FormBoxes";

const FormMain = (): JSX.Element => {
  const methods = useForm();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <Box p="30px" w="400px">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box>
            <FormDataMain />
          </Box>
          <Box>{/* <FormBoxes /> */}</Box>
          <Button type="submit">Guardar</Button>
        </form>
      </FormProvider>
    </Box>
  );
};

export default FormMain;
