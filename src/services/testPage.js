import request from '../utils/request';

// export function badges() {
//   return request(`https://cdn.xgqfrms.xyz/json/badges.json`);
// }

export function shoppingWZ() {
  return { data: ['天猫', '京东', '苏宁'] };
}
// export function shoppingWZ2() {
//   return request(`/mock/shopping`);
// }

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
