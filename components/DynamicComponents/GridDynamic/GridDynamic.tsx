import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';

interface Props {
    gridState: number
}

const GridDynamic = ({ gridState }: Props): JSX.Element => {
    return (
        <Box p="30px">
            <SimpleGrid columns={gridState} spacing={8}>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
        </Box>
    )
}

export default GridDynamic
