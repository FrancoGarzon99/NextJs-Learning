import { Box, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const TestFrameMotion = (): JSX.Element => {
  return (
    <Box padding="50px">
      <MotionStack
        animate="visible"
        direction="row"
        initial="hidden"
        spacing={8}
        variants={container}
      >
        <MotionBox
          bg="aqua"
          drag="y"
          height="400px"
          variants={item}
          w="400px"
          whileHover={{ translateY: -10, boxShadow: '5px 10px 20px 0px rgba(19,39,118,0.2)' }}
          whileTap={{ scale: 0.8 }}
        >
          hola
        </MotionBox>
        <MotionBox
          bg="tomato"
          height="400px"
          variants={item}
          w="400px"
          whileHover={{ translateY: -10, boxShadow: '5px 10px 20px 0px rgba(19,39,118,0.2)' }}
          whileTap={{ scale: 0.8 }}
        >
          hola
        </MotionBox>
        <MotionBox
          bg="red.400"
          height="400px"
          variants={item}
          w="400px"
          whileHover={{ translateY: -10, boxShadow: '5px 10px 20px 0px rgba(19,39,118,0.2)' }}
          whileTap={{ scale: 0.8 }}
        >
          hola
        </MotionBox>
        <MotionBox
          bg="blue.400"
          height="400px"
          variants={item}
          w="400px"
          whileHover={{ translateY: -10, boxShadow: '5px 10px 20px 0px rgba(19,39,118,0.2)' }}
          whileTap={{ scale: 0.8 }}
        >
          hola
        </MotionBox>
      </MotionStack>
    </Box>
  );
};

export default TestFrameMotion;
