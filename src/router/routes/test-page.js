import { ROOT_PATH } from '../config'
import RouterView from '@/components/RouterView'
const BASIC_PATH = ROOT_PATH + '/test-page'

export default {
	path: BASIC_PATH,
	redirect: BASIC_PATH + '/index',
	component: RouterView,
	meta: { title: '测试页面', noChild: true },
	children: [
		{
			path: BASIC_PATH + '/index',
			component: () => import('@/views/TestPage'),
		},
		{
			path: BASIC_PATH + '/detail',
			component: () => import('@/views/TestPage/Detail'),
			meta: { title: '测试页面-详情' },
		}
	]
}