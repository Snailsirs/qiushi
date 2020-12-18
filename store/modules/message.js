/*
	存储消息基本信息
*/
export default {
	namespaced: true,
	state: () => ({
		msg: [], //存储聊天基本信息nim
	}),
	actions: {
		setMsg({
			commit,
			state
		}, {
			msg
		} = {}) {
			commit('setMsg', msg);
		}
	},
	mutations: {
		setMsg(state, msg) {
			state.msg = msg;
		}
	}
}
