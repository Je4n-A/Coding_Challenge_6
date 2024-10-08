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

//Create a Function to Assign a New Shift 

function assignShift(employee, day, hours) {
    employee.shifts.forEach(shift => {
        if (shift.day === day) {
            console.log('Shift already exists');
            return;
        }
    });
    employee.shifts.push({ day: day, hours: hours });
}

//Create a Function to Calculate Total Hours Worked 

function calculateTotalHours(employee) {
    let totalHours = 0;
    employee.shifts.forEach(shift => {
        totalHours += shift.hours;
    });
    return totalHours;
}

// Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    let availableEmployees = [];
    employees.forEach(employee => {
        let isAvailable = true;
        employee.shifts.forEach(shift => {
            if (shift.day === day) {
                isAvailable = false;
            }
        });
        if (isAvailable) {
            availableEmployees.push(employee);
        }
    });
    return availableEmployees;
}
