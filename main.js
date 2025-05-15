
addDataFromStorage();

function addDataFromStorage()
{
  for (let index = 0; index < localStorage.length; index++) 
  {
    let key = localStorage.key(index);
    let value = localStorage.getItem(key);
    addTaskToTasks(value,key,true)
  }
}

function seveToLocalStorage (value,dataSet)
{
  window.localStorage.setItem(dataSet,value);
}

function removeLocalStorageData(dataSet)
{
  window.localStorage.removeItem(dataSet)
}

function addTaskToTasks(value,dataSet,isStorage = false)
{
  let tasks = document.querySelector(".tasks");

  let dTask = document.createElement("div");
  dTask.className = "task";
  dTask.dataset.set = dataSet;

  let taskP = document.createElement("p");
  let taskContentP = document.createTextNode(value);
  taskP.append(taskContentP);

  let taskContentBtn = document.createElement("button") 
  taskContentBtn.className = "btn-del";
  taskContentBtn.textContent = "Delete"
  dTask.append(taskP,taskContentBtn);

  tasks.append(dTask);

  if (!isStorage) 
      seveToLocalStorage(value,dTask.dataset.set);
}

let btnSubmit = document.querySelector(".add");


btnSubmit.addEventListener("click",function()
{
  let Task = document.querySelector(".input").value;

  if (Task !== "") 
    addTaskToTasks(Task,Number.parseInt(Math.random() * 10000000));

})


let tasks = document.querySelector(".tasks");


tasks.addEventListener("click", function(event)
{
  if (event.target.className === "btn-del") 
  {
    removeLocalStorageData(event.target.parentElement.dataset.set)
    event.target.parentElement.remove();
  }
    
})

