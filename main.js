const list = document.querySelector(".list");
const generateButton = document.querySelector(".generateListButton");
const clearButton = document.querySelector(".clearListButton");

clearButton.setAttribute('disabled', 'true')

let arr = ['start', 2, 3, 4, 5, 6, 7, 8, 9, 'finish'];

generateButton.addEventListener("click", () => {

    for (let i = 0; i < arr.length; i++){
        let listItem = document.createElement("li");
        listItem.innerHTML = arr[i];
        list.appendChild(listItem);
    }

  if (clearButton.hasAttribute("disabled")) {
    clearButton.removeAttribute("disabled");
  } 
  generateButton.setAttribute("disabled", "true");
});

clearButton.addEventListener("click", () => {
  // list.innerHTML = ''; N1
  let listItems = document.querySelectorAll(".list>li");
  for (let i = 0; i < listItems.length; i++) {
    
    list.removeChild(listItems[i])
  }
  if (generateButton.hasAttribute("disabled")) {
    generateButton.removeAttribute("disabled");
  } 
  clearButton.setAttribute("disabled", "true");
});


