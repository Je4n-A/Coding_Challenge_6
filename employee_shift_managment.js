//Create an Employees Array of Objects 

let employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },

    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },

    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },

    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];

//Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Employee Name: ${employee.name}`);
    console.log('Shifts:');
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
