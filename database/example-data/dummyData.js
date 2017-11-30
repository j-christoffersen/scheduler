const Helpers = require('../../helpers');

module.exports = {
  Day_Part: [
    { name: 'moAm' },
    { name: 'moPm' },
    { name: 'tuAm' },
    { name: 'tuPm' },
    { name: 'weAm' },
    { name: 'wePm' },
    { name: 'thAm' },
    { name: 'thPm' },
    { name: 'frAm' },
    { name: 'frPm' },
    { name: 'saAm' },
    { name: 'saPm' },
    { name: 'suAm' },
    { name: 'suPm' },
  ],

  User: [
    {
      name: 'Jackson',
      role: 'manager',
      password: Helpers.passHash('password'),
    },
    {
      name: 'Jinxuan',
      role: 'employee',
      password: Helpers.passHash('password'),
    },
    {
      name: 'Brandon',
      role: 'employee',
      password: Helpers.passHash('password'),
    },
  ],

  Schedule: [
    { monday_dates: '12/4/2017' },
    { monday_dates: '12/11/2017' },
    { monday_dates: '12/18/2017' },
  ],

};

let jinxuanAvailibility = (new Array(14)).fill(false);
jinxuanAvailibility[0] = true;
jinxuanAvailibility[2] = true;
jinxuanAvailibility = jinxuanAvailibility.map((available, i) => ({
  user_id: 2,
  is_available: available,
  day_part_id: i + 1,
}));

let brandonAvailability = (new Array(14)).fill(false);
brandonAvailability[2] = true;
brandonAvailability[4] = true;
brandonAvailability = brandonAvailability.map((available, i) => ({
  user_id: 3,
  is_available: available,
  day_part_id: i + 1,
}));

module.exports.Employee_Availability = jinxuanAvailibility.concat(brandonAvailability);

let neededEmployees = (new Array(14)).fill(0);
neededEmployees[0] = 1;
neededEmployees[2] = 2;
neededEmployees[4] = 1;
neededEmployees = neededEmployees.map((numEmployees, i) => ({
  employees_needed: numEmployees,
  schedule_id: 1,
  day_part_id: i + 1,
}));

console.log('neededEmployees: ', neededEmployees);
module.exports.Needed_Employee = neededEmployees;
