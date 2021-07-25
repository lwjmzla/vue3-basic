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
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, ComputedRef, onMounted,onUnmounted, onUpdated, onRenderTracked, onRenderTriggered,watch} from 'vue';
interface DataProps {
  count: number;
  double: number;
  x: number;
  y: number;
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
    
    // const x = ref(0)
    // const y = ref(0)
    const updateMouse = (e:MouseEvent) => {
      data.x = e.pageX
      data.y = e.pageY
    }
    onMounted(() => {
      document.addEventListener('click',updateMouse)
    })
    onUnmounted(() => {
      document.removeEventListener('click',updateMouse)
    })
    let data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => { data.count++ },
      x: 0,
      y: 0
    })
    let refData = toRefs(data)
    //console.log(refData)
    // !可以watch数组，不可以直接箭头data.count，可以监听函数的值
    watch([greetings,() => data.count,refData.double],(newVal,oldVal) => {
      console.log(newVal,oldVal)
      //document.title = newVal
    })
    return {
      ...refData,
      greetings,
      updateGreetings
    }
  }
}
</script>
