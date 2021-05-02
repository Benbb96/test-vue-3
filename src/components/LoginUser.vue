<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="username"
          label="Nom d'utilisateur"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Mot de passe"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <p v-if="status === 401" class="error">
      Informations de connexion invalides !
    </p>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info">Se connecter</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LoginUser',
  data() {
    return {
      username: '',
      password: '',
      status: null,
      showPassword: false,
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
