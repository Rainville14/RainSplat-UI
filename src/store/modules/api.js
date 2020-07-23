// initial state
const state = {
    is_loading: false
}

// actions
const actions = {
    loadApi ({ commit }, is_loading) {
        commit('setLoading', is_loading);
    }
}

// mutations
const mutations = {
    setLoading (state, is_loading) {
        state.is_loading = is_loading
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}