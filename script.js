function generateVideo() {
  const script = document.getElementById("script").value;
  const voice = document.getElementById("voice").value;
  const aspect = document.getElementById("aspect").value;

  if (!script) {
    alert("Please enter a script");
    return;
  }

  // Dummy response to simulate video generation
  const videoLink = "https://dummyvideo.com/generated.mp4";
  document.getElementById("result").innerHTML =
    `<p>Video Generated with ${voice} voice in ${aspect} mode!</p><a href="${videoLink}" target="_blank">Watch Video</a>`;
}
