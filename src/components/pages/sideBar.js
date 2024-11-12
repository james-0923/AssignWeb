import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const Sidebar = () => {
    const navigate = useNavigate();
    const logOut= () => {
        localStorage.removeItem('authToken');
        navigate('/login');           
    }
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
          <ListItem button key='Home'>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem button key='Profile'>
            <ListItemText primary='Profile' />
          </ListItem>
          <ListItem button key='Settings'>
            <ListItemText primary='Settings' />
          </ListItem>
          <ListItem button key='Logout' onClick={() =>logOut()}>
            <ListItemText primary='Logout' />
          </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
