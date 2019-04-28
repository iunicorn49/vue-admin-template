<template>
	<div>
		<h1>零件列表</h1>
		<div style="width: 400px">
			<el-input size="small" v-model="partNumber" placeholder="零件编号"></el-input>
			<el-button size="small" plain @click="add">新增</el-button>
			<el-button size="small" plain @click="edit">修改</el-button>
			<el-button size="small" plain @click="detail">详情</el-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			partNumber: ''
		}
	},
	methods: {
		add() {
			this.$router.push('/admin/part-mgmt/part/add')
		},
		edit() {
			if (!this.partNumber) return this.$message.error('请输入零件编号')
			this.$router.push(`/admin/part-mgmt/part/${this.partNumber}/edit`)
		},
		detail() {
			if (!this.partNumber) return this.$message.error('请输入零件编号')
			this.$router.push(`/admin/part-mgmt/part/${this.partNumber}/detail`)
		}
	}
}
</script>
