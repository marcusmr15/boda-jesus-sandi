window.addEventListener("DOMContentLoaded", () => {

    // Countdown
    dayjs.extend(dayjs_plugin_duration);
  
    const targetDate = dayjs('2025-08-16T17:00:00');
    // Date is August 16th, 2025 at 17:00 hrs.

    function updateCountdown() {
      const now = dayjs();
      const diff = targetDate.diff(now);
  
      if (diff <= 0) {
        document.getElementById('countdownTimer').innerText = "YA EMPEZAMOS!";
        clearInterval(interval);
        return;
      }
  
      const duration = dayjs.duration(diff);
  
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
  
      document.getElementById('days').innerText = `${days}`;
      document.getElementById('hours').innerText = `${hours}`;
      document.getElementById('minutes').innerText = `${minutes}`;
      document.getElementById('seconds').innerText = `${seconds}`;
    }
  
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  
    // // Confirm button
    // const googleForm = document.getElementById('confirmButton');
  
    // googleForm.addEventListener('click', () =>{
    //   // window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzYJmZmViJ96GmH7qDDTV1SVX6Kzj8Raam2PXY6N2xAIcLzw/viewform', '_blank')
    //   alert("Lo sentimos, la encuesta de confirmación se ha cerrado.");
    // })
  
  });
  