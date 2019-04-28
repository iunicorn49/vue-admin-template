<template>
	<aside class="side-bar" :class="{'side-hide': sideHide}">
		<el-menu :default-active="currentPath">
			<template v-for="(menu, index) in sidebar">
				<!-- 有子菜单 -->
				<el-submenu v-if="menu.children && menu.children.length" :key="index" :index="menu.path">
					<template slot="title">
						<i class="fa fa-list"></i>
						<span slot="title">{{menu.title}}</span>
					</template>
					<router-link :to="sub.path" v-for="(sub, subIndex) in menu.children" tag="div" :key="`${index + 1}-${subIndex + 1}`">
						<el-menu-item :index="sub.path">
							<span slot="title">{{sub.title}}</span>
						</el-menu-item>
					</router-link>
				</el-submenu>
				<!-- 无子菜单 -->
				<router-link v-else tag="div" :to="menu.path" :key="index">
					<el-menu-item :index="menu.path">
						<template slot="title">
							<i class="fa fa-list"></i>
							<span slot="title">{{menu.title}}</span>
						</template>
					</el-menu-item>
				</router-link>
			</template>
		</el-menu>
	</aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	props: {
		sideHide: { type: Boolean, default: false }
	},
	computed: {
		currentPath() {
			const { path } = this.$route
			const limit = 4
			let r = path.split('/')
			if (r.length > limit) {
				let num = r.length - limit
				for (let i = 0; i < num; i++) {
					r.pop()
				}
				return r.join('/')
			}
			return path
		},
		...mapGetters(['sidebar'])
	},
}
</script>


<style lang="scss">
$side-bar-background: #001529;
$menu-default-color: rgba(255, 255, 255, .7);
$menu-active-color: #fff;
$menu-default-background: #000c17;
$menu-active-background: #1890ff;
.side-bar {
	position: fixed;
	top: 64px;
	left: 0;
	background: $side-bar-background;
	height: 100%;
	width: 200px;
	box-shadow: 6px 0 6px rgba(0,0,0,.1);
	box-sizing: border-box;
	transition: left .3s;
	.fa {
		display: inline-block;
		text-align: center;
		height: 20px;
		width: 24px;
		font-size: 18px;
		margin-right: 10px;
	}
	&.side-hide {
		left: -200px;
	}
	.el-menu {
		background: $side-bar-background;
		border-right: none !important;
		.icon {
			color: $menu-default-color;
		}
		.el-submenu {
			color: $menu-default-color;
			font-weight: bold;
			.el-submenu__title {
				color: $menu-default-color;
				&:hover {
					color: $menu-active-color;
					background: $menu-active-background;
						i {
						color: $menu-active-color;
					}
				}
			}
			.el-menu {
				background: $menu-default-background;
			}
		}
		.el-menu-item {
			font-weight: bold;
			color: $menu-default-color;
			&:hover,
			&.is-active {
				color: $menu-active-color;
				background: $menu-active-background;
				i {
					color: $menu-active-color;
				}
			}
		}
	}

	// 缩进样式
	.el-menu--collapse.el-menu {
		.el-submenu.is-active {
			.el-submenu__title {
				color: $menu-active-color;
				background: $menu-active-background;
			}
		}
	}	
}
</style>
