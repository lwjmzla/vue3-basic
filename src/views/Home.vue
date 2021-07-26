<template>
  <div class="home">
    <HelloWorld name="lwj" msg="Welcome to Your Vue.js + TypeScript App">
      <div>1111</div>
    </HelloWorld>
    <img alt="Vue logo" src="../assets/logo.png">
    {{count}}
    <button @click="increase">++</button>
    {{double}}
    <div>
      <button @click="updateGreetings">updateGreetings</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, ComputedRef, onMounted, onUpdated, onRenderTracked, onRenderTriggered, watch } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
interface DataProps {
  count: number;
  double: number;
  greetings: string;
  increase: () => void
}
export default {
  components: {
    HelloWorld,
  },
  setup() {
    // const count = ref(0)
    // let double = computed(() => count.value * 2)
    // const increase = () => {
    //   count.value++
    // }
    // return {
    //   count,
    //   increase,
    //   double
    // }
    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    // onRenderTriggered((ev) => { // !data更新触发
    //   console.log('onRenderTriggered')
    //   console.log(ev)
    // })
    // onRenderTracked((ev) => {
    //   console.log('onRenderTracked')
    //   console.log(ev)
    // })
    const greetings = ref('');
    const updateGreetings = () => {
      greetings.value += 'hello';
    };
    

    let data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => { data.count++; },
      greetings: '',
      updateGreetings: () => { data.greetings += 'hello'; },
    });
    let refData = toRefs(data);
    //console.log(refData)
    watch(refData.greetings, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      document.title = newVal;
    });
    return {
      ...refData,
      // greetings,
      // updateGreetings
    };
  }
};
</script>
