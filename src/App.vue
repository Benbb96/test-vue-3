<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded :to="{ name: 'Home' }">Accueil</v-btn>
      <v-btn v-if="user" text rounded :to="{ name: 'TrackerList' }">
        Trackers
      </v-btn>
      <v-btn text rounded :to="{ name: 'About' }">A propos</v-btn>
      <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
    //
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.log(error.response)
        if (error.response.status === 401) {
          this.$router.push('/')
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
}
</script>
