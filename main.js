const msg = document.querySelector("#msg");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const users = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault();
    console.log(e);
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add("error");
        msg.innerHTML = "invalid entry"
        setTimeout(()=> msg.remove(),3000);
    } else{
        // make an li out of thin air
        const li = document.createElement('li');
        // appendchild of textnode to li
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // appendchild of li to ul
        users.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}