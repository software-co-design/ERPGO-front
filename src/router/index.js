import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '我的首页', icon: 'dashboard' }
    }]
  },
  // 销售管理
  {
    path: '/salesOrder',
    component: Layout,
    redirect: '/salesOrder/orders',
    name: 'SalesOrder',
    meta: { title: '销售管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '销售订单', icon: 'el-icon-goods' }
      },
      {
        path: 'shipping',
        name: 'Shipping',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '销售统计', icon: 'el-icon-goods' }
      },
      {
        path: 'clients',
        name: 'Clients',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '客户信息', icon: 'el-icon-goods' }
      }
    ]
  },
  // 入库管理
  {
    path: '/storageIn',
    component: Layout,
    redirect: '/storageIn/orders',
    name: 'StorageIn',
    meta: { title: '入库管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '入库订单', icon: 'el-icon-goods' }
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '入库统计', icon: 'el-icon-goods' }
      }
    ]
  },
  // 出库管理
  {
    path: '/storageOut',
    component: Layout,
    redirect: '/storageOut/orders',
    name: 'StorageOut',
    meta: { title: '出库管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '出库订单', icon: 'el-icon-goods' }
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '出库统计', icon: 'el-icon-goods' }
      }
    ]
  },
  // 财务管理
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/orders',
    name: 'Finance',
    meta: { title: '财务管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '销售对账', icon: 'el-icon-goods' }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '历史订单', icon: 'el-icon-goods' }
      },
      {
        path: 'records',
        name: 'Records',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '转账记录', icon: 'el-icon-goods' }
      }
    ]
  },
  // 库存管理
  {
    path: '/stock',
    component: Layout,
    redirect: '/stock/info',
    name: 'Stock',
    meta: { title: '库存管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'info',
        name: 'Info',
        component: () => import('@/views/product/index'),
        meta: { title: '库存信息', icon: 'el-icon-goods' }
      },
      {
        path: 'monitor',
        name: 'Monitor',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '库存预警', icon: 'el-icon-goods' }
      }
    ]
  },
  // 系统管理
  {
    path: '/system',
    component: Layout,
    alwaysShow: true,
    redirect: '/system/info',
    name: 'System',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/salesOrder/index'),
        meta: { title: '用户管理', icon: 'el-icon-goods' }
      }

    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
