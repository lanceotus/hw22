import {connect} from 'react-redux';
import Score from "../components/Score"

const initState = {
    filter: '',
    score_table: []
}

function mapStateToProps(state=initState) {
    return {
        score_table: state.score.score_table,
        filter: state.score.filter
  };
}

export function reducerScore (state=initState, action) {
    switch (action.type) {
        case 'UPDATE_SCORE_TABLE': return {
                score_table: action.score_table,
                filter: state.filter
            };
        case 'UPDATE_SCORE_FILTER': return {
                score_table: state.score_table,
                filter: action.filter
            };
        default: return state;
    }
}

export default connect(mapStateToProps)(Score);
