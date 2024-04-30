const calendar = document.querySelector('.calendar'),
  date = document.querySelector('.date'),
  daysContainer = document.querySelector('.days'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next'),
  todayBtn = document.querySelector('.today-btn'),
  gotoBtn = document.querySelector('.goto-btn'),
  dateInput = document.querySelector('.date-input'),
  eventDay = document.querySelector('.event-day'),
  eventDate = document.querySelector('.event-date'),
  eventsContainer = document.querySelector('.events'),
  addEventBtn = document.querySelector('.add-event'),
  addEventWrapper = document.querySelector('.add-event-wrapper '),
  addEventCloseBtn = document.querySelector('.close '),
  addEventTitle = document.querySelector('.event-name '),
  addEventFrom = document.querySelector('.event-time-from '),
  addEventTo = document.querySelector('.event-time-to '),
  addEventSubmit = document.querySelector('.add-event-btn ');

let today = new Date();
let activeDay;
let month = today.getFullMonth();
let year = today.getFullYear();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
