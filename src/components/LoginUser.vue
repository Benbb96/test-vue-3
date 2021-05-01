<template>
  <form @submit.prevent="login">
    <label for="username"> Nom d'utilisateur : </label>
    <input v-model="username" name="username" value />
    <label for="password"> Mot de passe : </label>
    <input v-model="password" type="password" name value />
    <p v-if="status === 401" class="error">
      Informations de connexion invalides !
    </p>
    <button type="submit" name="button">Se connecter</button>
  </form>
</template>

<script>
export default {
  name: 'LoginUser',
  data() {
    return {
      username: '',
      password: '',
      status: null,
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'TrackerList' })
        })
        .catch((err) => {
          this.status = err.response.status
        })
    },
  },
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
