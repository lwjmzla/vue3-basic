<template>
  <div class="home">
    <el-input-number
      v-model="price"
      :controls="false"
      :min="0"
      :precision="2"
      @change="handleChange"
    ></el-input-number>
    <HelloWorld name="lwj" msg="Welcome to Your Vue.js + TypeScript App">
      <div>{{price}}</div>
    </HelloWorld>
    <Test></Test>
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
import { defineComponent, ref, computed, reactive, toRefs, ComputedRef, onMounted, onUpdated, onRenderTracked, onRenderTriggered, watch } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Test from '@/components/Test.vue';
interface DataProps {
  count: number;
  double: number;
  greetings: string;
  increase: () => void
}
export default defineComponent({
  components: {
    HelloWorld,
    Test
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
      price: '',
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => { data.count++; },
      greetings: '',
      updateGreetings: () => { data.greetings += 'hello'; },
      // handleChange(val: number):void { // !用这种方式竟然会影响double类型问题，好奇怪
      //   console.log(val);
      // }
      handleChange: (val: number) =>  {
        console.log(val);
      }
    });
    let refData = toRefs(data);
    //console.log(refData)
    watch(refData.greetings, (newVal, oldVal) => {
      console.log('newVal:', newVal);
      console.log('oldVal:', oldVal);
      document.title = newVal;
    });
    return {
      ...refData,
      // greetings,
      // updateGreetings
    };
  }
});
</script>
