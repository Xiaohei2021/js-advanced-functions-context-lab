/* Your Code Here */
function createEmployeeRecord(row)
{
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays)
{
   return arrays.map(createEmployeeRecord)
}   

function createTimeInEvent(punchCard)
{
    let [date, hour] = punchCard.split(" ")

    this.timeInEvents.push
    (
        {
            type: "TimeIn",
            hour: parseInt(hour),
            date
        }
    )
    return  this
}

function createTimeOutEvent(punchCard)
{
    let [date, hour] = punchCard.split(" ")

    this.timeOutEvents.push
    (
        {
            type: "TimeOut",
            hour: parseInt(hour),
            date
        }
    )
    return  this
} 

function hoursWorkedOnDate(punchCard)
{
    const timesIn = this.timeInEvents.find(e => e.date === punchCard);
    const timesOut = this.timeOutEvents.find(e => e.date === punchCard);

    return(timesOut.hour - timesIn.hour)/100
}

function wagesEarnedOnDate(punchCard)
{
 const payRate = hoursWorkedOnDate.call(this, punchCard) * this.payPerHour;
 return payRate;   
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(array)
{
   return array.reduce(function(accumulator, day)
   {
        return accumulator + allWagesFor.call(day)
   },0) 
}

function findEmployeeByFirstName(srcArray, firstName)
{
    return srcArray.find(element => element.firstName === firstName)

}


