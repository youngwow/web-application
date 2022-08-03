const { TodoTxtItem, TodoTxt } = require('jstodotxt')

/**
 * Возвращает строковое (todo.txt) представление записи todo
 * @param {import('./todo').TodoEntry} todo - запись todo для эспорта
 * @returns {string} - представление записи todo в формате todo.txt
 */
function exportTodoTxt (todo) {
  const todotxt = new TodoTxtItem()
  /*
    TODO [Урок 4.5]: Заполните объект todotxt

    Используйте значения аргумента todo, чтобы заполнить поля объекта todotxt
  */
  todotxt.text = todo.title;
  todotxt.complete = todo.completed; // ?? false;
  todotxt.completed = todo.completedAt; //?? null;
  todotxt.email = todo.email; // ?? null;
  return todotxt.toString() + '\n';
}

/**
 * Возвращает массив записей todo, соответствующих данному файлу todo.txt
 * @param {string} fileContent - содержимое todo.txt
 * @returns {Object[]} - массив записей todo
 */
function importTodoTxt (fileContent) {
  const todotxts = TodoTxt.parse(fileContent.trim())
  const result = todotxts.map(todotxt => ({
    title: todotxt.text,
    completed: todotxt.complete,
    completedAt: todotxt.completed,
    //email: todotxt.email
  }))
  return result
}

module.exports = {
  exportTodoTxt,
  importTodoTxt
}
