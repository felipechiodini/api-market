<template>
  <div class="container">
    <div class="d-flex flex-column py-4">
      <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
        <div>
          <label for="name">Nome</label>
          <InputText id="name" type="text" v-model="name" />
          <small class="text-danger" v-if="errors.has('name')" severity="error">{{ errors.get('name') }}</small>
        </div>
        <div>
          <label for="email">Email</label>
          <InputText id="email" type="text" v-model="email" />
          <small class="text-danger" v-if="errors.has('email')" severity="error">{{ errors.get('email') }}</small>
        </div>
        <div>
          <label for="password">Senha</label>
          <InputText id="password" type="password" v-model="password" />
          <small class="text-danger" v-if="errors.has('password')" severity="error">{{ errors.get('password') }}</small>
        </div>
        <div>
          <label for="confirmPassword">Confirmar Senha</label>
          <InputText id="confirmPassword" type="password" v-model="confirmPassword" />
          <small class="text-danger" v-if="errors.has('confirmPassword')" severity="error">{{ errors.get('confirmPassword') }}</small>
        </div>
        <div class="d-flex flex-column">
          <Button type="submit" :loading="loading">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ErrorBag } from '@/js/Error'
import Api from '@/js/Api'

export default {
  components: {
    FloatLabel,
    InputText,
    Button,
    Message
  },
  data: () => {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      submitted: false,
      errors: new ErrorBag()
    }
  },
  methods: {
    ...mapActions(useUserStore, ['setToken', 'setUser']),
    onSubmit() {
      this.loading = true
      Api.post('register', { name: this.name, email: this.email, password: this.password, password_confirmation: this.confirmPassword })
        .then(({ data }) => {
          this.setToken(data.access_token)
          this.$router.push({ name: 'home' })
        })
        .catch((errors) => this.errors.record(errors.response.data.errors))
        .finally(() => this.loading = false)
    }
  }
}

</script>

<style scoped>

.fpwakfpowafpowjnaofwa {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.diuwahiuwafiuwa {
  width: 50%;
  margin: auto;
  object-fit: cover;
}

</style>

