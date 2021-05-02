<template>
  <template v-if="!this.$store.state.user">
    <div>
      Pour utiliser l'appli, tu dois d'abord te
      <router-link to="authenticate" @click="isNew(false)">
        Connecter
      </router-link>
      ou te
      <router-link to="authenticate" @click="isNew(true)">
        Créer un compte
      </router-link>
    </div>
  </template>
  <template v-else>
    <p>Salut {{ user.username }}, tu es bien connecté sur l'application.</p>
    <button type="button" class="logoutButton" @click="logout">
      Se déconnecter
    </button>
  </template>
  <hello-world />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    isNew(isNewUser) {
      this.$store.dispatch('isNewUser', !isNewUser)
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>
