<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{count}}
    <button @click="increase">++</button>
    {{double}}
    <div>
      <button @click="updateGreetings">updateGreetings</button>
    </div>
    <div>x:{{x}},y:{{y}}</div>
    <div v-if="loading">loading......</div>
    <img v-if="loaded" :src="result.message"/>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, ComputedRef, onMounted, onUnmounted, onUpdated, onRenderTracked, onRenderTriggered, watch } from 'vue';
import useMousePosition from '@/hooks/useMousePosition';
import useUrlLoader from '@/hooks/useUrlLoader';
interface DataProps {
  count: number;
  double: number;
  increase: () => void
}
interface DogResult {
  message: string;
  status: string;
}
export default {
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
      console.log('onMounted1');
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
    
    const { x, y } = useMousePosition();

    const { result, loading, loaded } = useUrlLoader<DogResult>('https://dog.ceo/api/breeds/image/random');
    watch(result, (newVal, oldVal) => {
      console.log(result.value?.message);
      console.log(newVal?.message);
    });

    let data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => { data.count++; }
    });
    let refData = toRefs(data);
    //console.log(refData)
    // !可以watch数组，不可以直接箭头data.count，可以监听函数的值
    watch([greetings, () => data.count, refData.double], (newVal, oldVal) => {
      console.log(newVal, oldVal);
      //document.title = newVal
    });
    return {
      ...refData,
      greetings,
      updateGreetings,
      x,
      y,
      result, loading, loaded
    };
  }
};
</script>
