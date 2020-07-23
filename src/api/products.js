import { api } from '../utilities/ajax';
// import { products } from '../../data/products';

export default {
    getProducts (types, silentLoad = false) {
        console.log(`${process.env.VUE_APP_PRODUCTS_API}${types.account || ''}${types.product ? `?type=${types.product}` : ''}`)
        return new Promise((resolve, reject) => {
            api(
                `${process.env.VUE_APP_PRODUCTS_API}${types.account || ''}${types.product ? `?type=${types.product}` : ''}`,
                "GET",
                null,
                silentLoad
            ).then(response => {
                resolve(response.products);
            }).catch(errors => {
                reject(errors);
            });
        });
    }
}
