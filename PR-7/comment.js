let User;
let isEdit = false;
let Uid;
stInfo()
function stInfo() {
    User = JSON.parse(localStorage.getItem('User'))
    let html = ''
    if (User) {
        for (var i = 0; i < User.length; i++) {
            html += `<tr>
                        <td>${User[i].name}</td>
                        <td>${User[i].email}</td>
                        <td>
                            <a href="#" onclick = 'editData(${i})'>Edit</a>
                            <a href="#" onclick = 'deleteData(${i})'>Delete</a>
                        </td>
                     </tr>`
        }
        document.getElementById('tbody').innerHTML = html
    }
}

function deleteData(id) {
    User = JSON.parse(localStorage.getItem('User'))
    User.splice(id, 1)
    localStorage.setItem('User', JSON.stringify(User))
    stInfo();
}
function editData(id) {
    Uid = id;
    User = JSON.parse(localStorage.getItem('User'))
    document.getElementById("span").innerHTML = ""
    document.getElementById("span1").innerHTML = ""
    document.getElementById("name").value = User[id].name
    document.getElementById("email").value = User[id].email
    document.getElementById("add").setAttribute("id", "update")
    isEdit = true
}

const form = document.querySelector(".form")
form.addEventListener("submit", function (e) {
    document.getElementById("span").innerHTML = "name"
    document.getElementById("span1").innerHTML = "email"
    e.preventDefault()
    User = JSON.parse(localStorage.getItem('User'))
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
    const userData = {
        name: name,
        email: email,
    }
    if (isEdit) {
        const newList = User.map((std, index) => {
            if (index == Uid) {
                const updated = std = userData
                return updated;
            }
            return std
        })

        User.push(userData)
        localStorage.setItem('User', JSON.stringify(newList))
        document.getElementById("update").setAttribute("id", "add")
        document.getElementById("name").value = ''
        document.getElementById("email").value = ''
        isEdit = false
    } else {
        if (User) {
            User.push(userData)
            localStorage.setItem('User', JSON.stringify(User))
        } else {
            const UserArr = []
            UserArr.push(userData)
            localStorage.setItem('User', JSON.stringify(UserArr))
        }
    }
    stInfo();
})