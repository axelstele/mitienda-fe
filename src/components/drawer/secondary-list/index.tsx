import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { user } from 'redux/reducers/user';
import { useAppDispatch } from 'redux/hooks';

const SecondaryList = () => {
  const dispatch = useAppDispatch();

  const handleLogOutClick = () => {
    dispatch(user.logout());
  };

  return (
    <div>
      <ListItem button component={Link} to="/profile">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button onClick={handleLogOutClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </div>
  );
};

export default SecondaryList;
