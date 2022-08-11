import React from 'react';
import coverImage from '../../assets/personal/spectrumwheel.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Sajal Agnihotri</h1>
      <img src={coverImage} alt="irvine spectrum"></img>
      {props.children}
    </header>
  );
}

export default Header;
