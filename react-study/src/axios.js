import axios from 'axios'
const $http = axios.create({
    timeout:50000

});

$http.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        return config;
    }
);


export default $http
