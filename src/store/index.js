import Vue from 'vue';
import Vuex from 'vuex';
import api from './modules/api';

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
    getters: {
        getField
    },
    mutations: {
        updateField
    },
    modules: {
        api
    }
})