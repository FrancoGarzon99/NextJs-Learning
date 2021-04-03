import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const TestFrameMotion2 = (): JSX.Element => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <Box p="20px">
      <MotionBox
        layout
        animate="visible"
        bg="green.200"
        h="200px"
        initial="hidden"
        variants={container}
        w="400px"
      >
        EFECT 2
      </MotionBox>
    </Box>
  );
};

export default TestFrameMotion2;
