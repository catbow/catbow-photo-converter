import React, { useEffect } from 'react';
import styled from 'styled-components';

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
    <AdContainer>
      <div
        className="siderLeftAdfit"
        styled={{
          marginLeft: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </AdContainer>
  );
};

export default SiderLeft;

export const AdContainer = styled.div`
  ${props => props.theme.variables.flex()};
  width: 336px;
  height: 700px;
`;
