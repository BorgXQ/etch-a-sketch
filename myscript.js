function createGrid() {
    const n = 16
    for (let i=0; i<n; i++) {
        let myRow = document.createElement("tr");
        myRow.id = "row" + i;
        tbl.appendChild(myRow);

        const useRow = document.getElementById("row" + i);
        for (let j=0; j<n; j++) {
            let myColumn = document.createElement("td");
            myColumn.id = "column" + j;
            useRow.appendChild(myColumn);
        }
    }
}

const tbl = document.getElementById("tbl");
createGrid();
