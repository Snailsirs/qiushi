import Vue from 'vue'
import Vuex from 'vuex'
import nim from './modules/nim';
import msg from './modules/message';
import sdk from './modules/sdk';
import video from './modules/video';

import mags_updata from './modules/mags_updata';
// 底部菜单选择

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		nim,
		msg,
		sdk,
		mags_updata,
		video
	},
})
