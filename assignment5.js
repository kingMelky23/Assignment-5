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
        console.log("row",rows)
        let newRows = parseFloat(document.getElementById("addRows").value) || 0;
        let newColumns = parseFloat(document.getElementById("addColumns").value) || 0;
        let newRemoveRows = document.getElementById("removeRows").value || 0;
        let newRemoveColumns = document.getElementById("removeColumns").value || 0;

        //let totalRows = (parseFloat(newRows) + parseFloat(rows)) - (newRemoveRows ? parseFloat(newRemoveRows) : 0);
        //console.log("newRem",newRemoveRows)
        //let totalColumns = (parseFloat(newColumns) + parseFloat(columns)) - (newRemoveColumns ? parseFloat(newRemoveColumns) : 0);

        console.log("newRows",newRows);
        console.log("newColumns",newColumns);
        //console.log("total rows",totalRows);

        makeRows(newRows,newColumns)


    }
    else{
        addRows = document.getElementById("addRows").value;
        addColumns = document.getElementById("addColumns").value;
        removeRows = document.getElementById("removeRows").value;
        removeColumns = document.getElementById("removeColumns").value;
    
        if(addRows <= removeRows || addColumns <= removeColumns)
        {
            alert("Nothing to remove!");
            document.getElementById("removeRows").value = 0;
            document.getElementById("removeColumns").value = 0;
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

    const container = document.getElementById("grid-container");

    function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    console.log("tot",rows*cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
    };