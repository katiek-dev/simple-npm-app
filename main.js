const userTimeDiv = document.querySelector(".current-time");
const currentDateDiv = document.querySelector(".current-date");

const updateTime = () => {
    userTimeDiv.textContent = dayjs().format('hh:mm:ss A');
    currentDateDiv.textContent = dayjs().format('dddd, D, MMMM, YYYY');
};

// Update immediately when the page loads
updateTime();

// Update every second
setInterval(updateTime, 1000);