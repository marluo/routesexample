
import api from './apidefault'

export const searchMovies = (searchValue) =>  {
  try {
    const response = await axios.get(`/?s=${searchValue}&apikey=ce5f6188`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

