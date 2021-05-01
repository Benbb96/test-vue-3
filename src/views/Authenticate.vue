<template>
  <div>
    <component :is="loginOrRegister" />
    <a v-show="isNewUser" class="auth-link" @click="toggleComponent">
      Tu n'as pas de compte ? S'inscrire
    </a>
    <a v-show="!isNewUser" class="auth-link" @click="toggleComponent">
      Tu as déjà un compte ? Se connecter
    </a>
  </div>
</template>

<script>
import RegisterUser from '../components/RegisterUser'
import LoginUser from '../components/LoginUser'
export default {
  components: { RegisterUser, LoginUser },
  computed: {
    isNewUser() {
      return this.$store.state.isNewUser
    },
    loginOrRegister() {
      return this.isNewUser ? 'LoginUser' : 'RegisterUser'
    },
  },
  methods: {
    toggleComponent() {
      this.$store.dispatch('isNewUser', !this.isNewUser)
    },
  },
}
</script>

<style scoped>
.auth-link {
  font-size: 0.8em;
  text-decoration: underline;
  color: #2c3e50;
  cursor: pointer;
}
</style>
