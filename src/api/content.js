import { api } from '../utilities/ajax';
// import { products } from '../../data/products';

export default {
    getPageContent (slug, silentLoad = false) {
        return new Promise((resolve, reject) => {
            api(
                `https://localhost:8082/wp-json/wp/v2/pages?slug=${slug}`,
                "GET",
                null,
                silentLoad
            ).then(response => {
                resolve(response);
            }).catch(errors => {
                reject(errors);
            });
        });
    },
    getHomepage (slug, silentLoad = false) {
        return new Promise((resolve, reject) => {
            api(
                `https://localhost:8082/wp-json/wp/v2/homepage`,
                "GET",
                null,
                silentLoad
            ).then(response => {
                console.log(`API: ${JSON.stringify(response)}`)
                resolve(response);
            }).catch(errors => {
                reject(errors);
            });
        });
    }
}
