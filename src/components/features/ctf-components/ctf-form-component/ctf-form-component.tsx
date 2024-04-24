'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

function CtfForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '144457167',
          region: 'eu1',
          formId: '30cc1c33-a94d-470f-a496-7a318dfc2c93',
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return <div id="hubspotForm" className="hubspotForm"></div>;
}

export default function CtfFormComponent(){

  return (
      <div className='grid grid-cols-1 lg:grid-cols-2 p-4 lg:px-40'>
        <CtfForm></CtfForm>
        <img src='https://www.amexio.fr/wp-content/uploads/2023/09/hands.png' alt="alt"/>
      </div>
  )
}
