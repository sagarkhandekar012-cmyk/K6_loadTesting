import http from 'k6/http';
import {sleep} from 'k6';
import { check } from 'k6';

export const options = {
    vus: 1,
    duration: '3s',
    
}

export default function () {
const url = 'https://amoz.betadelivery.com/backend-api/testing/super-admin/admin-login-send-otp';
const payload = JSON.stringify({
email: 'amozit@yopmail.com',
password: 'Admin@123',
});

const params = {
    headers: {
        'Content-Type': 'application/json',
    },
    auth: { username: 'SuperAdmin', password: '88%@L%es^bUX88`&&&J9XT*@52@52@,._WWM{%%^^&&kk475' },
};
 
 const res =   http.post(url, payload, params);
 check(res, {
    'is status 200': (r) => r.status === 200,
    'is res body has message':(r) => r.body.includes('OTP sent successfully'),
 });
}