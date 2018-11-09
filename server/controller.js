module.exports = {
  getChores: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance
      .get_chores()
      .then(chores => {
        res.status(200).send(chores);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  addChore: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {
      chore_name,
      chore_description,
      assigned_to,
      complete,
      due_by,
    } = req.body;

    dbInstance
      .add_chore(chore_name, chore_description, assigned_to, complete, due_by)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  deleteChore: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance
      .delete_chore([id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err, { message: 'error deleting chore' });
      });
  },
};
