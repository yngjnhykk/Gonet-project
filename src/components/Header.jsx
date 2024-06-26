import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <div
        style={{ width: '60%', fontSize: 40, fontWeight: 'bold', cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        Gonet
      </div>
      <div
        style={{
          width: '40%',
          display: 'flex',
          gap: 30,
          justifyContent: 'end',
          alignItems: 'center',
        }}
      >
        <button
          className='button'
          onClick={() => {
            navigate('/register');
          }}
        >
          등록
        </button>
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
    width: 100px;
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
