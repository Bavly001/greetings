const first_line = document.querySelector('h1:first-child');
const second_line = document.querySelector('h1:nth-child(2)');
const input_name = document.querySelector('input');
const any_to_more = document.querySelector('.any');
const button_greets = document.querySelector('button');

const greetings = ['How do you do, ',
      ' Pleased to meet you here, ',
      'How have you been, ',
      'How’s it going, ',
      'Long-time no see, ',
      'It’s been a while, ',
      'Welcome here, ',
      'How’s your day, ',
      'What’s up, ',
      'Kind Regards, ',
      'My day has been pretty good cause you are here, '
];
const number = greetings.length - 1;

button_greets.addEventListener('click', function () {
      if (input_name.value === '' || input_name.value.includes(' ') || input_name.value.match(/\d+/g)) {
            input_name.placeholder = 'Please enter a valid name (Your First Name Only)';
            input_name.value = '';
            input_name.className = 'warning';
      }
      else {
            any_to_more.innerHTML = 'more';
            second_line.style.opacity = 0;
            first_line.innerHTML = greetings[Math.floor(Math.random() * number)] + '<span>' + input_name.value + '</span>';
            input_name.value = '';
            input_name.placeholder = 'Please enter your first name';
            input_name.className = '';
            setTimeout(function () {
                  first_line.innerHTML = 'Cause we care about <span>YOU</span>,';
                  second_line.style.opacity = 1;
            }, 5000)
      }
})