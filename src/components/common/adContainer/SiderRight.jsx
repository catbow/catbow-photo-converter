import React, { useEffect } from 'react';
import styled from 'styled-components';

const SiderRight = () => {
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
    ins.setAttribute('data-ad-unit', 'DAN-bNCKLC96aoB7nHHQ');
    document.querySelector('.siderRightAdfit').appendChild(ins);
    document.querySelector('.siderRightAdfit').appendChild(scr);
  }, []);
  return (
    <AdContainer>
      <div
        className="siderRightAdfit"
        styled={{
          marginLeft: '50%',
          transform: 'translate(-50%, 10px)',
        }}
      />
    </AdContainer>
  );
};

export default SiderRight;

export const AdContainer = styled.div`
  ${props => props.theme.variables.flex()};
  width: 336px;
  height: 100vh;
`;
