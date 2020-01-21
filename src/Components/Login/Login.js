import React from 'react';

const Login = ({ authenticate }) => {
  return (
    <div className="login">
      <h2>Connectez-vous pour créer vos propres recettes !</h2>
      <button onClick={authenticate} className="facebook-button">Se connecter avec Google</button>
    </div>
  )
}

export default Login;