import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getDatas = async (department) => {
  try {
    const response = await axios.get(`${apiUrl}/${department}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const postProject = async (department, newProject) => {
  console.log(department, newProject);
  try {
    // new projectCode 생성
    await axios.get(`${apiUrl}/${department}`).then((response) => {
      const data = response.data;
      const projects = data.projects;

      const recentProject = projects[0].projectCode;

      const newCode =
        newProject.projectCode +
        '-' +
        (parseInt(recentProject.substring(recentProject.indexOf('-') + 1)) + 1).toString();

      // new Key 생성
      axios
        .get(`${apiUrl}/3`)
        .then((response) => {
          const newKey = response.data.recentKey + 1;

          const updateProject = {
            ...newProject,
            key: newKey,
            projectCode: newCode,
          };

          projects.unshift(updateProject);

          // new Project 생성
          axios
            .put(`${apiUrl}/${department}`, data)
            .then((updatedResponse) => {
              console.log('새로운 프로젝트가 성공적으로 추가되었습니다.');
              console.log(updatedResponse);
            })
            .catch((err) => {
              console.error('데이터를 가져오는 중 오류가 발생했습니다.', err);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  } catch (err) {
    console.error(err);
  }
};
