/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import {
  Link, Paper, Grid, Container, Typography, Toolbar, Box, CssBaseline, createTheme, ThemeProvider,
} from '@mui/material';
import AppBar from 'components/app-bar';
import Drawer from 'components/drawer';
import ACCESS_TOKEN from 'utils/constants/session-storage';

function Copyright(props: any) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const mdTheme = createTheme();

const PrivateRoute = ({
  component: Comp, path, ...rest
} : { component: React.FunctionComponent<RouteComponentProps>, path: string, exact: boolean }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  if (!sessionStorage.getItem(ACCESS_TOKEN)) {
    return null;
  }

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => (
        <>
          <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBar open={open} toggleDrawer={toggleDrawer} />
              <Drawer open={open} toggleDrawer={toggleDrawer} />
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) => (theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900]),
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
                }}
              >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          // height: 240,
                        }}
                      >
                        <Comp {...props} />
                      </Paper>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ pt: 4 }} />
                </Container>
              </Box>
            </Box>
          </ThemeProvider>
        </>
      )}
    />
  );
};

export default PrivateRoute;
