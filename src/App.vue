<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/setup">setup</router-link> |
    <router-link to="/login">login</router-link>
    <p>emitter:{{emitterVal}}</p>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue';

export default defineComponent({
  components: {
  },
  setup() {
    let emitterVal = ref('');
    const { proxy } = getCurrentInstance() as any;
    console.log(proxy.$emitter);
    proxy.$emitter.on('news-notify', (val: string) => {
      emitterVal.value = val;
    });
    return {
      emitterVal
    };
  }
});
</script>


<style lang="scss">
*{
  margin: 0;padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
