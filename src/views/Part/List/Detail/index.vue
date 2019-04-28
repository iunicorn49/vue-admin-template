<template>
	<div>
		<h1>零件详情</h1>
		<h3>零件编号: {{$route.params.partNumber}}</h3>
		<el-button @click="preveiw">预览</el-button>
	</div>
</template>

<script>
export default {
	methods: {
		preveiw() {
			this.$router.push(`/admin/part-mgmt/part/${this.$route.params.partNumber}/detail/preveiw`)
		}
	}
}
</script>
