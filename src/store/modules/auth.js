
const state = {
	sidebar: []
}

const mutations = {
	SET_SIDEBAR(state, sidebar) {
		state.sidebar = sidebar
	}
}

const actions = {
	GET_USER_INFO({commit}) {
		return new Promise((resolve) => {
			commit('SET_SIDEBAR', this.setSidebar())
			resolve('用户数据获取成功')
		})
	}
}

export default {
	state, 
	mutations,
	actions
}

function setSidebar() {

}