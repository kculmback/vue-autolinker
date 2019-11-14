# vue-autolinker

A simple vue-directive wrapper around [Autolinker.js](https://github.com/gregjacobs/Autolinker.js).

## Install

```
npm install autolinker --save
```

## Setup

In your entry file:

``` js
import Vue from 'vue'
import autolinker, { AUTOLINKER_NAME } from 'vue-autolinker'

// AUTOLINKER_NAME is optional. It is a string: 'autolinker'.
Vue.directive(AUTOLINKER_NAME, autolinker)
```

## Usage

``` js
<template>
  <div id="app">
      <p v-autolinker="exampleOne"></p>
      <p v-autolinker:[options]="exampleTwo"></p>
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
```

### Options
You can pass options to Autolinker.js using a Vue directive argument. All options are automatically passed to Autoprefixer.js. You can available options [here](https://github.com/gregjacobs/Autolinker.js#options).
