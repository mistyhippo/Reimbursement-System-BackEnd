const URL = 'http://localhost:7000';

function changeFieldToVisible(){

    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i<inputs.length; i++) {
        inputs[i].disabled = false;
    }
}

let updateProfile = async () => {
    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i<inputs.length; i++) {
        inputs[i].disabled = true;
    }

    //Send data to server
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let passW = document.getElementById('passW').value;

    let updateObj = {firstName,lastName,email,passW};
    let req = await fetch(`${URL}/update`,{
        method:'PUT',
        body:JSON.stringify(updateObj)
    });
    let res = await req.json();
    console.log(res);

};

//let saveUpdateProfile = document.getElementById('submit-profile').addEventListener('click',updateProfile);


function errorMessage(){
    let error = document.getElementById("error");
    let value = document.getElementById('title').value;

    if(!value){
        error.textContent = "Please enter title name";
        error.style.color = "red"
    } else {
        error.textContent = "";
        document.getElementById('buttons').style.display = 'block';
    }
}


function createLodging(){
    let lodging = document.getElementById('lodging');
    // lodging.style.display = 'block';
    lodging.setAttribute('class', 'visible');
}

function createItem(id)
{
    let tableID = document.getElementById(id);
    let spanID = document.getElementById(id+1);
    tableID.style.display = 'block';
    spanID.textContent = id;
}

let reimbItemSavePost = async () => {
    let userId = document.getElementsByClassName('reimbType1').value;
    let title = document.getElementById('title').value;
    let type = document.getElementsByClassName('reimbType2').value;
    let amount = document.getElementsByClassName('reimbType3').value;
    let transactionDate = document.getElementsByClassName('reimbType4').value;

    let itemObj = {
        'user_id': userId,
        'title': title,
        'reimbursement_type': type,
        'cost': amount,
        'transaction_date': transactionDate
    }

    let req = await fetch(`${URL}/create`, {
        method: 'POST',
        body: JSON.stringify(itemObj)
    });
}

    //------------------------

let users = [
    {
        userId: 1,
        email: 'a',
        firstName: 'a',
        lastName: 'a',
        role:'a',
        passWord:'a'
    },
    {
        userId: 2,
        email: 'a',
        firstName: 'a',
        lastName: 'a',
        role:'a',
        passWord:'a'
    },
    {
        userId: 3,
        email: 'a',
        firstName: 'a',
        lastName: 'a',
        role:'a',
        passWord:'a'
    },
];


let testTable = [
    {
        userId: 1,
        reimbursementId:1,
        firstName: 'a',
        lastName: 'a',
        email: 'a',
        status:'a',
        submittedDate:'12/12/12',
        transactionDate:'12/12/12',
        amount:12,
        approvedDeniedDate:'12/12/12'
    },
    {
        userId: 1,
        reimbursementID:1,
        firstName: 'a',
        lastName: 'a',
        email: 'a',
        status:'a',
        submittedDate:'12/12/12',
        transactionDate:'12/12/12',
        amount:12,
        approvedDeniedDate:'12/12/12'
    },
]

function addUserListTable() {
    let table = document.getElementById("userListTable");
    for(let user of users) {
        var tableRow2 = document.createElement('tr');

        var tableDetail1 = document.createElement('td');
        tableDetail1.appendChild(document.createTextNode(user.userId));
        var tableDetail2 = document.createElement('td');
        tableDetail2.appendChild(document.createTextNode(user.email))
        var tableDetail3 = document.createElement('td');
        tableDetail3.appendChild(document.createTextNode(user.firstName));
        var tableDetail4 = document.createElement('td');
        tableDetail4.appendChild(document.createTextNode(user.lastName))
        var tableDetail5 = document.createElement('td');
        tableDetail5.appendChild(document.createTextNode(user.role))
        let tableDetail6 = document.createElement('td');
        tableDetail6.appendChild(document.createTextNode(user.passWord))
        tableRow2.appendChild(tableDetail1);
        tableRow2.appendChild(tableDetail2);
        tableRow2.appendChild(tableDetail3);
        tableRow2.appendChild(tableDetail4);
        tableRow2.appendChild(tableDetail5);
        tableRow2.appendChild(tableDetail6);
        table.appendChild(tableRow2);

        tableDetail1.classList.add('border');
        tableDetail2.classList.add('border');
        tableDetail3.classList.add('border');
        tableDetail4.classList.add('border');
        tableDetail5.classList.add('border');
        tableDetail6.classList.add('border');

    }

}


// (() =>{
//     //Step 1:  Create the new XHR object
//     let xhttp = new XMLHttpRequest();
//
//     //Step 2: Create a callback function for readystatechange
//     xhttp.onreadystatechange = getData = ()=> {
//         if(xhttp.readyState === 4 && xhttp.status === 200){
//             console.log(xhttp.responseText);
//             let res = JSON.parse(xhttp.responseText);
//             addUserListTable(res);
//         }
//     }
//     let apiUrl = `${URL}/manager/id`
//
//     //Step 3. Open the request
//     xhttp.open('GET', apiUrl);
//
//     //Step 4. Send the request
//     xhttp.send();
//
// })()
let pendingReimb;
let historyReimb;

function addPendingTable(){
    addTable();
}

function addHistoryTable(tableName){
    addTable(tableName,pendingReimb);

}
function addTable(){
    let table = document.getElementById('userHIstoryListTable');
    for(let reim of testTable) {
        var tableRow1 = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(reim.userId));
        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(reim.reimbursementId))
        var td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(reim.firstName));
        var td4 = document.createElement('td');
        td4.appendChild(document.createTextNode(reim.lastName))
        var td5 = document.createElement('td');
        td5.appendChild(document.createTextNode(reim.email))
        let td6 = document.createElement('td');
        td6.appendChild(document.createTextNode(reim.status));
        let td7 = document.createElement('td');
        td7.appendChild(document.createTextNode(reim.submittedDate))
        let td8 = document.createElement('td');
        td8.appendChild(document.createTextNode(reim.amount))
        let td9 = document.createElement('td');
        td9.appendChild(document.createTextNode(reim.transactionDate))
        let td10 = document.createElement('td');
        td10.appendChild(document.createTextNode(reim.approvedDeniedDate))
        let td11 = document.createElement('td');
        let td12 = document.createElement('td');

        //Append button into table
        let btn1 = document.createElement("button");
        btn1.innerHTML = "Approve";
        td11.appendChild(btn1);

        let btn2 = document.createElement("button");
        btn2.innerHTML = "Deny";
        td12.appendChild(btn2);

        tableRow1.appendChild(td1);
        tableRow1.appendChild(td2);
        tableRow1.appendChild(td3);
        tableRow1.appendChild(td4);
        tableRow1.appendChild(td5);
        tableRow1.appendChild(td6);
        tableRow1.appendChild(td7);
        tableRow1.appendChild(td8);
        tableRow1.appendChild(td9);
        tableRow1.appendChild(td10);
        tableRow1.appendChild(td11);
        tableRow1.appendChild(td12);
        table.appendChild(tableRow1);

        td1.classList.add('border');
        td2.classList.add('border');
        td3.classList.add('border');
        td4.classList.add('border');
        td5.classList.add('border');
        td6.classList.add('border');
        td7.classList.add('border');
        td8.classList.add('border');
        td9.classList.add('border');
        td10.classList.add('border');



    }
}
