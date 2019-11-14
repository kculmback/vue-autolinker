<template>
  <div id="app">
    <p>
      For more information about configuration, check out
      <a href="https://github.com/gregjacobs/Autolinker.js">Autolinker.js</a>.
    </p>
    <p>
      See vue-autolinker documentation
      <a href="https://github.com/kculmback/vue-autolinker">here</a>.
    </p>
    <div class="examples">
      <p v-autolinker="exampleOne"></p>
      <p v-autolinker:[options]="exampleTwo"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      exampleOne:
        'Text with a link (https://github.com/gregjacobs/Autolinker.js).',
      exampleTwo:
        'Text with a link (vuejs.com), a mention (@vuejs), and a hashtag (#vue).',
      options: {
        mention: 'twitter',
        hashtag: 'twitter',
      },
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.examples {
  display: inline-block;
  margin: 2rem auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
}
</style>
