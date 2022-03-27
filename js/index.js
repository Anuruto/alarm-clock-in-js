// You have to crate an alarm clock in javascript (Use your creativity)
// Allow user to set alarm for a certain time

let audio = new Audio("music/Tik Tik Alarm Notification.mp3");

const hourDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");
setAlarm.addEventListener("click", (e) => {
	// console.log("clicked");
	checkTime();
});

function checkTime() {
	let today = new Date();
	const nowHour = JSON.stringify(today.getHours());
	const nowMinutes = JSON.stringify(today.getMinutes());
	const nowSeconds = JSON.stringify(today.getSeconds());
	let hour = hourDiv.value || 0;
	let minutes = minutesDiv.value || 0;
	let seconds = secondsDiv.value || 0;
	setTimeout(() => {
		if (hour === nowHour) {
			if (minutes === nowMinutes) {
				if (seconds === nowSeconds) {
					audio.play();
					return;
				}
			}
		}

		// console.log("Hello, Worudooo!");
		checkTime();
	}, 1000);
}
