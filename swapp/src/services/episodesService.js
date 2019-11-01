import { urlConstant } from '../constants/urlConstant';

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

const allEpisodes = () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`${urlConstant}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const episodesService = {
  allEpisodes
};
