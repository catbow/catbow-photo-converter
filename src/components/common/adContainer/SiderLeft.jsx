import React, { useEffect } from 'react';
import { AdContainer } from './adStyle';

const SiderLeft = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none; width:100%;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '160');
    ins.setAttribute('data-ad-height', '600');
    ins.setAttribute('data-ad-unit', 'DAN-7YIaUof9dp90p3xj');
    document.querySelector('.siderLeftAdfit').appendChild(ins);
    document.querySelector('.siderLeftAdfit').appendChild(scr);
  }, []);
  return (
    <div
      className="siderLeftAdfit"
      style={{
        padding: '5%',
      }}
    />
  );
};

export default SiderLeft;
