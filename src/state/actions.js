import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const getChores = chores => {
  return {
    type: 'GET_CHORES',
    data: chores,
  };
};

export const addNewChore = chore => {
  return {
    type: 'ADD_CHORE',
    data: axios
      .post(BASE_URL + '/api/add', {
        ...chore,
      })
      .then(res => ({
        type: 'ADD_COMPLETE',
        data: res.data,
      }))
      .catch(err => console.log(err))
  };
};
