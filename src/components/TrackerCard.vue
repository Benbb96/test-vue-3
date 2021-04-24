<template>
  <router-link 
    class="event-link"
    :to="{ name: 'TrackerDetail', params: { id: tracker.id } }"
  >
    <div
      class="tracker-card"
      :style="{
        'background-color': tracker.color,
        color: tracker.contrast_color,
      }"
    >
      <h4><i :class="'fas fa-' + tracker.icone"></i> {{ tracker.nom }}</h4>
      <span>Créé le {{ tracker.date_creation }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    tracker: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.tracker-card {
  flex: 1;
  padding: 20px;
  margin: 30px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.tracker-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  text-decoration: none;
}
</style>
