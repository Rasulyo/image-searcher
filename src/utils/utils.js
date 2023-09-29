export const debounce = (func, delay) => {
    let timer;
  
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = window.setTimeout(() => func.apply(context, args), delay);
    };
  };