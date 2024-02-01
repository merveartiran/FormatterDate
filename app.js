const currentDateParagraph = document.getElementById("current-date");
console.log(currentDateParagraph);
const dateOptionsSelectElement = document.getElementById("date-options")
console.log(dateOptionsSelectElement);
const date = new Date();
console.log(date);
const day = date.getDate();
console.log(day);
const month = date.getMonth() + 1; // JavaScript months are zero indexed, so we add one to get the correct number
console.log(month);
const year = date.getFullYear();
console.log(year);
const hours = date.getHours();
console.log(hours);
const minutes = date.getMinutes();
console.log(minutes)
const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

})

switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
        currentDateParagraph.textContent = formattedDate;
        formattedDate.split("-").reverse().join("-");
        break;
    case "mm-dd-yyyy-h-mm":
        currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;
    default:
        currentDateParagraph.textContent = formattedDate

}