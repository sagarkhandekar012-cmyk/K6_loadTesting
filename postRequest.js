import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'https://test-api.k6.io/auth/token/login/';
  const payload = JSON.stringify({
    username: 'my_test_user',
    password: 'securePassword123',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let res = http.post(url, payload, params);
  
  check(res, {
    'status is valid': (r) => r.status === 200 || r.status === 400,
  });
  
  sleep(1);
}