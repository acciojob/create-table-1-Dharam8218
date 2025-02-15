function insert_Row() {
    //Write your code here
   const element = document.getElementById("sampleTable");
   const newRow = element.insertRow(0);
   const newCol1 = newRow.insertCell(0);
   const newCol2 = newRow.insertCell(1);

	newCol1.textContent="New Cell1";
	newCol2.textContent="New Cell2";
	
  
}
