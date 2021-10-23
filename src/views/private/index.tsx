/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

const PrivateRoute = ({
  component: Comp, path, ...rest
} : { component: React.FunctionComponent<RouteComponentProps>, path: string, exact: boolean }) => {
  if (!sessionStorage.getItem('accessToken')) {
    return null;
  }

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => (
        <>
          {/* <CustomAppBar />
          <CustomDrawer /> */}
          <div style={{ marginTop: 64 }}>
            <Comp {...props} />
          </div>
        </>
      )}
    />
  );
};

export default PrivateRoute;
