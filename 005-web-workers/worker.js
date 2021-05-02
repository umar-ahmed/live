function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

self.addEventListener(
  "message",
  function (e) {
    switch (e.data.type) {
      case "fibonacci": {
        setTimeout(() => {
          self.postMessage({ type: "result", data: fibonacci(10) });
        }, 10 * 1000);
        break;
      }
      default:
        break;
    }
  },
  false
);
