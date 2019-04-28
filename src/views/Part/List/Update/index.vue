<template>
	<div>
		<h1>{{title}}</h1>
		<h3 v-if="partNumber">零件编号: {{partNumber}}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			partNumber: '',
			title: '新增零件'
		}
	},
	created() {
		if (this.$route.params.partNumber) {
			this.partNumber = this.$route.params.partNumber
			this.title = '修改零件'
		}
	},
}
</script>
