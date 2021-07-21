const Comment = require('../model/comment');

const getAllComments = async (req, res) => {
  console.log('Comment:', Comment)
  try {
    const comments = await Comment.getAll();
    console.log(comments);
    res.status(200).json(comments[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving comments');
  }
};

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const [comment] = await Comment.getOne(id);
    res.status(200).json(comment[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving comment infos');
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting comment');
  }
};

const createComment = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Comment.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating comment');
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Comment.udpate(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating comment');
  }
};

module.exports = {
  getAllComments,
  deleteComment,
  createComment,
  getComment,
  updateComment,
};
