/*
	存储聊天基本信息
*/
export default {
	namespaced: true,
	state: () => ({
		nim: "", //存储聊天基本信息nim
	}),
	actions: {
		setNim({
			commit,
			state
		}, {
			nim
		} = {}) {
			commit('setNim', nim);
		}
	},
	mutations: {
		setNim(state, nim) {
			state.nim = nim;
		}
	}
}
