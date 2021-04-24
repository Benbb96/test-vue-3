<template>
  <div class="tracker-card">
    <span>@{{ tracker.time }} on {{ tracker.date }}</span>
    <h4>{{ tracker.title }}</h4>
  </div>
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
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.tracker-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
