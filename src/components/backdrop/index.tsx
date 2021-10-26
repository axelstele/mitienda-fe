import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useAppSelector } from 'redux/hooks';
import { selectIsLoading } from 'redux/selectors/global';
import { shallowEqual } from 'react-redux';

const CustomBackdrop = () => {
  const isLoading = useAppSelector(selectIsLoading, shallowEqual);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CustomBackdrop;
