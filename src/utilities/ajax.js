import axios from 'axios';
import store from '../store';

const api = (url, method, data, silentLoad) => {
    console.log(`SILENT LOAD ${silentLoad}`);
    store.dispatch('api/loadApi', !silentLoad);
    return new Promise((resolve, reject) => {
        axios[method.toLowerCase()](url, data)
            .then(res => {
                resolve(res.data);
                store.dispatch('api/loadApi', false);
            }).catch(err => {
                store.dispatch('api/loadApi', false);
                console.log(err);
                if (err.response && err.response.status === 500) {
                    store.dispatch('modal/openModal', {
                        headline: 'Server Error',
                        content: 'Please Try Again'
                    })
                }
                reject(err.response ? err.response : {});
            });
    })
}

export {
    api
}