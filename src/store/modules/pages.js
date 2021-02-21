import content from '../../api/content';

// initial state
let state = {
    content: {
        title: '',
        renderedContent: ''
    }
}

// actions
const actions = {
    getPageContent({ commit }, slug) {
        return new Promise((resolve, reject) => {
            content.getPageContent(slug)
                .then(res => {
                    commit('getPageContent', res);
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    getHomepage({ commit }) {
        return new Promise((resolve, reject) => {
            content.getHomepage()
                .then(res => {
                    console.log(`RES ${JSON.stringify(res)}`)
                    commit('getHomepage', res);
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}

// mutations
const mutations = {
    getPageContent(state, content) {
        state.content = {
            title: content[0].title.rendered,
            renderedContent: content[0].content.rendered
        }
    },
    getHomepage(state, content) {
        console.log(`CONTENT: ${JSON.stringify(content)}`);
        state.content = {
            title: content.title.rendered,
            renderedContent: content.content.rendered
        }
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}