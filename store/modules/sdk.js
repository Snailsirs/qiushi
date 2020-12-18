/*
	存储聊天基本信息
*/
export default {
	namespaced: true,
	state: () => ({
		sdk: "", //存储聊天基本信息nim
	}),
	actions: {
		setSdk({
			commit,
			state
		}, {
			sdk
		} = {}) {
			commit('setSdk', sdk);
		}
	},
	mutations: {
		setSdk(state, sdk) {
			state.sdk = sdk;
		}
	}
}
