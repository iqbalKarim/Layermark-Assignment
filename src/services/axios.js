import axios from 'axios';
import { stringify } from 'query-string';

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

export const signIn = async (username, password) => {
  const data = {
    grant_type: 'password',
    client_id: 'AMS',
    scope: 'openid offline_access',
    username: username,
    password: password,
  };

  return await axiosInstance.post(
    '/auth/realms/AssetManagement/protocol/openid-connect/token',
    stringify(data),
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
  );

  // await axiosInstance
  //   .post(
  //     '/auth/realms/AssetManagement/protocol/openid-connect/token',
  //     stringify(data),
  //     {
  //       headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //     }
  //   )
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((err) => {
  //     console.log(err.response.data);
  //     return err;
  //   });
};
