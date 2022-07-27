import { Box, Typography, Button } from "@mui/material";
import { UserProps } from '@types';
import { Container, HashTagButton } from "components/commons";
import { MessagePostBox, StatusPostBox } from "./partials";

function TagSection() {
  return (
    <Box className='flex flex-col gap-6 w-80 sticky top-0 h-fit'>
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
  const fakeUser: UserProps = {
    photourl: '',
    displayname: 'John Doe',
    fullname: 'John',
    auth: [{ group: 'development', role: 'admin' }],
    username: 'admin'
  };

  return (
    <Box className='flex flex-col gap-6 w-[30rem]'>
      <MessagePostBox />
      <Box className='w-full flex flex-col gap-4'>
        <StatusPostBox postId='1' timestamp={new Date().getTime()} message='hello world' user={fakeUser} />
        <StatusPostBox postId='1' timestamp={new Date().getTime()} message='hello world' user={fakeUser} />
        <StatusPostBox postId='1' timestamp={new Date().getTime()} message='hello world' user={fakeUser} />
        <StatusPostBox postId='1' timestamp={new Date().getTime()} message='hello world' user={fakeUser} />
        <StatusPostBox postId='1' timestamp={new Date().getTime()} message='hello world' user={fakeUser} />
        <StatusPostBox postId='1' timestamp={new Date().getTime()} message='hello world' user={fakeUser} />
        <StatusPostBox postId='1' timestamp={new Date().getTime()} message='hello world' user={fakeUser} />
        <Button>Load More</Button>
      </Box>
    </Box>
  );
}

function StatusSection() {
  return <Box className='flex flex-col gap-6 w-80'></Box>;
}

function FeedPage() {
  return (
    <Container className='overflow-auto'>
      <Box className='w-full flex flex-row justify-between relative h-fit'>
        <TagSection />
        <FeedSection />
        <StatusSection />
      </Box>
    </Container>
  );
}

export default FeedPage;
