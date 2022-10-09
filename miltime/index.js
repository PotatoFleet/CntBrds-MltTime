const miltime = (time) => {
  time = time.replace("12", "00");
  const hour = parseInt(time[0] + time[1]);
  const minute = parseInt(time[3] + time[4]);
  const second = parseInt(time[6] + time[7]);
  const type = time[8] + time[9];
  const totalSeconds =
    second +
    minute * 60 +
    hour * 3600 +
    (type === "PM" ? 12 * 3600 : 0) +
    45 * 61;
  console.log(totalSeconds);
  const hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((totalSeconds % 3600) % 60)
    .toString()
    .padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const res = miltime("12:01:00PM");
console.log(res);
