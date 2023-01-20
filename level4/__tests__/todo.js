/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
// const { CommandCompleteMessage } = require("pg-protocol/dist/messages");
// const todoList = require("../todo");

// const { all, markAsComplete, add } = todoList();

// describe("Todolist Test Suite", () => {
//   // beforeAll(() => {
//   //   add({
//   //     title: "Test todo",
//   //     completed: false,
//   //     dueDate: new Date().toLocaleDateString("en-CA"),
//   //   });
//   // });

//   const formattedDate = (d) => {
//     return d.toISOString().split("T")[0];
//   };
//   var dateToday = new Date();
//   const today = formattedDate(dateToday);
//   const yesterday = formattedDate(
//     new Date(new Date().setDate(dateToday.getDate() - 1))
//   );
//   const tomorrow = formattedDate(
//     new Date(new Date().setDate(dateToday.getDate() + 1))
//   );

//   test("creating a new todo", () => {
//     var todoItemsCount = all.length;
//     expect(todoItemsCount).toBe(0);
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: today,
//     });
//     expect(all.length).toBe(todoItemsCount + 1);
//   });

//   test("Should add new todo", () => {
//     var todoItemsCount = all.length;
//     add({
//       title: "Submit assignment",
//       completed: false,
//       dueDate: yesterday,
//     });
//     expect(all.length).toBe(todoItemsCount + 1);

//     todoItemsCount = all.length;
//     add({
//       title: "Pay rent",
//       completed: true,
//       dueDate: today,
//     });
//     expect(all.length).toBe(todoItemsCount + 1);

//     todoItemsCount = all.length;
//     add({
//       title: "Service Vehicle",
//       completed: false,
//       dueDate: today,
//     });
//     expect(all.length).toBe(todoItemsCount + 1);

//     todoItemsCount = all.length;
//     add({
//       title: "File taxes",
//       completed: false,
//       dueDate: tomorrow,
//     });
//     expect(all.length).toBe(todoItemsCount + 1);

//     todoItemsCount = all.length;
//     add({
//       title: "Pay electric bill",
//       completed: false,
//       dueDate: tomorrow,
//     });
//     expect(all.length).toBe(todoItemsCount + 1);
//   });

//   test("marking a todo as completed", () => {
//     for (var i = 0; i < all.length && all[i].completed == false; i++) {
//       expect(all[i].completed).toBe(false);
//       markAsComplete(i);
//       expect(all[i].completed).toBe(true);
//     }
//   });

//   test("retrieval of overdue items", () => {
//     all.forEach((element) => {
//       if (element.dueDate == yesterday && element.completed == false) {
//         expect(element.dueDate).toBe(yesterday);
//         expect(element.completed).toBe(false);
//       }
//     });
//   });

//   test("retrieval of due today items", () => {
//     all.forEach((element) => {
//       if (element.dueDate == today && element.completed == false) {
//         expect(element.dueDate).toBe(today);
//         expect(element.completed).toBe(false);
//       }
//     });
//   });

//   test("retrieval of due later items", () => {
//     all.forEach((element) => {
//       if (element.dueDate == tomorrow && element.completed == false) {
//         expect(element.dueDate).toBe(tomorrow);
//         expect(element.completed).toBe(false);
//       }
//     });
//   });

//   const toDisplayableList = (list) => {
//     var str = "";
//     for (var i = 0; i < list.length; i++) {
//       if (i > 0) {
//         str += "\n";
//       }
//       if (list[i].completed == true) {
//         str += "[x] ";
//       } else {
//         str += "[ ] ";
//       }
//       if (list[i].dueDate == today) {
//         str += list[i].title;
//       } else {
//         str += list[i].title + " " + list[i].dueDate;
//       }
//     }
//     return str;
//   };

//   toDisplayableList(all);

//   //   test("displayable list", () => {
//   //     expect(toDisplayableList(all)).toBe(`My Todo-list
//   // Overdue
//   // [ ] Submit assignment 2022-11-30
//   // Due Today
//   // [ ] Test todo
//   // [x] Pay rent
//   // [ ] Service Vehicle
//   // Due Later
//   // [ ] File taxes 2022-12-02
//   // [ ] Pay electric bill 2022-12-02`);
//   //   });
// });

const db = require("../models");

describe("Todolist Test Suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test("Should add new todo", async () => {
    const todoItemsCount = await db.Todo.count();
    await db.Todo.addTask({
      title: "Test todo",
      completed: false,
      dueDate: new Date(),
    });
    const newTodoItemsCount = await db.Todo.count();
    expect(newTodoItemsCount).toBe(todoItemsCount + 1);
  });
});
