import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#12764D',
                accent: '#12764D',
                error: '#DB3535'
            }
        }
    },
    icons: {
        iconfont: 'md',
    }
});
