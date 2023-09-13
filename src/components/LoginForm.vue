<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { loginForm as rules } from '@/configs/validationRules'
import { useRouter } from 'vue-router'
//
const router = useRouter()
// Data
const body = reactive({
  email: '',
  password: ''
})
const isShowPass = ref(false)
const isLoad = ref(false)
//Methods
const login = () => {
  if ($v.value.$invalid) return $v.value.$touch()
  isLoad.value = true
  setTimeout(() => {
    isLoad.value = false
    router.push({ name: 'game' })
  }, 3000)
}
// Validation
const $v = useVuelidate(rules(), { body })
</script>

<template>
  <v-card variant="tonal" width="400" class="pa-5 transition radius-12">
    <v-card-title primary-title class="text-center">Login</v-card-title>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field 
          v-model="body.email" 
          label="Email" 
          placeholder="Enter email" 
          solo
          class="mb-4"
          :error-messages="$v.body.email.$errors.map(item => item.$message)"
          @blur="$v.body.email.$touch()"></v-text-field>
        <v-text-field 
          v-model="body.password" 
          label="Password" placeholder="Enter email" 
          solo
          :type="isShowPass ? 'text' : 'password'"
          :append-inner-icon="isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
          :error-messages="$v.body.password.$errors.map(item => item.$message)"
          @blur="$v.body.password.$touch()"
          @click:append-inner="isShowPass = !isShowPass"></v-text-field>
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn color="deep-purple" :loading="isLoad" class="btn-custom" @click="login">Login</v-btn>
    </div>
  </v-card>
</template>