var video;
var muted = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load();

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		updateVolume();
	});
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
	});
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate -= .1;
		console.log(video.playbackRate);
	});
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += .1;
		console.log(video.playbackRate);
	});
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime <= video.duration - 10)
			video.currentTime += 10;
		else
			video.currentTime = 0;
	});
	document.querySelector("#mute").addEventListener("click", function() {
		muteToggle();
	});
	document.getElementById("slider").addEventListener("input", function() {
		updateVolume();
	});
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});

function updateVolume() {
	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
}

function muteToggle() {
	if (muted) {
		document.getElementById("mute").innerHTML = "Mute";
		video.volume = document.getElementById("slider").value / 100;
		muted = false;
	}
	else {
		document.getElementById("mute").innerHTML = "Unmute";
		video.volume = 0;
		muted = true;
	}
}
