<template>
  <h1>Trackers</h1>
  <div class="trackers">
    <TrackerCard
      v-for="tracker in trackers"
      :key="tracker.id"
      :tracker="tracker"
    />
  </div>
</template>

<script>
import TrackerCard from '@/components/TrackerCard.vue'
import TrackerService from '@/services/TrackerService.js'

export default {
  name: 'TrackerList',
  components: {
    TrackerCard,
  },
  data() {
    return {
      trackers: null,
    }
  },
  created() {
    TrackerService.getTrackers()
      .then((response) => {
        this.trackers = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.trackers {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
