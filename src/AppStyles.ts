import styled from "styled-components";

const DivWrap = styled.div`
  position: relative;
`;
const DivFocusCover = styled(DivWrap)`
  height: 100vh;
  overflow: hidden;
`;
const ASkipNav = styled.a`
  position: fixed; 
  left: 0; 
  top: -36px; 
  width: 100%; 
  line-height: 35px; 
  font-size: 16px; 
  border-bottom: 1px solid #fff; 
  color: #fff; 
  background: rgba(0, 0, 0, 0.6); 
  text-align: center; 
  z-index: 10000; 
  transition: top 0.3s;

  &:focus {
    top: 0;
  }
`;

export {DivWrap, DivFocusCover, ASkipNav};