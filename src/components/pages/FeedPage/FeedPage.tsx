import { Box, Typography } from "@mui/material";
import { Container, HashTagButton } from "components/commons";
import { MessagePostBox } from "./partials";

function TagSection() {
  return (
    <Box className='flex flex-col gap-6 w-80'>
      <Typography color='text.primary'>Trending</Typography>
      <Box className='flex flex-wrap gap-3'>
        <HashTagButton icon='tag'>cozde</HashTagButton>
        <HashTagButton icon='tag'>reactjs</HashTagButton>
        <HashTagButton icon='tag'>redux</HashTagButton>
        <HashTagButton icon='tag'>redux-toolkit</HashTagButton>
        <HashTagButton icon='tag'>frontend</HashTagButton>
      </Box>
      <Typography color='text.primary'>Recent Search</Typography>
      <Box className='flex flex-wrap gap-3'>
        <HashTagButton icon='search'>How to create source-code?</HashTagButton>
        <HashTagButton icon='search'>
          CRA Template for react and redux
        </HashTagButton>
      </Box>
    </Box>
  );
}

function FeedSection() {
  return (
    <Box className='flex flex-col gap-6 w-[30rem]'>
      <MessagePostBox />
    </Box>
  );
}

function StatusSection() {
  return <Box className='flex flex-col gap-6 w-80'></Box>;
}

function FeedPage() {
  return (
    <Container className='flex-row justify-between'>
      <TagSection />
      <FeedSection />
      <StatusSection />
    </Container>
  );
}

export default FeedPage;
