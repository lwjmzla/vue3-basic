import { ref, Ref, onMounted, onUnmounted } from "vue";

function useClickOutside(eleRef: Ref<null | HTMLElement>){ // : Ref<boolean> 
  const isClickOutside = ref(false);

  const handler = (e: Event) => {

    if (eleRef.value) {
      if (eleRef.value.contains(e.target as HTMLElement)) { // !通过这种方式，实现点击空白处执行弹窗隐藏
        console.log('点击了eleRef');
        isClickOutside.value = false;
      } else {
        console.log('点击了空白处');
        isClickOutside.value = true;
      }
    }
  };

  onMounted(() => {
    document.addEventListener('click', handler);
  });
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });

  return isClickOutside;
}
export default useClickOutside;