import { ref } from 'vue';
import axios from 'axios';

const obj:Record<string, unknown> = { a: 'lwj' };
console.log(obj);

function useUrlLoader<T>(url: string) {
  const result = ref<T | Record<string, any>>({});
  const loading = ref(true);
  const loaded = ref(false);
  const error = ref(null);

  axios.get(url).then((rawData) => {
    loaded.value = true;
    result.value = rawData.data;
  }).catch((e) => {
    error.value = e;
  }).finally(() => {
    loading.value = false;
  });

  return {
    result,
    loading,
    loaded,
    error
  };
}

export default useUrlLoader;