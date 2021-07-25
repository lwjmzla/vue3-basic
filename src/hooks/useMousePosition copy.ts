import { reactive, toRefs, onMounted,onUnmounted} from 'vue';

function useMousePosition() {
  interface DataProps {
    x: number;
    y: number;
  }
  const data: DataProps = reactive({
    x: 0,
    y: 0
  });
  const refData = toRefs(data);
  const updateMouse = (e:MouseEvent) => {
    data.x = e.pageX;
    data.y = e.pageY;
  };
  onMounted(() => {
    console.log('onMounted2');
    document.addEventListener('click',updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener('click',updateMouse);
  });
  return {
    ...refData
  };
}
export default useMousePosition;