<template>
  <div>
    <form @submit.prevent="register">
      <label for="username"> Nom d'utilisateur : </label>
      <input v-model="username" type="text" name="username" value />
      <label for="email"> Email : </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Mot de passe : </label>
      <input v-model="password" type="password" name value />
      <p v-if="status === 400">Merci d'entrer des informations différentes.</p>

      <button type="submit" name="button">S'inscrire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterUser',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      status: null,
    }
  },
  methods: {
    register() {
      this.$store
        .dispatch('register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch((err) => {
          this.status = err.response.status
        })
    },
  },
}
</script>
