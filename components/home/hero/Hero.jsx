import { Grid, Box } from '@chakra-ui/layout';

const Hero = () => {
  return (
    <Grid templateColumns="repeat(2,1fr)">
      <Box bg="tomato">Box 1 </Box>
      <Box bg="blue">Box 2 </Box>
    </Grid>
  );
};

export default Hero;
