<template>
  <div class="home">
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
import { ref, computed, reactive, toRefs, ComputedRef, onMounted, onUpdated, onRenderTracked, onRenderTriggered,watch} from 'vue';
interface DataProps {
  count: number;
  double: number;
  greetings: string;
  increase: () => void
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
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    // onRenderTriggered((ev) => { // !data更新触发
    //   console.log('onRenderTriggered')
    //   console.log(ev)
    // })
    // onRenderTracked((ev) => {
    //   console.log('onRenderTracked')
    //   console.log(ev)
    // })
    const greetings = ref('')
    const updateGreetings = () => {
      greetings.value += 'hello'
    }
    

    let data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => { data.count++ },
      greetings: '',
      updateGreetings: () => { data.greetings += 'hello' },
    })
    let refData = toRefs(data)
    //console.log(refData)
    watch(refData.greetings,(newVal,oldVal) => {
      console.log(newVal,oldVal)
      document.title = newVal
    })
    return {
      ...refData,
      // greetings,
      // updateGreetings
    }
  }
}
</script>
