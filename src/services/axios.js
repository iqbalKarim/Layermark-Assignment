import axios from 'axios';
import { stringify } from 'query-string';

// https://dcw-test.layermark.com/auth/realms/AssetManagement/protocol/openid-connect/token
// -H 'Content-Type: application/x-www-form-urlencoded'
// --data-urlencode 'username={username}'
//--data-urlencode 'password={password}'
//--data-urlencode 'client_id=AMS'
//--data-urlencode 'grant_type=password'
//--data-urlencode 'scope=openid offline_access'

export const signIn = async (username, password) => {
  const data = {
    grant_type: 'password',
    client_id: 'AMS',
    scope: 'openid offline_access',
    username: username,
    password: password,
  };

  return await axios.post(
    '/auth/realms/AssetManagement/protocol/openid-connect/token',
    stringify(data),
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
  );
};
