import { ROOT_PATH } from '../config'
const BASIC_PATH = ROOT_PATH + '/dashboard'

export default {
	path: BASIC_PATH,
	component: () => import('@/views/Dashboard'),
	meta: { title: '首页', noChild: true }
}