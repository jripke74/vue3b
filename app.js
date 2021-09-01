const app = Vue.createApp( {
  data() {
    return {
      courseGoalA: 'Complete the Vue3 course!',
      courseGoalB: 'Master Vue3 and build amazing apps!',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
