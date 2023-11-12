const startDate = new Date(2022, 1, 24);

const updateTimer = () => {
  const currentDate = new Date();
  const startOfDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

  const daysPassed = Math.floor((endOfDay - startOfDay) / (1000 * 60 * 60 * 24));

  document.getElementById('timer').innerHTML = `<div class='timer-block'>Війна<br> день: <span class='days-passed'> ${daysPassed}</span></div>`;
};

setInterval(updateTimer, 1000);
updateTimer();
