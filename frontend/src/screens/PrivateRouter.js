/*import React, { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom'

export default function PrivateRouter({children, ...rest}) {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('userInfo');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);

  return <Route {...rest}>{token ? children : null}</Route>;
}*/