import request from '@/utils/request'

/**
 *获取产品信息分页列表
 *
 * @export
 * @param {*} data
 * @return {*} 
 */
export function listProudcts(data) {
  return request({
    url: '/api/v1/pri/product/list',
    method: 'post',
    data
  })
}

/**
 *添加产品信息
 *
 * @export
 * @param {*} data
 * @return {*} 
 */
export function addProduct(data) {
  return request({
    url: '/api/v1/pri/product/add',
    method: 'post',
    data
  })
}

