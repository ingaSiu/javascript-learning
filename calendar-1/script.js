let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function openModal(date) {
  clicked = date;

  // find an event existing on selected day
  const eventForDay = events.find((e) => e.date === clicked);

  if (eventForDay) {
    console.log('Event already exists');
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const date = new Date();

  if (nav !== 0) {
    date.setMonth(new Date().getMonth() + nav);
  }

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

  document.getElementById('monthDisplay').innerText = `${date.toLocaleDateString('en-lt', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      daySquare.addEventListener('click', () => openModal(`${month + 1}/${i - paddingDays}/${year}`));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }

  console.log(paddingDays);
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');
    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);

  document.getElementById('cancelButton').addEventListener('click', closeModal);
}

initButtons();
load();
