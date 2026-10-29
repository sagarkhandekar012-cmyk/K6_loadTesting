import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'per-vu-iterations',
    vus: 1000,
    iterations: 2000,
    duration: '30s',
    
}

export default function () {

    http.get('https://www.youtube.com/');
    sleep(1);
}