function playSound(sound_file) {
        var sound = new Audio();
		sound.src = sound_file;
		sound.play();
}