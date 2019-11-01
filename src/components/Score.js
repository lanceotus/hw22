import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';

let lessons = [
    {
        student: 'Андреева Мария',
        student_score: '4/5',
    },
    {
        student: 'Большаков Андрей',
        student_score: '9/10',
    },
    {
        student: 'Володькина Ольга',
        student_score: '5/7',
    },
    {
        student: 'Жиляков Олег',
        student_score: '7/10',
    },
    {
        student: 'Жилякова Анна',
        student_score: '4/7',
    },
    {
        student: 'Колчин Евгений',
        student_score: '5/6',
    },
    {
        student: 'Полунин Сергей',
        student_score: '2/6',
    },
    {
        student: 'Терентьев Сергей',
        student_score: '5/5',
    }
]

class ScoreTable extends React.Component {
    render() {
        let temp_lessons = this.props.score_table.slice();

        const table_body = temp_lessons.map((lesson) => {
            return <tr className="score__tr">
                <td className="score__td">{lesson.student}</td>
                <td className="score__td">{lesson.student_score}</td>
            </tr>
        });
        return (
            <table className="score__table">
                <tbody>
                    <tr>
                        <th className="score__th">
                            Учащийся
                        </th>
                        <th className="score__th" width="30%">
                            Успеваемость
                        </th>
                    </tr>
                    {table_body}
                </tbody>
            </table>
        )
    }
}

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
        this.changeFilter = this.changeFilter.bind(this)
    }

    changeFilter(event) {
        this.setState({filter: event.target.value})
    }

    render() {
        const filtered_score_table = this.props.score_table.filter(
            el => el.student.toLowerCase().includes(this.props.filter.toLowerCase()));
        return (
            <div className="score">
                <div className="score__title">Сведения об успеваемости</div>
                <div className="score__input_row_container">
                    <div className="score__input_container">
                        <label>Фильтр</label>
                        <input id="filter_field" className="score__input" placeholder="поиск по имени/фамилии"
                               onChange={this.changeFilter}/>
                    </div>
                </div>
                <ScoreTable score_table={filtered_score_table}/>
            </div>
        )
    }

    fetchScoreTable() {
        return lessons;
    }

    componentDidMount() {
        this.props.dispatch({type: 'UPDATE_SCORE_TABLE', score_table: this.fetchScoreTable()});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Проще, конечно, было ограничиться собственным стейтом компонента, но раз уж это ДЗ на редакс...
        this.props.dispatch({type: 'UPDATE_SCORE_FILTER', filter: this.state.filter});
    }

}

Score.propTypes = {
    filter: PropTypes.string,
    score_table: PropTypes.array
};

Score.defaultProps = {
    filter: '',
    score_table: []
};
