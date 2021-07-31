import { ref, onMounted } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useLoading() {
  const startLoadingTime = ref(0);
  const loadingStatus = ref({
    loading: false,
    tasksTotal: -1,
    tasksDone: -1,
    taskDetails: [] as Array<string>,
  });
  const init = () => {
    loadingStatus.value = {
      loading: false,
      tasksTotal: -1,
      tasksDone: -1,
      taskDetails: [],
    };
    startLoadingTime.value = 0;
  };
  const startLoading = (tasksTotal: number, taskDetails: Array<string>) => {
    startLoadingTime.value = new Date().getTime();
    loadingStatus.value = {
      loading: true,
      tasksTotal,
      tasksDone: 0,
      taskDetails,
    };
  };
  const completeTask = () => {
    if (loadingStatus.value.loading) {
      if (loadingStatus.value.tasksDone < loadingStatus.value.tasksTotal) {
        loadingStatus.value.tasksDone += 1;
        if (loadingStatus.value.tasksDone >= loadingStatus.value.tasksTotal) {
          const nowTime = new Date().getTime();
          if ((nowTime - startLoadingTime.value) < 800) {
            setTimeout(() => {
              init();
            }, 800 - (nowTime - startLoadingTime.value));
          } else {
            init();
          }
        }
      } else {
        init();
      }
    } else {
      console.error('任务没有开始');
    }
  };
  onMounted(() => {
    console.log(loadingStatus.value);
  });
  return {
    loadingStatus,
    startLoading,
    completeTask,
  };
}
