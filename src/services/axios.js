import axios from 'axios';

const axiosInstance = axios.create();
// https://dcw-test.layermark.com/auth/realms/AssetManagement/protocol/openid-connect/token

// -H 'Content-Type: application/x-www-form-urlencoded'
// --data-urlencode 'username={username}'
//--data-urlencode 'password={password}'
//--data-urlencode 'client_id=AMS'
//--data-urlencode 'grant_type=password'
//--data-urlencode 'scope=openid offline_access'

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof error.response === 'undefined') {
      alert(
        'A network error occurred. ' +
          'This could be a CORS issue or a dropped internet connection. ' +
          'It is not possible for us to know.'
      );
    }
    return Promise.reject(error);
  }
);

export const signIn = (username, password) => {
  const data = {
    scope: 'openid offline_access',
    grant_type: 'password',
    client_id: 'AMS',
    username: username,
    password: password,
  };

  axiosInstance
    .post(
      'https://dcw-test.layermark.com/auth/realms/AssetManagement/protocol/openid-connect/token',
      data
    )
    .then((res) => {
      console.log('then');
      return res;
    })
    .catch((err) => {
      console.log('catch', err.response.headers);
      return err;
    });
};
