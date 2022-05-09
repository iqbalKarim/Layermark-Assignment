import axios from 'axios';

// https://dcw-test.layermark.com/auth/realms/AssetManagement/protocol/openid-connect/token

// -H 'Content-Type: application/x-www-form-urlencoded'
// --data-urlencode 'username={username}'
//--data-urlencode 'password={password}'
//--data-urlencode 'client_id=AMS'
//--data-urlencode 'grant_type=password'
//--data-urlencode 'scope=openid offline_access'

export const signIn = (username, password) => {
  const body = {
    scope: 'openid offline_access',
    grant_type: 'password',
    client_id: 'AMS',
    username: { username },
    password: { password },
  };

  console.log(JSON.stringify(body));

  let response = '';

  axios
    .post(
      'https://dcw-test.layermark.com/auth/realms/AssetManagement/protocol/openid-connect/token',
      JSON.stringify(body)
    )
    .then((res) => (response = res))
    .catch((err) => (response = err));

  return response;
};
