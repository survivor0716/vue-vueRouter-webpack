/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/login': {
    	component (resolve) {
    		require(['./views/login.vue'], resolve);
    	}
    },
    '/router1': {
    	component (resolve) {
    		require(['./views/router1.vue'], resolve);
    	}
    }
};
export default routers;