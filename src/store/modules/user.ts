import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { loginFormData, loginResponseData } from '@/api/user/type'

const userStore = defineStore('User', {
  state: () => {
    return {}
  },
  actions: {
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code === 200) {
        localStorage.setItem('TOKEN', result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default userStore
