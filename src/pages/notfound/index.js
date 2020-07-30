/* eslint-disable linebreak-style */
import React from 'react';
import Catload from '../../assets/img/catload.png';
import './NotFound.css';
import PageDefault from '../../components/PageDefault';

function NotFound() {
  return (
    <PageDefault>
      <div className="NotF">
        <h1 className="t404">404</h1>
        <h2 className="st404">Page not found</h2>
        <img className="catfig" src={Catload} alt="404" />
      </div>
    </PageDefault>
  );
}

export default NotFound;
