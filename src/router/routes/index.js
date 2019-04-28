import Layout from '@/components/Layout'
import { ROOT_PATH } from '../config'

import dashboard from './dashboard'
import part from './part'
import testPage from './test-page'

export default {
	path: ROOT_PATH,
	component: Layout,
	children: [
		dashboard, // 仪表盘
		part, // 零件
		testPage, // 测试页面
	]
}