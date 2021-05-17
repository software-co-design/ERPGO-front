import request from '@/utils/request'

export function login(data) {
  // return request({
  //   url: '/vue-admin-template/user/login',
  //   method: 'post',
  //   data
  // })
  return request({
    url: '/api/v1/pri/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/v1/pri/user/logout',
    method: 'post'
  })
  // return {
  //   code: 20000,
  //   data: 'success'
  // }
}
