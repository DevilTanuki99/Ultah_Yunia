function showGift() {
  document.querySelector('.gift').classList.remove('hidden');

  const audio = document.getElementById('backsound');
  audio.play();
}