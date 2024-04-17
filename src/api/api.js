import axios from 'axios';

export const getDatas = async () => {
  try {
    const response = await axios.get('http://localhost:3001/0').then((response) => {
      const data = response.data;
      return data;
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};
