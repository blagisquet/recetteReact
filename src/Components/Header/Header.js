import React from 'react';

const Header = ({ pseudo }) => {
  const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;
  return (
    <header>
      <h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
    </header>
  )
  // if (formatPseudo === true) {
  //   return (
  //     <header>
  //       <h1>La boîte à recettes d'{pseudo}</h1>
  //     </header>
  //   )
  // } else {
  //   return (
  //     <header>
  //       <h1>La boîte à recettes de {pseudo}</h1>
  //     </header>
  //   )
  // }
}

export default Header;
