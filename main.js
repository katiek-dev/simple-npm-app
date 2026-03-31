/* Create a dayjs object and assign it to currentTime */
const userTimeDiv = document.querySelector(".current-time");
userTimeDiv.textContent = `${dayjs().format('hh:mm:ss A')}`;

const currentDateDiv = document.querySelector(".current-date");
currentDateDiv.textContent = `${dayjs().format('dddd, D, MMMM, YYYY')}`;