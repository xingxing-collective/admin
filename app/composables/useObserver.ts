import defu from 'defu';

export const useObserver = () => {
  const observer = ref<IntersectionObserver>();
  const resizeObserver = ref<ResizeObserver>();

  function createObserver(
    container: Element,
    callback: FrameRequestCallback,
    _opts?: IntersectionObserverInit
  ) {
    const options = defu(_opts, {
      threshold: 0.75,
    });
    observer.value = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) requestAnimationFrame(callback);
    }, options);
    observer.value.observe(container);
  }
  function createResizeObserver(
    container: Element,
    callback: ResizeObserverCallback
  ) {
    resizeObserver.value = new ResizeObserver(callback);
    resizeObserver.value.observe(container);
  }
  onBeforeUnmount(() => {
    observer.value?.disconnect();
    resizeObserver.value?.disconnect();
  });
  return {
    observer,
    createObserver,
    createResizeObserver,
  };
};
