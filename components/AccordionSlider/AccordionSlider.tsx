import { Box, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box)

const AccordionSlider = (): JSX.Element => {
    const carTest = {
        id: 32,
        agencyId: 2,
        agency: "Franco CCA",
        barrioName: "Buenos Aires",
        cityName: "Palermo",
        versionCar: "1.6v 3p",
        price: 70000,
        year: 2015,
        nameCar: "Volkswagen Gol",
        modelCar: "Trend Full",
        currentPrice: "USD",
        imageCar: "https://s3.amazonaws.com/nuestrosautos/Zm90byAyXzMzLmpwZWcxNjI3MzI3NTM1MjI0.jpeg",
        km: 1200,
    }

    return (
        <Box p="50px">
            <Stack direction="row" spacing="-100px" >
                <MotionBox
                    borderRadius={7}
                    boxSizing="border-box"
                    h="300px"
                    bg="#fff"
                    position="relative"
                    shadow="20px 0px 20px rgba(0, 0, 0, 0.1);"
                    w="290px"
                    zIndex="900"
                    whileHover={{ scale: 1.1, transition: { duration: .4 } }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Box>
                        <Box
                            bgImage={`url(${carTest.imageCar})`}
                            bgPos="center"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            borderRadius="7px 7px 0px 0px"
                            h="230px"
                            w="100%"
                        />
                    </Box>
                    <Stack p={4} spacing={1}>
                        <Box>
                            <Text
                                color="fontPrimary"
                                fontFamily="secondary"
                                fontSize="0.85rem"
                                fontWeight="regular"
                                textTransform="uppercase"
                            >
                                {carTest.agency}
                            </Text>
                        </Box>
                        <Box>
                            <Text color="fontPrimary" fontSize="1.7rem" fontWeight="medium">
                                {carTest.nameCar} {carTest.modelCar} {carTest.versionCar}
                            </Text>
                        </Box>
                    </Stack>
                </MotionBox>
                <MotionBox
                    borderRadius={7}
                    boxSizing="border-box"
                    h="300px"
                    position="relative"
                    shadow="20px 0px 20px rgba(0, 0, 0, 0.1);"
                    w="290px"
                    zIndex="800"
                    bg="#fff"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1, transition: { duration: .4 }, zIndex: "1000" }}
                >
                    <Box>
                        <Box
                            bgImage={`url(${carTest.imageCar})`}
                            bgPos="center"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            borderRadius="7px 7px 0px 0px"
                            h="230px"
                            w="100%"
                        />
                    </Box>
                    <Stack p={4} spacing={1}>
                        <Box zIndex="-999">
                            <Text
                                color="fontPrimary"
                                fontFamily="secondary"
                                fontSize="0.85rem"
                                fontWeight="regular"
                                textTransform="uppercase"
                            >
                                {carTest.agency}
                            </Text>
                        </Box>
                        <Box>
                            <Text color="fontPrimary" fontSize="1.7rem" fontWeight="medium">
                                {carTest.nameCar} {carTest.modelCar} {carTest.versionCar}
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                bgClip="text"
                                bgGradient="fontPrimary"
                                color="red"
                                fontSize="1.45rem"
                                fontWeight="regular"
                            >
                                {carTest.currentPrice} {carTest.price}
                            </Text>
                        </Box>
                        <Box>
                            <Text color="fontPrimary" fontFamily="secondary" fontSize="1rem">
                                {carTest.year} | {carTest.km}km
                            </Text>
                        </Box>
                        <Box bottom={4} color="fontPrimary" position="absolute" pr="1rem">
                            <Text fontSize="1rem" fontWeight="regular">
                                {carTest.barrioName ? `${carTest.barrioName}` : "-"} {carTest.cityName ? `,${carTest.cityName}` : ""}
                            </Text>
                        </Box>
                    </Stack>
                </MotionBox>
                <MotionBox
                    borderRadius={7}
                    boxSizing="border-box"
                    h="300px"
                    position="relative"
                    shadow="20px 0px 20px rgba(0, 0, 0, 0.1);"
                    w="290px"
                    zIndex="700"
                    whileHover={{ scale: 1.1, transition: { duration: .4 }, zIndex: "1000", }}
                    whileTap={{ scale: 0.9 }}
                    bg="#fff"
                >Car 3</MotionBox>
                <MotionBox
                    borderRadius={7}
                    bg="#fff"
                    boxSizing="border-box"
                    h="300px"
                    position="relative"
                    shadow="3px 5px 10px rgba(0, 0, 0, 0.1)"
                    w="290px"
                    zIndex="600"
                    whileHover={{ scale: 1.1, transition: { duration: .4 }, zIndex: "1000" }}
                    whileTap={{ scale: 0.9 }}

                >Car 4</MotionBox>
            </Stack>
        </Box >
    )
}

export default AccordionSlider
