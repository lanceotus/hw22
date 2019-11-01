# Домашнее задание 22
## Блок успеваемости в личном кабинете, ведомость в кабинете преподавателя

Сайт включает следующие страницы:

* **Главная.** Страница с приветствием (открывается по умолчанию).
* **Курсы.** Страница со списком курсов. Ссылки курсов ведут в никуда.
* **Расписание.** Страница с таблицей, содержащей расписание занятий. Возможна сортировка таблицы по любому полю
(реализовано на Redux), для этого требуется щёлкнуть левой кнопкой мыши на заголовке этого поля, повторный щелчок на
этом же заголовке отсортирует таблицу по убыванию. Индикатор сортировки отображается рядом с текстом заголовка поля.
* **Успеваемость.** Страница с таблицей, содержащей данные об успеваемости учащихся. Ввод текста в поле "Фильтр"
приводит к отбору только тех записей, поле "Учащийся" которых содержит введённый текст.
* **Профиль.** Страница с персональными данными. Значения полей загружаются с бэкенда (если не удаётся загрузить,
отображается сообщение об ошибке и поля остаются пустыми) и после модификации по нажатию кнопки "Сохранить" сохраняются
на бэкенд (в случае неудачи также отображается сообщение об ошибке).
* **Регистрация.** Форма регистрации нового пользователя. Регистрация моделируется сообщением с данными регистрируемого
пользователя, реального обращения к бэкенду не происходит.
* **Войти.** Форма входа. Вход также моделируется сообщением с учётными данными.

Поскольку авторизация не реализована, на странице одновременно присутствуют ссылки "Профиль", "Регистрация" и "Войти",
хотя, разумеется, в реальном приложении будет отображаться либо первая, либо вторая и третья.