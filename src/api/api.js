import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

// GET - 부서별 프로젝트 전체 조회

export const getDatas = async (department) => {
  try {
    const response = await axios.get(`/${department}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// POST - Project 생성

export const postProject = async (department, newProject) => {
  try {
    // 부서 정보 가져오기
    const response = await axios.get(`/${department}`);
    const data = response.data;
    const projects = data.projects;

    // 최신 키 정보 가져오기
    const recentKeyResponse = await axios.get(`/3`);
    const recentKey = recentKeyResponse.data.recentKey;

    // 새로운 키 생성
    const newKey = recentKey + 1;

    // 업데이트할 프로젝트 정보 생성
    const updatedProject = {
      ...newProject,
      key: newKey,
    };

    // 프로젝트 목록에 새로운 프로젝트 추가
    projects.unshift(updatedProject);

    // 데이터 업데이트
    const newData = await axios.put(`/${department}`, data);

    // 성공 메시지 출력
    console.log('새로운 프로젝트가 성공적으로 추가되었습니다.');
    console.log(newData);
  } catch (error) {
    // 에러 처리
    console.error('프로젝트를 추가하는 중 오류가 발생했습니다.', error);
  }
};

// Post - 프로젝트 수정

export const editProject = async (department, newProject) => {
  try {
    // 부서 정보 가져오기
    const response = await axios.get(`/${department}`);
    const data = response.data;

    // 프로젝트 수정
    const newProjects = data.projects.map((project) => {
      if (project.key === newProject.key) {
        return newProject;
      }
      return project;
    });

    // 수정된 데이터 생성
    const newData = { ...data, projects: newProjects };

    // 데이터 업데이트
    const updatedResponse = await axios.put(`/${department}`, newData);

    // 성공 메시지 출력
    console.log('프로젝트가 성공적으로 수정되었습니다.');
    console.log(updatedResponse);
  } catch (error) {
    // 에러 처리
    console.error('데이터를 수정하는 중 오류가 발생했습니다.', error);
  }
};
// POST - 프로젝트 삭제

export const deleteProject = async (department, projectKey) => {
  try {
    // 부서 정보 가져오기
    const response = await axios.get(`/${department}`);
    const data = response.data;

    // 프로젝트 필터링
    const newProjects = data.projects.filter((project) => project.key !== projectKey);

    // 업데이트할 데이터 생성
    const newData = { ...data, projects: newProjects };

    // 데이터 업데이트
    const updatedResponse = await axios.put(`/${department}`, newData);

    // 성공 메시지 출력
    console.log('프로젝트가 성공적으로 삭제되었습니다.');
    console.log(updatedResponse);
  } catch (error) {
    // 에러 처리
    console.error('데이터를 삭제하는 중 오류가 발생했습니다.', error);
  }
};
