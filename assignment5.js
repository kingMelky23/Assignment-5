let addRows = 0;
let addColumns  = 0;
let removeRows = 0;
let removeColumns = 0;
let rows = 0;
let columns = 0;
let buttonSubmit = document.getElementById("button-submit");


buttonSubmit.addEventListener("click", function(event){
addRows = document.getElementById("addRows").value;
addColumns = document.getElementById("addColumns").value;
removeRows = document.getElementById("removeRows").value;
removeColumns = document.getElementById("removeColumns").value;

rows = rows + addRows;
rows = rows - removeRows;

columns = columns + addColumns;
columns = columns - removeColumns;



if(addRows == 1){
    alert("it worked");
}
else{
    alert("it didnt")
}
});


let buttonColorUncolored = document.getElementById("colorUncolored");
buttonColorUncolored.addEventListener("click", function(event){

});


let buttonColorAll = document.getElementById("colorAll");
buttonColorAll.addEventListener("click", function(event){

});

let buttonClearAll = document.getElementById("clearAll");
buttonClearAll.addEventListener("click", function(event){

});
