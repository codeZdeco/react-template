import { Box, Typography } from "@mui/material";
import { Container, SectionBox } from "components/commons";

function AnalysisSection() {
  return (
    <Box className='grow-3 flex flex-col gap-6'>
      <Typography color='text.primary'>Analysis</Typography>
      <Box className='flex flex-row gap-6'>
        <SectionBox className='grow h-56'></SectionBox>
        <SectionBox className='grow h-56'></SectionBox>
        <SectionBox className='grow h-56'></SectionBox>
      </Box>
      <SectionBox className='grow'></SectionBox>
      <Box className='h-64 flex flex-row gap-6'>
        <SectionBox className='grow-5'></SectionBox>
        <SectionBox className='grow-3'></SectionBox>
      </Box>
    </Box>
  );
}

function ActivitySection() {
  return (
    <Box className='grow-1 flex flex-col gap-6'>
      <Typography color='text.primary'>Activities</Typography>
      <SectionBox className='grow'></SectionBox>
    </Box>
  );
}

function HomePage() {
  return (
    <Container className='flex-row'>
      <AnalysisSection />
      <ActivitySection />
    </Container>
  );
}

export default HomePage;
