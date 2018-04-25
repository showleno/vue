import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = { 
    type: null 
}
const mutations = {
    getType(state,type) {
        // 改变state中的type
        state.type = type;
        // 设置session值
        window.sessionStorage.setItem('type',type);
    }
}
export default new Vuex.Store({
    state,
    mutations,
})