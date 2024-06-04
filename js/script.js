
// Date & time
const now = new Date()
let yearNow = now.getFullYear()

// footer
document.getElementById("footer").innerHTML = "&copy;" +yearNow+". All Rights Reseved."

// users
let users = [{email:"ahsanmushtaq172@gmail.com", pass:"123", uID: "1" , status:"active" , createdAt:"" },]

// todos array
// let todos = [
//     {title: "title1", date: new Date(), id: "task1", isCompleted: false},
//     {title: "title2", date: new Date(), id: "task2", isCompleted: false},
//     {title: "title3", date: new Date(), id: "task3", isCompleted: false},
// ]

let todos = [
    {title: "title1", description: "abc", date: "01/01/2024" , id: "01" , status:"incompleted" , createdAt: now.getDay()+"/"+now.getDate()+"/"+now.getFullYear()+" - "+now.getHours()+":"+now.getMinutes() , UserID: "email" },
    {title: "title2", description: "abc", date: "01/01/2024" , id: "02" , status:"incompleted" , createdAt: now.getDay()+"/"+now.getDate()+"/"+now.getFullYear()+" - "+now.getHours()+":"+now.getMinutes() , UserID: "email" },
    {title: "title3", description: "abc", date: "01/01/2024" , id: "03" , status:"incompleted" , createdAt: now.getDay()+"/"+now.getDate()+"/"+now.getFullYear()+" - "+now.getHours()+":"+now.getMinutes() , UserID: "email" },
    ]

// User Registration
const handleUserRegister = () => {
    event.preventDefault();
    let newemail =  handleInput("regEmail")
    let newpass = handleInput("regPass")
    
    let uniqueID = Math.random().toString(36)
    let status = "active"
    let createdAt = now.getTime() 
    let newuser = {
        email: newemail,
        pass: newpass,
        uID: uniqueID,
        status: status,
        createdAt: createdAt,
    }

    const userFind = users.find(user => user.email === newemail)

    if(userFind){
        showToast("user already exsist")
    }else{
        showToast("New User Created")
        users.push(newuser)
    }
}

// loging in
    const handleUserLogin = () => {
    event.preventDefault();
    let newemail =  handleInput("logEmail")
    let newpass = handleInput("logPass")

    const userFind = users.find(user => user.email === newemail)
    const passMatch = users.find(user => user.pass === newpass)

    if(userFind){
        if(passMatch){
            showToast("user Loged in")
            document.getElementById("log-signup").style.display= "none"
            document.getElementById("todos-dash").style.display= "block"
            document.getElementById("icon").innerHTML= newemail
            handleShowTable()
        }else{
            showToast("password not matched")
        }
    }else{
        showToast("Email not found")
    }
    }


// showing Tasks in table
const handleShowTable = () => {
    
    if (!todos.length) {
        showNotification("there is no single Title", "error")
    }
    let tableStartingCode = `<div class="table-responsive"><table class="table text-center">`
    let tableHead = `<tr><th>#</th><th>Title</th><th>Discription</th><th>Date</th><th>Id</th><th>Status</th><th>CreatedAt</th><th>User</th></tr>`
    let tableEndingCode = `</table></div>`
    let tableBody = ""
    for (let i = 0; i < todos.length; i++) {
        tableBody += `<tr><td>${i + 1}</td><td>${todos[i].title}</td><td>${todos[i].description}</td><td>${todos[i].date}</td><td>${todos[i].id}</td><td>${todos[i].status}</td><td>${todos[i].createdAt}</td><td>${todos[i].UserID}</td><td></tr>`
    }
    let table = tableStartingCode + tableHead + tableBody + tableEndingCode
    document.getElementById("output").innerHTML = table

}


// Getting input
const handleInput = (input) =>{
    userinput = document.getElementById(input).value
    return userinput
}



// Tostify
function showToast(message) {
    Toastify({
      text: message,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
  
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      className: "display-toast",
      onClick: function () { } // Callback after click
    }).showToast();
  }

const nowtime = () => {
    
}
