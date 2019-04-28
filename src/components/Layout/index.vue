<template>
	<section class="layout">
		<div class="layout-content" :class="{'side-hide': sideHide}">
			<main class="layout-main">
				<div class="breadcrumb-wrap">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :to="index === 0 ? '' : item.__realPath__" :key="index">{{item.meta.title}}</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<router-view :key="routerViewKey"/>
			</main>
		</div>
		<layout-side :sideHide="sideHide"></layout-side>
		<layout-header @sideHideChange="sideHide = !sideHide" :sideHide="sideHide"></layout-header>

	</section>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutSide from './LayoutSide'

export default {
	data() {
		return {
			sideHide: false,
		}
	},
	computed: {
		routerViewKey() {
			let key = this.$route.path + Date.now()
			return key
		},
		breadcrumbList() {
			let list = this.$route.matched.filter(item => { // 先过滤出有 meta 和 meta.title 的路由, 说明这是一个有页面的路由
				return item.meta && item.meta.title
			}).map(route => { // 介于 matched 这个方法, 是不携带参数的, 需要手动将参数加进去, 并且只支持params不支持query
				const { path } = route
				let reg = /:[^\/]+\/?/g // 将 :开始 /结尾 的字符串找出来, 也就是 params标记
				let params = path.match(reg)
				if (params && params.length) { // 如果有标记, 则将标记处全部替换成当前路径中的参数
					let __realPath__ = path
					const { params: currentParams } = this.$route
					params.forEach(param => {
						let index = param.indexOf('/')
						if (index > 0) {
							param = param.slice(0, index)
						}
						__realPath__ = __realPath__.replace(param, currentParams[param.slice(1, param.length)])
					})
					route.__realPath__ = __realPath__
				} else {
					route.__realPath__ = path
				}
				return route
			})
			console.log('list', list)
			return list
		}
	},
	methods: {

	},
	components: {
		LayoutHeader,
		LayoutSide
	}
}
</script>


<style lang="scss" scoped>
.layout {
	height: 100%;
	.layout-content {
		padding: 74px 10px 10px 10px;
		// min-height: 100vh;
		margin-left: 200px;
		transition: margin-left .3s;
		&.side-hide {
			margin-left: 0;
		}
		main {
			background: #fff;
			.breadcrumb-wrap {
				padding: 15px;
				margin-bottom: 15px;
			}
		}
	}
}
</style>

