import api from '@/apiservices/api'
import axios from '@axios'
import { defineStore } from 'pinia'

export const useUserListStore = defineStore('UserListStore', {
  actions: {
    // 👉 Fetch users data
    // fetchUsers(params) { return api.get('/apps/users/list', { params }) },

    fetchUsers(params) { return api.get('/Allmember', { params }) },

    // // 👉 Add User
    // addUser(userData) {
    //   return new Promise((resolve, reject) => {
    //     axios.post('/apps/users/user', {
    //       user: userData,
    //     }).then(response => resolve(response))
    //       .catch(error => reject(error))
    //   })
    // },

    // 👉 fetch single user
    fetchUser(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/apps/users/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 Delete User
    deleteUser(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`/apps/users/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})

// export const avatarText = value => {
//   if (!value)
//     return ''
//   const nameArray = value.split(' ')
  
//   return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
// }

