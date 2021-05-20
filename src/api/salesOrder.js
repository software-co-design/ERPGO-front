import request from '@/utils/request'

export function listSalesOrder(data) {
  return request({
    url: '/api/v1/pri/sales_order/list',
    method: 'post',
    data
  })
}
/**
 *获取销售订单id=saleId的所有产品信息
 *
 * @export
 * @param {*} data
 * @return {*} 
 */
export function getSOProducts(saleId) {
  return request({
    url: '/api/v1/pri/sales_order/details',
    method: 'post',
    params: {
      saleId: saleId
    }
  })
}
/**
 *销售订单id=salesOrderId 审核通过
 *
 * @export
 * @param {*} salesOrderId
 * @return {*} 
 */
export function updateSOStatusToSuccess(salesOrderId) {
  return request({
    url: '/api/v1/pri/sales_order/check_success',
    method: 'post',
    params: {
      salesOrderId: salesOrderId
    }
  })
}

/**
 *销售订单审核不通过 ->审核未通过
 *
 * @export
 * @param {*} salesOrderId
 * @return {*} 
 */
export function updateSOStatusToFail(salesOrderId) {
  return request({
    url: '/api/v1/pri/sales_order/check_fail',
    method: 'post',
    params: {
      salesOrderId: salesOrderId
    }
  })
}

/**
 *删除订单信息
 *
 * @export
 * @param {*} salesOrderId
 * @return {*} 
 */
export function delSalesOrder(salesOrderId) {
  return request({
    url: '/api/v1/pri/sales_order/del',
    method: 'post',
    params: {
      salesOrderId: salesOrderId
    }
  })
}

