import React, { useEffect } from 'react';

const HeaderAd = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none; width:100%;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '728');
    ins.setAttribute('data-ad-height', '90');
    ins.setAttribute('data-ad-unit', 'DAN-Iq9lbcIZj8x7Irlp');
    document.querySelector('.headerAd').appendChild(ins);
    document.querySelector('.headerAd').appendChild(scr);
  }, []);

  return (
    <div
      className="headerAd"
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '10vh',
        zIndex: 100,
      }}
    />
  );
};

export default HeaderAd;
