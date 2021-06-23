import React from 'react'
import GridDynamic from './GridDynamic/GridDynamic';
import { Box, Button, Stack } from '@chakra-ui/react';


const DynamicContainer = (): JSX.Element => {

    const [gridState, setGridState] = React.useState(1)
    // const [ObjectBox, setObjectBox] = React.useState([])

    const ObjectBox = [
        { box: <Box bg="tomato" height="80px"></Box> }
    ]

    return (
        <Box>
            <Stack direction="row" p="20px">
                <Button variant="solid" onClick={() => {
                    setGridState(1)
                }} >Grid Default</Button>
                <Button variant="solid" onClick={() => {
                    setGridState(2)
                }} >Grid 2</Button>
                <Button variant="solid" onClick={() => {
                    setGridState(4)
                }}  >Grid 4</Button>
                <Button variant="solid" onClick={() => {
                    setGridState(6)
                }}  >Grid 6</Button>
            </Stack>

            <GridDynamic ObjectBox={ObjectBox} gridState={gridState} />
        </Box>
    )
}

export default DynamicContainer
