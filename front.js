fetch("http://localhost:3000/getdata").then((data) =>{
    return data.json();
}).then((objectData) =>{
    console.log(objectData);
    let tableData = "";
    objectData.forEach(element => {
        tableData += `          <tr>
        <th scope="row">${element.no}</th>
        <td>${element.name}</td>
        <td>₹${element.last}</td>
        <td>₹${element.buy}/₹${element.sell} </td>
        <td>${element.volume}</td>
        <td>${element.base_unit}</td>
      </tr>`
    });
    document.getElementById("table_body").
    innerHTML=tableData
}).catch((err) =>{
    console.log(err);
})
