/*- As a user, I should be able to type a task into the input field.
- As a user, I should be able to click some form of a submit button.
- As a user, I expect to see the task string that I provided appear in the DOM*/

let someNum = 1;
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //id="new-task-description"
  const inputBox = document.getElementById("new-task-description")

  //inputBox.addEventListener(`change`, (e) => {
  //  console.log
  //})
  
  // get form html
  const button = document.getElementById("create-task-form")

  //get form value
  button.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(inputBox.value);
    //console.log(e.target[`new-task-description`])

    if (inputBox.value === ``) {
      return
    }


    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const ul = document.createElement("ul")
    
    div.id = "list"
    div.classname = `card-${someNum}`
    ul.id = "tasks"

    const todoLi = document.createElement("li")
    todoLi.textContent = inputBox.value;
    inputBox.value ="";

    div.addEventListener("click", (e) =>{
      console.log(e.target)
      div.remove();
    })

    div.append(h2,ul,)

    ul.append(todoLi)
    
    document.body.append(div)
   // const todoUl = document.getElementById(`tasks`);


    //todoUl.append(todoLi);
  })


});
