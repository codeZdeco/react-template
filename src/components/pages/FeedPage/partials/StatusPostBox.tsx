import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Box, TextField, IconButton, Icon } from '@mui/material';
import { UserProps } from '@types';
import moment from 'moment';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';

interface StatusPostBoxProps {
  postId: string;
  user: UserProps;
  timestamp: number;
  message: string;
  attachs?: Array<any>;
}

function StatusPostBox(props: StatusPostBoxProps) {
  const dispatch = useAppDispatch();
  const { postId, user, timestamp, message } = props;
  const { photourl, displayname, fullname } = user;

  useEffect(() => {
    // TODO: fetching comments belong to post overhere
  }, []);

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar>{displayname || fullname}</Avatar>}
        title={displayname || fullname}
        subheader={moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
        action={
          <IconButton aria-label="settings">
            <Icon>more_vert</Icon>
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box className='w-full flex flex-row justify-between items-center'>
          <Box className='flex flex-row'>
            <IconButton size='small' aria-label="like">
              <Icon>favorite_outlined</Icon>
            </IconButton>
            <IconButton size='small' aria-label="like">
              <Icon>comment</Icon>
            </IconButton>
          </Box>
          <IconButton size='small' aria-label="like">
            <Icon>share</Icon>
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default StatusPostBox;
