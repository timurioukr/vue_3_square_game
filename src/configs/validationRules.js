import { required, minLength, email } from '@vuelidate/validators'

export const loginForm = () => ({
  body: {
    password: { required, minLength: minLength(6) },
    email: { required, email },
  }
})