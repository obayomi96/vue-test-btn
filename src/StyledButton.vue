<template>
  <div class="container">
    <button :style="customStyle">
      {{value || 'my button'}}
    </button>
  </div>
</template>

<script>
export default {
  name: "StyledButton",
  props: ["value", "w", "h", "bg", "c"],
  data() {
    return {
      customStyle: {
        width: this.w || '100px',
        height: this.h || '40px',
        background: this.bg || 'blue',
        color: this.c || 'white',
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: auto;
    background: #ddd;
  }
</style>
