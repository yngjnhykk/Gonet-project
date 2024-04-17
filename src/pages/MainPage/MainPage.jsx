import React from 'react';
import styled from 'styled-components';
import Department from './Department';
import { getDatas } from '../../api/api';

const MainPage = () => {
  const fetchData = async () => {
    try {
      const dataArray = await getDatas(); // getDatas 함수를 호출하여 반환된 Promise를 처리
      console.log(dataArray); // 전체 배열 값 출력
    } catch (err) {}
  };

  fetchData();

  return (
    <Wrap>
      <div style={{ minWidth: 176, height: 400 }}>
        <Department />
      </div>
      <div style={{ minWidth: 478 }}>2</div>
      <div style={{ minWidth: 246 }}>3</div>
    </Wrap>
  );
};

export default MainPage;

const Wrap = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 2.5fr 7fr 3fr;
  column-gap: 64px;
  margin-top: 32px;
  /* max-width: 1280px; */

  div {
    background-color: white;
    border-radius: 16px;
    padding: 8px;
    display: flex;
    align-items: center;
  }
`;
