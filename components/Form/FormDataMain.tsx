import React from "react";
import { Input, Box, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
const FormSecondary = (): JSX.Element => {
  const { register, formState } = useFormContext();

  return (
    <Box>
      <Text>DATOS PRINCIPALES</Text>
      <Input {...register("dato1", { required: true })} placeholder="dato 1" />
      {formState.errors.dato1 && <span>Dato 1 es requerido</span>}
      <Input {...register("dato2", { required: true })} placeholder="dato 2" />
      {formState.errors.dato2 && <span>Dato 2 es requerido</span>}

      <Input {...register("dato3", { required: true })} placeholder="dato 3" />
      {formState.errors.dato3 && <span>Dato 3 es requerido</span>}

      <Input {...register("dato4", { required: true })} placeholder="dato 4" />
      {formState.errors.dato4 && <span>Dato 4 es requerido</span>}
    </Box>
  );
};

export default FormSecondary;
