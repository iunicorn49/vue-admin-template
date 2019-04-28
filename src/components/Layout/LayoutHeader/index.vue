<template>
	<header>
		<div class="title">XXX管理平台</div>
	</header>
</template>

<script>
export default {
	props: {
		sideHide: { type: Boolean, default: false }
	},
	methods: {
		handleClick() {
			this.$emit('sideHideChange')
		}
	}
}
</script>


<style lang="scss" scoped>
header {
	width: 100%;
	background: #002140;
	color: #fff;
	height: 64px;
	line-height: 64px;
	position: fixed;
	top: 0;
	right: 0;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
	box-sizing: border-box;
	padding: 0 20px;
	.title {
		font-size: 20px;
		font-weight: bold;
	}
}
</style>
