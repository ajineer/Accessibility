const startCountdown = (a, b) => {
  let intervalSum = a + b;

  const logCountdown = () => {
    if (intervalSum >= 0) {
      console.log(intervalSum);
      intervalSum -= 1;
    } else {
      clearInterval(countdown);
    }
  };

  const countdown = setInterval(logCountdown, 1000);
};

// tests
// startCountdown(3, 1);
// startCountdown(0, 0);
// startCountdown(-1, -3);
