const tracks = [
  { title: "Lose Control", artist: "Teddy Swims", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp" },
  { title: "A Bar Song (Tipsy)", artist: "Shaboozey", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Beautiful Things", artist: "Benson Boone", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "I Had Some Help", artist: "Post Malone feat. Morgan Wallen", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { title: "Lovin on Me", artist: "Jack Harlow", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { title: "Not Like Us", artist: "Kendrick Lamar", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { title: "Espresso", artist: "Sabrina Carpenter", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { title: "Million Dollar Baby", artist: "Tommy Richman", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { title: "I Remember Everything", artist: "Zach Bryan feat. Kacey Musgraves", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { title: "Too Sweet", artist: "Hozier", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
];

const trackList = document.getElementById('track-list');
const audioPlayer = document.getElementById('audioPlayer');

// Создаём кнопки треков
tracks.forEach((track, index) => {
  const button = document.createElement('button');
  button.classList.add('track-button');
  button.textContent = `${track.title} — ${track.artist}`;
  button.addEventListener('click', () => {
    playTrack(index);
  });
  trackList.appendChild(button);
});

function playTrack(index) {
  audioPlayer.src = tracks[index].audio;
  audioPlayer.play();
}

document.getElementById('randomBtn').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  playTrack(randomIndex);
});

document.getElementById('fileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.play();
  }
});

