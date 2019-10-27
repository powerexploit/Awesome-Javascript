// Developing digital watch to load at ankit repo. That might help bignners to learn some techiques. 
const date = new Date();
const _clock = document.querySelector('.digital-clock')

const tick = () => {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const createClockHtml = `
<span>${hour}</span> :
<span>${minutes}</span> :
<span>${seconds}</span> 
`
  _clock.innerHTML = createClockHtml;
}
setInterval(tick, 1000);

