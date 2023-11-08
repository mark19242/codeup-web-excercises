

(() => {
    const sayHelloBtn = document.querySelector("#hello")
    sayHelloBtn.addEventListener(`click`, (event) => {
        const name = event.target.getAttribute("data-name")
        alert(`hello, ${name}!`);
    });
    document.body.addEventListener("keydown", (e) =>{
        console.log(e);
        if(e.key === "."){
            alert("You pressed the period key!");
        }
    })

});
