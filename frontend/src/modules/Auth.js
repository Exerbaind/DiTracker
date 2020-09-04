import axios from 'axios'
import router from '../router';

const state = {
    user: {},
    // note: {},
    error: null,
    status: '',
    token: localStorage.getItem('token') || '',
};
const mutations = {
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    login_request(state) {
        state.status = 'loading'
    },
    login_success(state, user, token) {
        state.user = user
        state.status = 'success'
        state.token = token
    },
    note_added(state) {
        state.status = 'success'
    },
    note_delete(state, user) {
        state.user = user
    },
    login_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.user = ''
        state.status = ''
        state.token = ''
    },
    profile_present(state, user) {
        state.user = user
    },
    // notes_present(state, note) {
    //     state.note = note
    // }
};
const actions = {
    async register({
        commit
    }, user) {
        try {
            let res = await axios.post('http://localhost:5000/api/auth/register', user);
            if (res.data.success !== undefined) {
                commit('register_success')
            }
            return res
        } catch (err) {
            commit('register_error', err)
        }
    },

    async login({
        commit
    }, user) {
        try {
            commit('login_request');
            let res = await axios.post('http://localhost:5000/api/auth/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user
                // Установка токена и загрузка его в localStorage
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('login_success', token, user);
                // router.push('/profile')
            }
            return res;
        } catch (err) {
            commit('login_error', err)
        }
    },

    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login')
        return
    },

    async getProfile({
        commit
    }) {
        let res = await axios.get('http://localhost:5000/api/auth/profile');
        commit('profile_present', res.data.user)
        return res;
    },
    // async getNotes({
    //     commit
    // }) {
    //     let res = await axios.get('http://localhost:5000/api/auth/todos')
    //     for (let i = 0; i < res.data.note.length; i++) {
    //         if (res.data.note[i].email === "digr98@gmail.com") {
    //             commit('notes_present', res.data.note[1][0])
    //             localStorage.setItem(`t${i}`, res.data.note[i])
    //         }
    //     }
    // },

    async putNote({
        commit
    }, user) {
        let res = await axios.post('http://localhost:5000/api/auth/todo', user);
        if (res.data.success !== undefined) {
            commit('note_added')
            router.push('/todos')
        }
        return res
    },

    async removeNote({
        commit
    }, note) {
        let res = await axios.put('http://localhost:5000/api/auth/todos', note);
        commit('note_delete', state.user)
        return res;
    }
};
const getters = {
    error: state => state.error,
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    note: state => state.note
};
export default {
    state,
    actions,
    mutations,
    getters
}