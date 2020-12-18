/*
	存储聊天基本信息
*/
export default {
	namespaced: true,
	state: () => ({
		video: [], //存储聊天基本信息video
	}),
	actions: {
		setvideo({commit,state}, {video} = {}) {
			commit('setvideo', video);
		}
	},
	mutations: {
		setvideo(state, video) {
			state.video = video;
		}
	}
}