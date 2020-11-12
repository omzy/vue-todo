<template>
  <div class="flash" v-bind:class="flashData.status" v-show="flashData.message">{{ flashData.message }}</div>
</template>

<script>
export default {
  props: {
    flashData: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .flash {
    position: fixed;
    top: 0;
    padding: 15px 100px;
    color: white;
    text-align: center;
  }

  .flash.success {
    background-color: rgba(0, 128, 0, 0.7);
  }

  .flash.error {
    background-color: rgba(255, 0 ,0, 0.7);
  }
</style>
