/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    const od = [];
    const yesterday = new Date(Date.now() - 864e5);
    all.forEach((element) => {
      const date = JSON.stringify(yesterday).substring(1, 11);
      if (element.dueDate === date) {
        od.push(element);
      }
    });
    return od;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    const dt = [];
    const today = new Date(Date.now());
    all.forEach((element) => {
      const date = JSON.stringify(today).substring(1, 11);
      if (element.dueDate === date) {
        dt.push(element);
      }
    });
    return dt;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    const dl = [];
    const tomorrow = new Date(Date.now() + 864e5);
    all.forEach((element) => {
      const date = JSON.stringify(tomorrow).substring(1, 11);
      if (element.dueDate === date) {
        dl.push(element);
      }
    });
    return dl;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    let str = "";
    for (let i = 0; i < list.length; i++) {
      if (i > 0) {
        str += "\n";
      }
      if (list[i].completed == true) {
        str += "[x] ";
      } else {
        str += "[ ] ";
      }
      const today = new Date(Date.now());
      const date = JSON.stringify(today).substring(1, 11);
      if (list[i].dueDate == date) {
        str += list[i].title;
      } else {
        str += list[i].title + " " + list[i].dueDate;
      }
    }
    return str;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

const dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
const overdues = todos.overdue();
const formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
const itemsDueToday = todos.dueToday();
const formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
const itemsDueLater = todos.dueLater();
const formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
