import axios from 'axios';

const apiUrl = 'http://localhost:3001';

// GET - 부서별 프로젝트 전체 조회

export const getDatas = async (department) => {
  try {
    const response = await axios.get(`${apiUrl}/${department}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// POST - Project 생성

export const postProject = async (department, newProject) => {
  console.log(department, newProject);
  try {
    // new Code 생성
    await axios.get(`${apiUrl}/${department}`).then((response) => {
      const data = response.data;
      const projects = data.projects;

      // 부서 내 가장 최근 프로젝트
      const recentProject = projects[0].projectCode;

      const newCode =
        newProject.projectCode +
        '-' +
        (parseInt(recentProject.substring(recentProject.indexOf('-') + 1)) + 1).toString();

      // new Key 생성
      axios.get(`${apiUrl}/3`).then((response) => {
        const recentKey = response.data.recentKey;

        axios
          .patch(`${apiUrl}/3`, { recentKey: recentKey + 1 })
          .then((response) => {
            const newKey = response.data.recentKey;

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
    });
  } catch (err) {
    console.error(err);
  }
};

// Post - 프로젝트 수정

export const editProject = async (department, newProject) => {
  try {
    await axios.get(`${apiUrl}/${department}`).then((response) => {
      const data = response.data;
      const projects = data.projects;

      const newProjects = projects.map((project) => {
        if (project.key === newProject.key) {
          return newProject;
        }
        return project;
      });

      const newData = { ...data, projects: newProjects };

      axios
        .put(`${apiUrl}/${department}`, newData)
        .then((updatedResponse) => {
          console.log('프로젝트가 성공적으로 수정되었습니다.');
          console.log(updatedResponse);
        })
        .catch((err) => {
          console.error('데이터를 수정하는 중 오류가 발생했습니다.', err);
        });
    });
  } catch (err) {
    console.error(err);
  }
};

// POST - 프로젝트 삭제

export const deleteProject = async (department, projectKey) => {
  try {
    await axios.get(`${apiUrl}/${department}`).then((response) => {
      const data = response.data;
      const projects = data.projects;

      const newProjects = projects.filter((project) => {
        return project.key !== projectKey;
      });

      console.log(newProjects);

      const newData = { ...data, projects: newProjects };

      axios
        .put(`${apiUrl}/${department}`, newData)
        .then((updatedResponse) => {
          console.log('프로젝트가 성공적으로 삭제되었습니다.');
          console.log(updatedResponse);
        })
        .catch((err) => {
          console.error('데이터를 삭제하는 중 오류가 발생했습니다.', err);
        });
    });
  } catch (err) {
    console.error(err);
  }
};
