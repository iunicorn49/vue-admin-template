<template>
	<div>
		<h1>零件详情预览</h1>
		<h3>零件编号: {{partNumber}}</h3>
	</div>
</template>

<script>
export default {
	computed: {
		partNumber() {
			return this.$route.params.partNumber
		}
	},
	created() {
		// console.log(this.$route)
	}
}
</script>
