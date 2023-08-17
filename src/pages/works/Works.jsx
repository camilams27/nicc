import React from 'react';
import './works.css';
import KitchenSinkExample from '../../components/card/Card';
// import UncontrolledExample from '../../components/carousel/carousel';

function Works() {
  return (
    <div className='worksContainer d-flex justify-content-center align-items-center flex-column'>
      Olá, este é o meu componente Works!
      
      <KitchenSinkExample />
    </div>
  );
}

export default Works;
