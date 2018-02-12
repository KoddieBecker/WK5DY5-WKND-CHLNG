function shoppingPage() {

//<script >
    function myCreateFunction() {
        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
    }

    $("body").empty();
    $("body").append(

 // "<table id='myTable'><tr>";
 //    "<td>Row1 cell1</td>" +
 //    "<td>Row2 cell1</td>" +
 //




    '<form xmlns=" ">' +

    '   <h1>Donut Purchase Page</h1>' +
    '   <p>Strawberry Filled Donuts</p>' +
    '   <p>$.50 Each</p>' +
    '   <input type="text" id="inputFilled" placeholder="Enter Quantity">' +
    '</form>' +

    '<button onclick="addFilled" id="btnAddFilled">Add</button>' +
    '<button onclick="remFilled" id="btnRemFilled">Remove</button>' +

    '<form>' +
    '   <p>Long Johns</p>' +
    '   <p>$.75 Each</p>' +
    '   <input type="text" id="inputLJ" placeholder="Enter Quantity">' +
    '</form>' +
    '' +
    '<button onclick="addLJ" id="btnAddLJ">Add</button>' +
    '<button onclick="remLJ" id="btnRemLJ">Remove</button>' +

    '<form>' +
    '   <p>Frosted Donuts</p>' +
    '   <p>$1.00</p>' +
    '   <input type="text" id="inputFrosted" placeholder="Enter Quantity">' +
    '</form>' +
    '<button onclick="addFrosted" id="btnAddFrosted">Add</button>' +
    '<button onclick="remFrosted" id="btnRemFrosted">Remove</button>'

    // "</tr>"
 ) ;


}