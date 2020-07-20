import StyledButton from "./StyledButton.vue";

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-test-btn', StyledButton);
  }
};
