var minTimeToVisitAllPoints = function (points) {
  let i = 1;
  let time = 0;
  while (i < points.length) {
    const x = points[i - 1];
    const y = points[i];
    time += Math.max(Math.abs(y[0] - x[0]), Math.abs(y[1] - x[1]));
    i++;
  }
  return time;
};
