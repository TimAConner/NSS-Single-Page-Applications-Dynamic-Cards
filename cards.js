let buttonCount = 0; //Amount of buttons on page


function createCard(){
    let output = document.getElementById("output");
    let textarea = document.getElementById("text");

    buttonCount ++;

    if(textarea.value !== ""){
        //Create card
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", `card${buttonCount}`);

        //Create paragraph
        let paragraph = document.createElement("p");
        let textNode = document.createTextNode(textarea.value);
        paragraph.appendChild(textNode);
    
        //Create button
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", `deleteButton${buttonCount}`)
        deleteButton.textContent = "Delete";

        //Add delete functionality
        deleteButton.addEventListener("click", function(){
            card.parentNode.removeChild(card);
        });

        //Add pagraph, button, and card to DOM
        card.appendChild(paragraph);
        card.appendChild(deleteButton);
        output.appendChild(card);    
    }    
}

document.getElementById("btn-create").addEventListener('click', createCard());