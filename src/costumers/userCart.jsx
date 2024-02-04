import * as React from 'react';
import { List, ListItem, Divider, Stack, Avatar, Typography, ListItemText, ListItemAvatar } from "@mui/material"
import ChatIcon from '@mui/icons-material/Chat';
import ScrollDialog from '../chat/modal';
export default function AlignItemsList(props) {
  let { name, email } = props;
  // console.log(name , email);
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'flex', justifyContent: "space-between" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <p>
                  {email}
                </p>
                <Stack className=' cursor-pointer'>
                  <ScrollDialog name={name} />
                </Stack>
              </Typography>

            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">


      </ListItem>
    </List>
  );
}