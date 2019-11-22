
let currentTime = moment().format('MMMM Do YYYY');
console.log(currentTime);

function displayDate () {
    document.getElementById("current-day").innerHTML = currentTime;
};
displayDate();


