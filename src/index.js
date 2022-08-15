import './style.css';

const ToDo = [
  {
    description: 'Write Notes',
    completed: 'false',
    index: 0,
  },
  {
    description: 'Early exercise',
    completed: 'true',
    index: 1,
  },
  {
    description: 'Do laundry',
    completed: 'true',
    index: 2,
  },
  {
    description: 'Buy some groceries',
    completed: 'false',
    index: 3,
  },
  {
    description: 'Visit Grandma',
    completed: 'false',
    index: 4,
  },
];

const rotate = document.querySelector('.refresh');
rotate.addEventListener = ('click', () => {
  rotate.classList.toggle('active');
});

const todoTask = document.querySelector('.todo-tasks');

const createElement = (task) => {
  const elementDiv = document.createElement('div');
  elementDiv.className = 'todo-lists the-elements';
  const checkBox = document.createElement('input');
  const todoParagraph = document.createElement('p');

  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = task.completed;
  todoParagraph.innerHTML = task.description;
  elementDiv.append(checkBox, todoParagraph);
  todoTask.append(elementDiv);
};

ToDo.forEach((task) => {
  createElement(task);
});
