import request from '@/utils/request'

export function listSalesOrder(data) {
  return request({
    url: '/api/v1/pri/sales_order/list',
    method: 'post',
    data
  })
}
