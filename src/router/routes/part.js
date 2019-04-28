import RouterView from '@/components/RouterView'
import { ROOT_PATH } from '../config'

const BASIC_PATH = ROOT_PATH + '/part-mgmt'
const PART_PATH = BASIC_PATH + '/part'
const TYPE_PATH = BASIC_PATH + '/type'

export default {
	name: '零件管理',
	path: BASIC_PATH,
	redirect: PART_PATH,
	component: RouterView,
	meta: { title: '零件管理' },
	children: [
		{
			path: PART_PATH,
			redirect: PART_PATH + '/list',
			component: RouterView,
			meta: { title: '零件列表' },
			children: [
				{
					path: PART_PATH + '/list',
					component: () => import('@/views/Part/List')
				},
				{
					path: PART_PATH + '/add',
					component: () => import('@/views/Part/List/Update'),
					meta: { title: '新增零件' },
				},
				{
					path: PART_PATH + '/:partNumber/edit',
					component: () => import('@/views/Part/List/Update'),
					meta: { title: '修改零件' },
				},
				{
					path: PART_PATH + '/:partNumber/detail',
					redirect: PART_PATH + '/:partNumber/detail/index',
					component: RouterView,
					meta: { title: '零件详情' },
					children: [
						{
							path: PART_PATH + '/:partNumber/detail/index',
							component: () => import('@/views/Part/List/Detail'),
						},
						{
							path: PART_PATH + '/:partNumber/detail/preveiw',
							component: () => import('@/views/Part/List/Detail/Preveiw'),
							meta: { title: '零件详情预览' }
						}
					]
				},
			]
		},
		{
			path: TYPE_PATH,
			redirect: TYPE_PATH + '/index',
			component: RouterView,
			meta: { title: '零件类型' },
			children: [
				{
					path: TYPE_PATH + '/index',
					component: () => import('@/views/Part/Type'),
				},
				{
					path: TYPE_PATH + '/detail',
					component: () => import('@/views/Part/Type/Detail'),
					meta: { title: '零件类型详情' },
				}
			]
		},
	]
}