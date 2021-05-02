<template>
  <v-app>
    <v-main>
      <div id="nav">
        <router-link :to="{ name: 'Home' }">Accueil</router-link> |
        <template v-if="user">
          <router-link :to="{ name: 'TrackerList' }">Trackers</router-link> |
        </template>
        <router-link :to="{ name: 'About' }">A propos</router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
