<template>
  <div class="container p-4 mt-3">
    <button class="dioawjioawjiofw" @click="$router.go(-1)">
      Voltar
    </button>
    <div class="d-flex flex-column my-3">
      <h1>Olá, crie sua conta para começar. <span>É grátis!</span></h1>
      <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
        <div>
          <input class="custom-input" placeholder="Nome" id="name" type="text" v-model="name" />
          <small class="text-danger" v-if="errors.has('name')" severity="error">{{ errors.get('name') }}</small>
        </div>
        <div>
          <input class="custom-input" placeholder="E-mail" id="email" type="text" v-model="email" />
          <small class="text-danger" v-if="errors.has('email')" severity="error">{{ errors.get('email') }}</small>
        </div>
        <div>
          <input class="custom-input" placeholder="Celular" id="cellphone" type="text" v-model="cellphone" />
          <small class="text-danger" v-if="errors.has('cellphone')" severity="error">{{ errors.get('cellphone') }}</small>
        </div>
        <div>
          <input class="custom-input" placeholder="Senha" id="password" type="password" v-model="password" />
          <small class="text-danger" v-if="errors.has('password')" severity="error">{{ errors.get('password') }}</small>
        </div>
        <div class="d-flex flex-column">
          <button class="fopjawofijwiod" type="submit" :loading="loading">
            Cadastrar
          </button>
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
      name: null,
      email: null,
      cellphone: null,
      password: null,
      loading: false,
      submitted: false,
      errors: new ErrorBag()
    }
  },
  methods: {
    ...mapActions(useUserStore, ['setToken', 'setUser']),
    onSubmit() {
      this.loading = true
      Api.post('register', { name: this.name, email: this.email, password: this.password, cellphone: this.cellphone })
        .then(({ data }) => {
          this.setUser(data.user)
          this.setToken(data.token)
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

.fopjawofijwiod {
  background-color: black;
  color: #ccc;
  padding: 10px;
  border: none;
  border-radius: 10px;
}

.dioawjioawjiofw {
  background-color: black;
  color: #ccc;
  padding: 10px;
  font-size: 12px;
  border: none;
  border-radius: 10px;
}


</style>

