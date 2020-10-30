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
    padding: 15px;
    margin-bottom: 25px;
    color: white;
    width: 423px;
  }

  .flash.success {
    background-color: green;
  }

  .flash.error {
    background-color: red;
  }
</style>
