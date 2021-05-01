<template>
  <div v-if="tracker">
    <h1>
      <i :class="'fa fa-' + tracker.icone"></i>
      {{ tracker.nom }}
    </h1>
    <p>{{ tracker.date_creation }}</p>
    <p>
      Total tracks : <strong>{{ tracker.tracks.length }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      tracker: null,
    }
  },
  created() {
    this.$store
      .dispatch('getTracker', this.id)
      .then((response) => {
        this.tracker = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
