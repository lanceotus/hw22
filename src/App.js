import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter} from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import CoursesList from "./components/CoursesList";
import Schedule from "./containers/Schedule";
import Score from "./containers/Score";
import {Route, Switch} from 'react-router-dom';

let logotext = 'Онлайн-обучение';

let menu = {
  'left': [
    {
      'menu_item_link': '',
      'menu_item_text': 'Главная'
    },
    {
      'menu_item_link': 'courses',
      'menu_item_text': 'Курсы'
    },
    {
      'menu_item_link': 'schedule',
      'menu_item_text': 'Расписание'
    },
    {
      'menu_item_link': 'score',
      'menu_item_text': 'Успеваемость'
    }
  ],
  'right': [
    {
      'menu_item_link': 'profile',
      'menu_item_text': 'Профиль'
    },
    {
      'menu_item_link': 'register',
      'menu_item_text': 'Регистрация'
    },
    {
      'menu_item_link': 'login',
      'menu_item_text': 'Войти'
    }
  ]
};

let courses = [
  {
    'course_link': 'course1',
    'course_name': 'Backend разработчик на PHP',
    'start_date': '27.05.2019'
  },
  {
    'course_link': 'course2',
    'course_name': 'Web-разработчик на Python',
    'start_date': '29.07.2019'
  },
  {
    'course_link': 'course3',
    'course_name': 'Разработчик JavaScript',
    'start_date': '27.06.2019'
  },
  {
    'course_link': 'course4',
    'course_name': 'Разработчик Python',
    'start_date': '08.07.2019'
  },
  {
    'course_link': 'course5',
    'course_name': 'Разработчик C++',
    'start_date': '27.06.2019'
  },
  {
    'course_link': 'course6',
    'course_name': 'Android-разработчик. Продвинутый курс',
    'start_date': '27.06.2019'
  },
  {
    'course_link': 'course7',
    'course_name': 'Android-разработчик. Базовый курс',
    'start_date': '26.08.2019'
  },
];

let copyright = '© 2019 Роман Храповицкий';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Header logotext={logotext} menu={menu}/>
                    <main>
                        <Switch>
                            <Route exact path='/' render={() => <h1>Добро пожаловать!</h1>}/>
                            <Route path='/courses' render={() => <CoursesList courses={courses}/>}/>
                            <Route path='/schedule' render={() => <Schedule/>}/>
                            <Route path='/score' render={() => <Score/>}/>
                            <Route path='/profile' component={ProfilePage}/>
                            <Route path='/register' component={RegisterForm}/>
                            <Route path='/login' component={LoginForm}/>
                        </Switch>
                    </main>
                    <Footer copyright={copyright}/>
                </div>
            </BrowserRouter>
        );
    }
}
