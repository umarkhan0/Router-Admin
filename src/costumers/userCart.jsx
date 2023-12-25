import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ChatIcon from '@mui/icons-material/Chat';
import { Stack } from '@mui/material';
export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'flex' , justifyContent: "space-between" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <p>
                umaraamir959@gmail.com
                </p>
                <Stack className=' cursor-pointer'>
               <ChatIcon />
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