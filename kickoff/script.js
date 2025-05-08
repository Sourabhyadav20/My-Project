function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <button onclick="removeTask(this)">Delete</button>
    `;
    li.onclick = () => li.classList.toggle('done');
    document.getElementById('task-list').appendChild(li);
    input.value = '';
  }
  
  function removeTask(btn) {
    btn.parentElement.remove();
  }