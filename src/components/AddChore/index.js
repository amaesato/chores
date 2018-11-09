import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';
import { addNewChore } from '../../state/actions';

import '../../App.css';

const dispatchToProps = dispatch => ({
  dispatchAdd: chore => dispatch(addNewChore(chore)),
});

class AddChore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chore_name: '',
      chore_description: '',
      assigned_to: '',
      complete: false,
      due_by: '',
    };
  }

  updateField = (key, val) => {
    this.setState({ [key]: val });
  };

  onAddChore = () => {
    this.props.dispatchAdd(this.state);
    this.setState({
      chore_name: '',
      chore_description: '',
      assigned_to: '',
      complete: false,
      due_by: '',
    });
  };

  render() {
    return (
      <div className="addChore-container">
        <Typography use="headline5" tag="h2">
          Add Chore
        </Typography>
        <TextField
          required
          label="chore name"
          onChange={evt => this.updateField('chore_name', evt.target.value)}
        />
        <TextField
          required
          label="chore description"
          onChange={evt =>
            this.updateField('chore_description', evt.target.value)
          }
        />
        <TextField
          required
          label="assign to"
          onChange={evt => this.updateField('assigned_to', evt.target.value)}
        />
        <TextField
          required
          type="date"
          label="due by"
          onChange={evt => this.updateField('due_by', evt.target.value)}
        />

        <span>
          <Button
            tag={Link}
            to="/"
            raised
            theme="secondary-bg"
            style={{ margin: '0.5rem' }}
          >
            Back
          </Button>
          <Button
            raised
            theme="secondary-bg"
            tag={Link}
            to="/"
            onClick={() => {
              this.onAddChore();
            }}
          >
            add chore
          </Button>
        </span>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  dispatchToProps,
)(AddChore);
