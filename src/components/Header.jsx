import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrap>
      <div style={{ width: '60%', fontSize: 40, fontWeight: 'bold' }}>Gonet</div>
      <div
        style={{
          width: '40%',
          display: 'flex',
          gap: 30,
          justifyContent: 'end',
          alignItems: 'center',
        }}
      >
        <div className='menu'>menu1</div>
        <div className='menu'>menu2</div>
        <div className='menu'>menu3</div>
        <div> |</div>
        <button className='button'>로그인</button>
        <button className='button'>회원가입</button>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: auto;
  padding: 0px 16px;
  height: 62px;
  min-height: 3rem;
  display: flex;
  box-shadow: rgb(234, 234, 236) 0px 1px 0px;
  background-color: white;
  .menu {
    font-size: 15px;
    color: rgb(112, 112, 112);

    align-items: center;
  }

  .button {
    border: 1px solid rgb(234, 234, 236);
    background-color: rgb(255, 255, 255);
    padding: 12px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 20px;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    outline: none;
    transition: all 0.1s ease-out 0s;
  }
`;

export default Header;
