import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { user } from 'redux/reducers/user';

const Company = () => {
  const { company } : { company: string} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(user.get({ company }));
  }, []);

  return (<div> Esta es la pagina de voragine </div>);
};

export default Company;
