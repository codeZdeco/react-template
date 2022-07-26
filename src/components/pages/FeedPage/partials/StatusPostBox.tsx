import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, TextField } from '@mui/material';
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
        subtitle={moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <TextField fullWidth size='small' multiline />
      </CardActions>
    </Card>
  );
}

export default StatusPostBox;
