let addRows = 0;
let addColumns  = 0;
let removeRows = 0;
let removeColumns = 0;
let rows = 0;
let columns = 0;
let buttonSubmit = document.getElementById("button-submit");

buttonSubmit.addEventListener("click", function(event){
    if(rows !== 0 && columns !== 0)
    {
    
    }
    else{
        addRows = document.getElementById("addRows").value;
        addColumns = document.getElementById("addColumns").value;
        removeRows = document.getElementById("removeRows").value;
        removeColumns = document.getElementById("removeColumns").value;
    
        if(addRows <= removeRows || addColumns <= removeColumns)
        {
            alert("Nothing to remove!");
            document.getElementById("removeRows").value = null;
            document.getElementById("removeColumns").value = null;
            removeRows = 0;
            removeColumns = 0;
            rows = 0;
            columns = 0;
        }
        else{
            rows = addRows - removeRows;
            columns = addColumns - removeColumns;
    
    
            console.log(rows + columns);
            makeRows(rows, columns);
        }
    
    }
    
    
    });