let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function load() {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfWeekIndex = firstDayOfMonth.getDay();
  // Get the index of the first day of the week (0-6, 0 is Sunday)

  // const dateString = firstDayOfMonth.toLocaleDateString('lt-LT', {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric',
  // });
  //const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  const paddingDays = firstDayOfWeekIndex === 0 ? 6 : firstDayOfWeekIndex - 1;

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      daySquare.addEventListener('click', () => console.log('click'));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }

  console.log(paddingDays);
}

load();
