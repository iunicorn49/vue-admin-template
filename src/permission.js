import router from '@/router'
import routes from '@/router/routes'
import store from '@/store'

router.beforeEach((to, from , next) => {
	let sidebar = store.getters.sidebar
	if (!sidebar.length) {
		let sidebar = getSidebar(routes.children)
		store.commit('SET_SIDEBAR', sidebar)
	}
	next()
})


function getSidebar(list) {
	return list.map(item => {
		const { meta, children, path, redirect } = item
		let obj = {
			title: meta.title,
			path: path
		}
		if (meta.noChild || !children || !children.length) {
			return obj
		}
		// 下面开始有二级菜单了
		obj.children = []
		children.forEach(c => {
			const { meta, path, redirect } = c
			if (meta) {
				obj.children.push({
					title: meta.title,
					path: path
				})
			}
		})
		return obj
	})
}