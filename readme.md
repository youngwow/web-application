# Список дел

## О приложении

Это шаблон приложения, который я использовал для выполнения домашних заданий, начиная с урока 3.1 с курса "Разработка веб-приложений на Node.js" (https://stepik.org/course/100438/syllabus).
Итогом выполнения всех домашних заданий стало многопользовательское веб-приложение "Список дел".

За основу фронтенд-части приложения взят проект TodoMVC: https://todomvc.com/

Для запуска измените URL MongoDB для подключения: https://github.com/youngwow/web-application/blob/4531c9fd3cf8cac12f851d6a8b9bd124a87d6aa2/src/model/db.js#L8
и https://github.com/youngwow/web-application/blob/4531c9fd3cf8cac12f851d6a8b9bd124a87d6aa2/.env#L6

И GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET в том же файле.

## Что было сделано мной
Реализовал логику
- Получение списка задач
- Получение записи списка дел из базы данных по идентификатору
- Сохранения новой записи списка дел в базу данных
- Обновления записи todo в БД
- Удаления записи списка дел из базы данных
- Представления записи todo в формате todo.txt
- Сохранения импортированных записей в БД на основе указанного файла todo.txt
- Middleware для проверки авторизации запросов к страницам приложения
- Аутентификации через google в приложении


## Полезные команды

* `npm start` - запуск приложения
* `npm test` - запуск юнит-тестов
* `npm run check-homework` - получение проверочных кодов для сдачи домашнего задания
* `npm run watch` - запуск приложения, автоматический перезапуск при изменении исходного кода
* `npm run test-watch` - запуск юнит-тестов, автоматический перезапуск при изменении исходного кода
* `npm run lint` - проверка стиля оформления и статический анализатор кода
