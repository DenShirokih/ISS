import axios from 'axios';

axios.defaults.baseURL = 'http://api.open-notify.org/';

export const getLocation = async () => {
  try {
    const response = await axios.get('iss-now.json');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getPeople() {
  const response = await axios.get('astros.json');
  return response.data;
}
