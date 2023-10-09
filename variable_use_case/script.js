// without variables
document.querySelector("#btn").onclick = ()=>{
    alert(`Hello ${prompt("What is your name?")}, nice meeting you!`);
    document.querySelector("#heading").textContent = `Welcome ${prompt("What is your name?")}`
}

// with variables

const btn = document.querySelector("#btn");
const heading = document.querySelector("#heading");

btn.onclick = ()=>{
    const userName =  prompt("What is your name?");
    alert(`Hello ${userName}, nice meeting you`);
    heading.textContent = `Welcome ${userName}`;
}