<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> 815c4be26ec6dc5d89ea080296da2a6fd11f5501
const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class Todo extends Model {
  static async addTask(params) {
    return await Todo.create(params);
  }
<<<<<<< HEAD

  displayableString() {
    return `${this.completed ? "[x]" : "[ ]"} ${this.id}. ${this.title} - ${
      this.dueDate
    }`;
  }
=======
>>>>>>> 815c4be26ec6dc5d89ea080296da2a6fd11f5501
}

Todo.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  }
);

Todo.sync();
module.exports = Todo;
