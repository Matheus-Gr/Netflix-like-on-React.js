import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo-ricaflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className='Logo' src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Maior acervo de conteúdo do
        {' '}
        <a href="https://www.youtube.com/user/QueimaMidiaGamers">
          Rica Games
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
