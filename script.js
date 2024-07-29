let add = document.getElementById("add");
add.style.display = "none"
function addNote() {
    if (add.style.display === "none") {
        add.style.display = "block"
    } else {
        add.style.display = "none"
    }
}
var list2 = JSON.parse(localStorage.getItem("list"))
var list = list2 || []
nothing()
function nothing() {
    let no = document.getElementById("nothing")
    if (list.length !== 0) {
        no.style.display = "none"
    } else {
        no.style.display = "block"
    }
}
display()
function addingNote() {
    var titl = document.getElementById("intitle")
    var des = document.getElementById("inbody")
    var x = titl.value;
    var y = des.value;
    list.push({ title: x, body: y })
    localStorage.setItem("list", JSON.stringify(list))
    display()
    titl.value = "";
    des.value = "";
    add.style.display = "none"
}
function deleteNote(index) {
    console.log(index)
    var newlist = list
    newlist.splice(index, 1)
    localStorage.setItem("list", JSON.stringify(newlist))
    list = newlist
    display()
    nothing()
}
function display() {
    var card = document.getElementById("card")
    var html = ""
    list2.map((item, index) => {
        html += `                                 <div class=" m-5 bg-purple-300 w-64 min-h-56 rounded-2xl">
        <div id="title" class=" flex justify-between text-center text-2xl font-bold p-1">
            <div class=" text-center relative left-24">${item.title}</div>
            <button onclick="deleteNote(${index})" class=""><img src="1.png" class=" top-2" alt="" width="30" height=""></button>
        </div>
        <div id="des" class=" text-center"> ${item.body}</div>
    </div>`
    })
    card.innerHTML = html
    nothing()
}