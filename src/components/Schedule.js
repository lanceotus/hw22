import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import './Schedule.css';

const ARROW_UP = ' \u25b2';
const ARROW_DOWN = ' \u25bc';

let lessons = [
    {
      course_name: 'Backend разработчик на PHP',
      lesson_name: 'Подготовка к курсу',
      lesson_time: '2019-05-27 20:00:00'
    },
    {
      course_name: 'Backend разработчик на PHP',
      lesson_name: 'Виртуализация, контейнеры и облачные вычисления',
      lesson_time: '2019-05-30 20:00:00'
    },
    {
      course_name: 'Backend разработчик на PHP',
      lesson_name: 'Linux',
      lesson_time: '2019-06-03 20:00:00'
    },
    {
      course_name: 'Web-разработчик на Python',
      lesson_name: 'Тема 1',
      lesson_time: '2019-07-29 20:00:00'
    },
    {
      course_name: 'Web-разработчик на Python',
      lesson_name: 'Тема 2',
      lesson_time: '2019-08-01 20:00:00'
    },
    {
      course_name: 'Разработчик JavaScript',
      lesson_name: 'Тема 1: Введение в курс Modern JavaScript Frameworks',
      lesson_time: '2019-06-27 20:00:00'
    }
]

class ScheduleTable extends React.Component {
    updateSort(sort_field_number=0) {
        this.props.dispatch({type: 'UPDATE_SCHEDULE_SORT', sort_field_number: sort_field_number});
    }

    static compareByCourseName(a, b) {
        if (a.course_name < b.course_name)
            return -1;
        else if (a.course_name > b.course_name)
            return 1;
        else
            return 0;
    }

    static compareByLessonName(a, b) {
        if (a.lesson_name < b.lesson_name)
            return -1;
        else if (a.lesson_name > b.lesson_name)
            return 1;
        else
            return 0;
    }

    static compareByLessonTime(a, b) {
        let date1 = new Date(a.lesson_time);
        let date2 = new Date(b.lesson_time);
        if (date1 < date2)
            return -1;
        else if (date1 > date2)
            return 1;
        else
            return 0;
    }

    render() {
        const sortSymbol = this.props.sort_reverse ? ARROW_DOWN : ARROW_UP;
        let temp_lessons = this.props.lessons.slice();

        let compareFunction = ScheduleTable.compareByCourseName;
        if (this.props.sort_field_number === 1)
            compareFunction = ScheduleTable.compareByLessonName;
        if (this.props.sort_field_number === 2)
            compareFunction = ScheduleTable.compareByLessonTime;

        let sign = 1;
        if (this.props.sort_reverse)
            sign = -1;
        temp_lessons.sort((a, b) => (sign * compareFunction(a, b)));

        const table_body = temp_lessons.map((lesson) => {
            return <tr className="schedule__tr">
                <td className="schedule__td">{lesson.course_name}</td>
                <td className="schedule__td">{lesson.lesson_name}</td>
                <td className="schedule__td">{dateFormat(lesson.lesson_time, 'dd.mm.yyyy в HH:MM')}</td>
            </tr>
        });
        return (
            <table className="schedule__table">
                <tbody>
                    <tr>
                        <th className="schedule__th" onClick={() => (this.updateSort(0))}>
                            Название курса{this.props.sort_field_number === 0 ? sortSymbol : ''}
                        </th>
                        <th className="schedule__th" onClick={() => (this.updateSort(1))}>
                            Название занятия{this.props.sort_field_number === 1 ? sortSymbol : ''}
                        </th>
                        <th className="schedule__th" onClick={() => (this.updateSort(2))}>
                            Начало занятия{this.props.sort_field_number === 2 ? sortSymbol : ''}
                        </th>
                    </tr>
                    {table_body}
                </tbody>
            </table>
        )
    }
}

export default class Schedule extends React.Component {
    render() {
        return (
            <div className="schedule">
                <div className="schedule__title">Расписание занятий</div>
                <ScheduleTable lessons={this.props.lessons}
                               sort_field_number={this.props.sort_field_number}
                               sort_reverse={this.props.sort_reverse}
                               dispatch={this.props.dispatch}
                />
            </div>
        )
    }

    fetchLessons() {
        return lessons;
    }

    componentDidMount() {
        this.props.dispatch({type: 'UPDATE_SCHEDULE_LESSONS', lessons: this.fetchLessons()});
    }
}

Schedule.propTypes = {
    sort_field_number: PropTypes.number,
    sort_reverse: PropTypes.bool,
    lessons: PropTypes.array
};

Schedule.defaultProps = {
    sort_field_number: 0,
    sort_reverse: false,
    lessons: []
};
