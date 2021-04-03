import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { AnimateSharedLayout, motion } from 'framer-motion';
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const TestMotion3 = (): JSX.Element => {
  const [state, setState] = React.useState(-4);

  const list = [
    { name: 'franco' },
    { name: 'Batolito' },
    { name: 'toto' },
    { name: 'benja2' },
    { name: 'benja3' },
    { name: 'benja4' },
    { name: 'juancito' },
    { name: 'benja' },
    { name: 'Tomas' },
    { name: 'benja5' },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Box bg="antiquewhite" p="20px">
      <MotionBox layout transition={{ easeInOut: [0.15] }}>
        {list.slice(state).map((n) => (
          <MotionText key={n.name} colorScheme="#000" variants={item}>
            <AnimateSharedLayout type="crossfade">{n.name}</AnimateSharedLayout>
          </MotionText>
        ))}
      </MotionBox>
      {list.length > 5 && (
        <MotionButton
          layout
          colorScheme="blue"
          variant="outline"
          onClick={() => {
            if (state === -4) {
              setState(0);
            } else {
              setState(-4);
            }
          }}
        >
          Ver mas
        </MotionButton>
      )}
    </Box>
  );
};

export default TestMotion3;
