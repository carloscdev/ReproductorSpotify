<template>
  <div class="notificationC mb-5">
    <div class="notification" :class="status ? 'is-danger' : 'is-success'">
      <slot name="body">Algo salió mal ... !!!</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Notifications",
  props: {
    status,
  },
};
</script>
