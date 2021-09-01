const app = Vue.createApp( {
  data() {
    return {
      courseGoal: 'Complete the Vue3 course and master Vue3!',
      vueLink: 'https://vuejs.org',
    };
  },
});

app.mount('#user-goal');