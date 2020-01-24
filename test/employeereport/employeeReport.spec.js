const EmployeeReport = require('../../src/employeereport/employeeReport');
var assert = require('assert');

describe('Employee Report', () => {

    it('should return all employees', () => {
        assert.deepEqual(EmployeeReport.employeeReportForDay('Monday'),
            ['Max', 'Sepp', 'Tom', 'Nina', 'Mike']);
    });

});