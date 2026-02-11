
const board = document.querySelector(".board")
const columns = document.querySelectorAll(".column")

function addTask(){
  const input = document.getElementById("taskInput")
  const priority = document.getElementById("priority").value
  
  if(input.value.trim() === ""){
    alert("Digite uma missão!")
    return
  }

  const task = document.createElement("div")
  task.classList.add("task")
  task.textContent = input.value

  task.onclick = function(){
    task.remove()
  }

  const column = document.querySelector("." + priority)
  column.appendChild(task)

  input.value = ""
}

/* ===== MODOS DE LAYOUT ===== */

function modoLista(){
  board.style.flexDirection = "column"
  board.style.flexWrap = "nowrap"
  board.style.justifyContent = "flex-start"
  board.style.gap = "20px"

  columns.forEach(col => {
    col.style.flex = "none"
    col.style.width = "100%"
  })
}

function modoPainel(){
  board.style.flexDirection = "row"
  board.style.flexWrap = "wrap"
  board.style.justifyContent = "space-between"
  board.style.gap = "20px"

  columns.forEach(col => {
    col.style.flex = "1"
    col.style.width = "auto"
  })
}

function modoFoco(){
  board.style.flexDirection = "row"
  board.style.flexWrap = "nowrap"
  board.style.justifyContent = "center"
  board.style.gap = "40px"

  columns.forEach(col => {
    col.style.flex = "0 0 250px"
  })
}

function resetar(){
  board.style.flexDirection = "row"
  board.style.flexWrap = "wrap"
  board.style.justifyContent = "space-between"
  board.style.gap = "20px"

  columns.forEach(col => {
    col.style.flex = "1"
    col.style.width = "auto"
  })
}
