
addDataFromStorage();


// Add Stored Data

function addDataFromStorage()
{
  for (let index = 0; index < localStorage.length; index++) 
  {
    let key = localStorage.key(index);
    let value = localStorage.getItem(key);
    addTaskToTasks(value,key,true)
  }
}

// Save Data To Local Storage
function seveToLocalStorage (value,dataSet)
{
  window.localStorage.setItem(dataSet,value);
}

// Remove Data From Local Storage
function removeLocalStorageData(dataSet)
{
  window.localStorage.removeItem(dataSet)
}


// Add Task To Page
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

// Validate On Click Data and Send To Function (AddTaskToTasks) ^^^^;
btnSubmit.addEventListener("click",function()
{
  let Task = document.querySelector(".input").value;

  if (Task !== "") 
    addTaskToTasks(Task,Number.parseInt(Math.random() * 10000000));

})


let tasks = document.querySelector(".tasks");

// Remove Data From LocalStorage And Page
tasks.addEventListener("click", function(event)
{
  if (event.target.className === "btn-del") 
  {
    removeLocalStorageData(event.target.parentElement.dataset.set)
    event.target.parentElement.remove();
  }
    
})

