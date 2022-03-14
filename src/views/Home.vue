<template>
  <div class="home" ref="homeRef">
    {{data}}
    <div>{{m3}}</div>

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
    <div ref="testRef">
      <Test></Test>
    </div>
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
import { defineComponent, ref, shallowRef, computed, reactive, shallowReactive, toRaw, markRaw,provide,getCurrentInstance
         toRefs, ComputedRef, onMounted, onUpdated, onRenderTracked, onRenderTriggered, watch } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Test from '@/components/Test.vue';
import useClickOutside from '../hooks/useClickOutside';
import { createHomeProvider } from './homeProvider';
interface DataProps {
  price: string | number;
  count: number;
  double: number;
  greetings: string;
  increase: () => void;
  handleChange: (val: number) => void;
  updateGreetings: () => void;
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
      console.log(testRef.value);
      const { proxy } = getCurrentInstance() as any;
      proxy.$emitter.emit('news-notify', 'home');
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
    // const greetings = ref('');
    // const updateGreetings = () => {
    //   greetings.value += 'hello';
    // };
    
    const testRef = ref<null | HTMLElement>(null); //!名称跟template的一致
    const isClickOutside  = useClickOutside(testRef);
    watch(isClickOutside, (newVal, oldVal) => {
      console.log(newVal);
    });

    let data: any = reactive({
      price: 0,
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
      },
    });
    const m3 = reactive({
      name: 'lwj',
      age: 18,
      car: {
        name: 'benz',
        color: 'red'
      }
    });
    console.log(m3);
    const toRawM3 = toRaw(m3);
    console.log(toRawM3);
    let refData = toRefs(data);
    console.log('provide--------------------');
    const { greetings, count } = refData;
    provide('lwj', greetings);
    // provide('obj', {
    //   greetings,
    //   count
    // });
    createHomeProvider({
      greetings,
      count
    });

    //console.log(refData);
    watch(refData.greetings, (newVal, oldVal) => {
      console.log('newVal:', newVal);
      console.log('oldVal:', oldVal);
      //document.title = newVal;
    });
    watch(data, (val) => {
      console.log(val);
    });
    watch(() => data.greetings, (val) => {
      console.log(val);
    });
    setTimeout(() => {
      //data.greetings = '你好';
    }, 1000);
    return {
      testRef,
      ...refData,
      data,
      m3
      // greetings,
      // updateGreetings
    };
  }
});
</script>
