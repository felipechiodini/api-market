<template>
  <div class="container p-3 mt-4">
    <button class="dioawjioawjiofw">
      Voltar
    </button>
    <div class="d-flex flex-column py-4">
      <h1>Bem vindo, entre para fazer suas compras</h1>
      <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
        <div>
          <input class="custom-input" id="email" placeholder="E-mail" type="text" v-model="email" />
        </div>
        <div>
          <input class="custom-input" id="senha" placeholder="Senha" type="password" v-model="password" />
        </div>
        <div class="d-flex flex-column">
          <button class="fopjawofijwiod" type="submit" :loading="loading">
            Entrar
          </button>
        </div>
      </form>
      <div class="d-flex flex-column gap-2 mt-4">
        <RouterLink :to="{ name: 'forget-password' }">
          Esqueci minha senha
        </RouterLink>
        <RouterLink :to="{ name: 'sing-up' }">
          Criar Conta
        </RouterLink>
      </div>
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
      email: null,
      password: null,
      loading: false,
      errors: new ErrorBag()
    }
  },
  methods: {
    ...mapActions(useUserStore, ['setToken', 'setUser']),
    onSubmit() {
      this.loading = true
      Api.post('login', { email: this.email, password: this.password })
        .then(({ data }) => {
          this.setToken(data.access_token)
          this.setUser(data.user)
          this.$router.push({ name: 'home' })
        })
        .catch((errors) => this.errors.record(errors.response.data.errors))
        .finally(() => this.loading = false)
    }
  }
}

</script>

<style scoped>

.dioawjioawjiofw {
  background-color: black;
  color: #ccc;
  padding: 10px;
  font-size: 12px;
  border: none;
  border-radius: 10px;
}

.custom-input {
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 0 10px;
}

.fopjawofijwiod {
  background-color: black;
  color: #ccc;
  padding: 10px;
  border: none;
  border-radius: 10px;
}

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