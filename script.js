const speakBtn = document.getElementById('speak-btn');
const textInput = document.getElementById('text-input');
const volumeInput = document.getElementById('volume');
const pitchInput = document.getElementById('pitch');
const langSelect = document.getElementById('language-select');

speakBtn.addEventListener('click', () => {
  const text = textInput.value;
  const volume = parseFloat(volumeInput.value);
  const pitch = parseFloat(pitchInput.value);
  const selectedLang = langSelect.value;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = selectedLang;
  utterance.volume = volume;
  utterance.pitch = pitch;
  utterance.rate = 1;

  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === selectedLang);
  if (voice) {
    utterance.voice = voice;
  }

  speechSynthesis.speak(utterance);
});

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
  };
}