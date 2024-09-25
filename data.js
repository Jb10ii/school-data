const schoolItemId = document.getElementById("schoolID"); 
const schoolItemFName = document.getElementById("schoolFName"); 
const schoolItemLName = document.getElementById("schoolLname"); 
const schoolItemDob = document.getElementById("schoolDob"); 
const schoolItemCname = document.getElementById("schoolCname"); 
const schoolItemScore = document.getElementById("schoolScore"); 
const schoolItemGrade = document.getElementById("schoolGrade"); 
const schoolItemSubmit = document.getElementById("gSubmit")
const tableBody = document.getElementById("tableBody")


schoolItemSubmit.addEventListener("click", (e) => {

    e.preventDefault();
  
    let tableRow = document.createElement("tr");

    let firstTableData = document.createElement("td");
    let secondTableData = document.createElement("td");
    let thirdTableData = document.createElement("td");
    let fourthTableData = document.createElement("td");
    let fifthTableData = document.createElement("td");
    let sixthTableData = document.createElement("td");
    let seventhTableData = document.createElement("td");

 
    const schoolID = schoolItemId.value;
    const schoolFName = schoolItemFName.value;
    const schoolLName = schoolItemLName.value;
    const schoolDob = schoolItemDob.value;
    const schoolCName = schoolItemCname.value;
    const schoolScore = schoolItemScore.value;
    const schoolGrade = schoolItemGrade.value;

   
    firstTableData.innerText = schoolID;
    secondTableData.innerText = schoolFName;
    thirdTableData.innerText = schoolLName;
    fourthTableData.innerText = schoolDob;
    fifthTableData.innerText = schoolCName;
    sixthTableData.innerText = schoolScore;
    seventhTableData.innerText = schoolGrade;

    tableRow.appendChild(firstTableData);
    tableRow.appendChild(secondTableData);
    tableRow.appendChild(thirdTableData);
    tableRow.appendChild(fourthTableData);
    tableRow.appendChild(fifthTableData);
    tableRow.appendChild(sixthTableData);
    tableRow.appendChild(seventhTableData);

    tableBody.appendChild(tableRow);

    schoolItemId.value = '';
    schoolItemFName.value = '';
    schoolItemLName.value = '';
    schoolItemDob.value = '';
    schoolItemCname.value = '';
    schoolItemScore.value = '';
    schoolItemGrade.value = '';
});
