let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

document.addEventListener("keydown", function(event) {
    // Check if the pressed key is the Backspace key
    if (event.key === "Backspace") {
        console.log("Backspace key pressed!");
        // Add your code here to handle the Backspace key press
        input.innerText = input.innerText.slice(0, -1);
        input.scrollLeft = input.scrollWidth;
    }
    else if(event.key === "Enter")
    {
        input.innerText = eval(input.innerText);
    }
});

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        if (e.target.textContent === "C") {
            input.innerText = "";
        } else if (e.target.textContent === "=") {
            input.innerText = eval(input.innerText);
        } 
        else if(e.target.textContent === "<")
        {
            input.innerText = input.innerText.slice(0, -1);
        }else {
            input.innerText += e.target.textContent;
        }
        input.scrollLeft = input.scrollWidth;
    });
});
