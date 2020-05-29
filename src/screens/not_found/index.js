import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <div>
      <h4>Página não encontrada!</h4>
      <Link to='/'>Voltar à listagem</Link>
    </div>
  )
}

export default NotFoundScreen;
