const express = require('express');
const { Todo } = require('../mongo');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
    req.todo = await Todo.findById(id);
    if (!req.todo) return res.sendStatus(404);
  } catch (e) {
    return res.status(400).send('Malformed id!');
  }
  next();
};

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const update = {};

  Object.keys(req.body).forEach((key) => {
    if (['text', 'done'].includes(key)) {
      update[key] = req.body[key];
    }
  });

  try {
    await req.todo.update(update);
  } catch (e) {
    return res.status(400).send(e.message);
  }

  res.send({ ...res.todo, ...update });
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
