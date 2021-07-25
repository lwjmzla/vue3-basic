import { ref } from 'vue';
import axios from 'axios';

function useUrlLoader<T>(url: string) {
  const result = ref<T | null>(null);
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