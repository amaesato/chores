import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getChores } from '../../state/actions';

import { ChoreCard } from './chore-card';

const BASE_URL = 'http://localhost:4000';

const fetchChores = () => axios.get(BASE_URL + '/api/chores');

class Dashboard extends React.Component {
  componentDidMount() {
    fetchChores().then(res => {
      this.props.dispatchChores(res.data);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.chores !== prevProps.chores) {
      fetchChores().then(res => {
        this.props.dispatchChores(res.data);
      });
    }
  }

  render() {
    return (
      <div className="dashboard-layout">
        {this.props.chores &&
          this.props.chores.map(chore => (
            <ChoreCard key={chore.id} chore={chore} />
          ))}
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    chores: state.chores,
  };
};

const dispatchToProps = dispatch => {
  return {
    dispatchChores: chores => dispatch(getChores(chores)),
  };
};

export default connect(
  stateToProps,
  dispatchToProps,
)(Dashboard);
