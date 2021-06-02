import React from "react";
import {
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Stack } from "@chakra-ui/react";
const FormSecondary = (): JSX.Element => {
  const { register, formState } = useFormContext();

  return (
    <Box w="1200px">
      <Text fontSize="xl" fontWeight={"bold"}>
        Información General
      </Text>
      <Stack direction={["column", "column", "row"]} spacing={8} w="100%">
        <Box>
          <Stack spacing={4}>
            <Box>
              <FormControl id="Code">
                <FormLabel>CAJAID</FormLabel>
                <Input {...register("datamain.U_Code", { required: true })} placeholder="CAJAID" />
                {formState.errors.datamain?.U_Code && <span>Code es requerido</span>}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="Name">
                <FormLabel>Nombre o Desripción</FormLabel>
                <Input
                  {...register("datamain.U_Name", { required: true })}
                  placeholder="Nombre o Desripción"
                />
                {formState.errors.datamain?.U_Name && <span>Nombre o Desripción es requerido</span>}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="Location">
                <FormLabel>Ubicación/Dirección</FormLabel>
                <Input
                  {...register("datamain.U_Location", { required: true })}
                  placeholder="Ubicación/Dirección"
                />
                {formState.errors.datamain?.U_Location && (
                  <span>Ubicación/Dirección es requerido</span>
                )}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="WhsCode">
                <FormLabel>Almacén</FormLabel>
                <Input
                  {...register("datamain.U_WhsCode", { required: true })}
                  placeholder="Almacén"
                />
                {formState.errors.datamain?.U_WhsCode && <span>Almacén es requerido</span>}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="CreateDate">
                <FormLabel>Fecha de Creación</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_CreateDate", { required: true })}
                  placeholder="Fecha de Creación"
                />
                {/* {formState.errors.datamain?.U_CreateDate && (
                  <span>Fecha de Creación es requerido</span>
                )} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="UserCode">
                <FormLabel>Usuario de Creación</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_UserCode", { required: true })}
                  placeholder="Usuario de Creación"
                />
                {/* {formState.errors.datamain?.U_CreateDate && (
                  <span>Usuario de Creación es requerido</span>
                )} */}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="POI">
                <FormLabel>POI</FormLabel>
                <Select
                  placeholder="Select option"
                  {...register("datamain.U_PTICode", { required: true })}
                >
                  <option value="option1">Data endpoint</option>
                  <option value="option2">Data endpoint</option>
                  <option value="option3">Data endpoint</option>
                </Select>
                {formState.errors.datamain?.U_PTICode && <span>POI es requerido</span>}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="Status">
                <FormLabel>Estado</FormLabel>
                <Select
                  placeholder="Select option"
                  {...register("datamain.U_Status", { required: true })}
                >
                  <option value="activa">Activa</option>
                  <option value="inactiva">Inactiva</option>
                </Select>
                {formState.errors.datamain?.U_Status && <span>Estado es requerido</span>}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="Started">
                <FormLabel>Inicializada</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_Started", { required: true })}
                  placeholder="Inicializada"
                />
                {/* {formState.errors.datamain?.U_Started && <span>Inicializada es requerido</span>} */}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="OpenDateBalance">
                <FormLabel>Fecha Apertura Saldo</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_OpenDateBalance", { required: true })}
                  placeholder="Fecha Apertura Saldo"
                />
                {/* {formState.errors.datamain?.U_OpenDateBalance && (
                  <span>Fecha Apertura Saldo es requerido</span>
                )} */}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="BalanceARS">
                <FormLabel>Saldo ARS</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_BalanceARS", { required: true })}
                  placeholder="Saldo ARS"
                />
                {/* {formState.errors.datamain?.U_BalanceARS && <span>Saldo ARS es requerido</span>} */}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="BalanceUSD">
                <FormLabel>Saldo USD</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_BalanceUSD", { required: true })}
                  placeholder="Saldo USD"
                />
                {/* {formState.errors.datamain?.U_BalanceUSD && <span>Saldo USD es requerido</span>} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="LastBalanceDate">
                <FormLabel>Ultima fecha Saldo</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_LastBalanceDate", { required: true })}
                  placeholder="Ultima fecha Saldo"
                />
                {/* {formState.errors.datamain?.U_LastBalanceDate && (
                  <span>Ultima fecha Saldo es requerido</span>
                )} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="CashDoc">
                <FormLabel>Docmento de Caja</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_CashDoc", { required: true })}
                  placeholder="Docmento de Caja"
                />
                {/* {formState.errors.datamain?.U_CashDoc && <span>Docmento de Caja es requerido</span>} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="LastClosedDate">
                <FormLabel>Fecha Ultimo Cierre</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_LastClosedDate", { required: true })}
                  placeholder="Fecha Ultimo Cierre"
                />
                {/* {formState.errors.datamain?.U_LastClosedDate && (
                  <span>Fecha Ultimo Cierre es requerido</span>
                )} */}
              </FormControl>
            </Box>
          </Stack>
        </Box>
        {/* FORM SEGUNDO */}
        <Box>
          <Text fontSize="xl" fontWeight={"bold"}>
            Saldos Actuales
          </Text>
          <Stack spacing={4}>
            <Box>
              <FormControl id="AccArsBal">
                <FormLabel>Efectivo ARS</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_AccArsBal", { required: true })}
                  placeholder="Efectivo ARS"
                />
                {/* {formState.errors.datamain?.U_AccArsBal && <span>Efectivo ARS es requerido</span>} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="AccUsdBal">
                <FormLabel>Efectivo USD </FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_AccUsdBal", { required: true })}
                  placeholder="Efectivo USD"
                />
                {/* {formState.errors.datamain?.U_AccUsdBal && <span>Efectivo USD es requerido</span>} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="AccCheckBal">
                <FormLabel>Cheques Recibidos</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_AccCheckBal", { required: true })}
                  placeholder="Cheques Recibidos"
                />
                {/* {formState.errors.datamain?.U_AccCheckBal && (
                  <span>Cheques Recibidos es requerido</span>
                )} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="AccTrfBal">
                <FormLabel>Transferencias</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_AccTrfBal", { required: true })}
                  placeholder="Transferencias"
                />
                {/* {formState.errors.datamain?.U_AccTrfBal && <span>Transferencias es requerido</span>} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="AccCcarBal">
                <FormLabel>Tarjetas</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_AccCcarBal", { required: true })}
                  placeholder="Tarjetas"
                />
                {/* {formState.errors.datamain?.U_AccCcarBal && <span>Tarjetas es requerido</span>} */}
              </FormControl>
            </Box>

            <Box>
              <FormControl id="AccChPayBal">
                <FormLabel>Cheques Emitidos</FormLabel>
                <Input
                  disabled
                  value="Automatico"
                  {...register("datamain.U_AccChPayBal", { required: true })}
                  placeholder="Cheques Emitidos"
                />
                {/* {formState.errors.datamain?.U_AccChPayBal && (
                  <span>Cheques Emitidos es requerido</span>
                )} */}
              </FormControl>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Text fontSize="xl">Configuracion de cuentas</Text>
          <Stack spacing={4}>
            <Box>
              <Text fontSize="lg" fontWeight="semibold">
                Cuentas Ingreso - Cobranzas
              </Text>

              <Box>
                <FormControl id="RcAcctCashARS">
                  <FormLabel>Efectivo ARS</FormLabel>
                  <Input
                    {...register("datamain.U_RcAcctCashARS", { required: true })}
                    placeholder="Efectivo ARS"
                  />
                  {formState.errors.datamain?.U_RcAcctCashARS && (
                    <span>Efectivo ARS es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="RcAcctCashCk">
                  <FormLabel>Cheques</FormLabel>
                  <Input
                    {...register("datamain.U_RcAcctCashCk", { required: true })}
                    placeholder="Cheques"
                  />
                  {formState.errors.datamain?.U_RcAcctCashCk && <span>Cheques es requerido</span>}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="RcAcctCashTrs">
                  <FormLabel>Transferencias</FormLabel>
                  <Input
                    {...register("datamain.U_RcAcctCashTrs", { required: true })}
                    placeholder="Transferencias"
                  />
                  {formState.errors.datamain?.U_RcAcctCashTrs && (
                    <span>Transferencias es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="RcAcctCashCcr">
                  <FormLabel>Tarjetas</FormLabel>
                  <Input
                    {...register("datamain.U_RcAcctCashCcr", { required: true })}
                    placeholder="Tarjetas"
                  />
                  {formState.errors.datamain?.U_RcAcctCashCcr && <span>Tarjetas es requerido</span>}
                </FormControl>
              </Box>
            </Box>
            {/* CUENTAS EGRESO - PAGOS O CIERRES */}
            <Box>
              <Text fontSize="lg" fontWeight="semibold">
                Cuentas Egreso - Pagos o Cierres
              </Text>

              <Box>
                <FormControl id="PyAcctCashArs">
                  <FormLabel>Efectivo ARS</FormLabel>
                  <Input
                    {...register("datamain.U_PyAcctCashArs", { required: true })}
                    placeholder="Efectivo ARS"
                  />
                  {formState.errors.datamain?.U_PyAcctCashArs && (
                    <span>Efectivo ARS es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="PyAcctCashUsd">
                  <FormLabel>Efectivo USD</FormLabel>
                  <Input
                    {...register("datamain.U_PyAcctCashUsd", { required: true })}
                    placeholder="Efectivo USD"
                  />
                  {formState.errors.datamain?.U_PyAcctCashUsd && (
                    <span>Efectivo USD es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="PyAcctCashCk">
                  <FormLabel>Cheques</FormLabel>
                  <Input
                    {...register("datamain.U_PyAcctCashCk", { required: true })}
                    placeholder="Cheques"
                  />
                  {formState.errors.datamain?.U_PyAcctCashCk && <span>Cheques es requerido</span>}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="PyAcctCashTrs">
                  <FormLabel>Pago Transferencias</FormLabel>
                  <Input
                    {...register("datamain.U_PyAcctCashTrs", { required: true })}
                    placeholder="Pago Transferencias"
                  />
                  {formState.errors.datamain?.U_PyAcctCashTrs && (
                    <span>Pago Transferencias es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="PyAcctCashCcr">
                  <FormLabel>Tarjetas</FormLabel>
                  <Input
                    {...register("datamain.U_PyAcctCashCcr", { required: true })}
                    placeholder="Tarjetas"
                  />
                  {formState.errors.datamain?.U_PyAcctCashCcr && <span>Tarjetas es requerido</span>}
                </FormControl>
              </Box>
            </Box>
            {/* CUENTAS DE ALIVIO */}
            <Box>
              <Text fontSize="lg" fontWeight="semibold">
                Cuentas de Alivio
              </Text>

              <Box>
                <FormControl id="ClAcctCashArs">
                  <FormLabel>Efectivo ARS</FormLabel>
                  <Input
                    {...register("datamain.U_ClAcctCashArs", { required: true })}
                    placeholder="Efectivo ARS"
                  />
                  {formState.errors.datamain?.U_ClAcctCashArs && (
                    <span>Efectivo ARS es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="CLAcctCashUsd">
                  <FormLabel>Efectivo USD</FormLabel>
                  <Input
                    {...register("datamain.U_CLAcctCashUsd", { required: true })}
                    placeholder="Efectivo USD"
                  />
                  {formState.errors.datamain?.U_CLAcctCashUsd && (
                    <span>Efectivo USD es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="ClAcctCashCk">
                  <FormLabel>Cheques</FormLabel>
                  <Input
                    {...register("datamain.U_ClAcctCashCk", { required: true })}
                    placeholder="Cheques"
                  />
                  {formState.errors.datamain?.U_ClAcctCashCk && <span>Cheques es requerido</span>}
                </FormControl>
              </Box>
            </Box>
            {/* CUENTAS DE TRANSFERENCIAS*/}
            <Box>
              <Text fontSize="lg" fontWeight="semibold">
                Cuentas de Transferencias
              </Text>

              <Box>
                <FormControl id="TrAcctCashArs">
                  <FormLabel>Efectivo ARS</FormLabel>
                  <Input
                    {...register("datamain.U_TrAcctCashArs", { required: true })}
                    placeholder="Efectivo ARS"
                  />
                  {formState.errors.datamain?.U_TrAcctCashArs && (
                    <span>Efectivo ARS es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="TrAcctCashUsd">
                  <FormLabel>Efectivo USD</FormLabel>
                  <Input
                    {...register("datamain.U_TrAcctCashUsd", { required: true })}
                    placeholder="Efectivo USD"
                  />
                  {formState.errors.datamain?.U_TrAcctCashUsd && (
                    <span>Efectivo USD es requerido</span>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="TrAcctCashCk">
                  <FormLabel>Cheques</FormLabel>
                  <Input
                    {...register("datamain.U_TrAcctCashCk", { required: true })}
                    placeholder="Cheques"
                  />
                  {formState.errors.datamain?.U_TrAcctCashCk && <span>Cheques es requerido</span>}
                </FormControl>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FormSecondary;
