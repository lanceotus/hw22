import {connect} from 'react-redux';
import Schedule from "../components/Schedule"

const initState = {
    sort_field_number: 0,
    sort_reverse: false,
    lessons: []
}

function mapStateToProps(state=initState) {
    return {
        lessons: state.schedule.lessons,
        sort_field_number: state.schedule.sort_field_number,
        sort_reverse: state.schedule.sort_reverse
  };
}

export function reducerSchedule (state=initState, action) {
    switch (action.type) {
        case 'UPDATE_SCHEDULE_LESSONS': return {
                sort_field_number: state.sort_field_number,
                sort_reverse: state.sort_reverse,
                lessons: action.lessons
            };
        case 'UPDATE_SCHEDULE_SORT': let new_sort_field_number = action.sort_field_number;
            let new_sort_reverse = false;
            let new_lessons = state.lessons;
            if (new_sort_field_number === state.sort_field_number)
                new_sort_reverse = !state.sort_reverse;
            return {
                sort_field_number: new_sort_field_number,
                sort_reverse: new_sort_reverse,
                lessons: new_lessons
            };
        default: return state;
    }
}

export default connect(mapStateToProps)(Schedule);
