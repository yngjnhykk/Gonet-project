import axios from 'axios';

export const getDatas = async (department) => {
  try {
    const response = await axios.get(`http://localhost:3001/${department}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
