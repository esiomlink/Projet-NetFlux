const Role = require('../model/role');

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.getAll();
    res.status(200).json(roles);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving roles');
  }
};

const getRole = async (req, res) => {
  try {
    const { id } = req.params;
    const [role] = await Role.getOne(id);
    res.status(200).json(role);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving role infos');
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    await Role.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting role');
  }
};

const createRole = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Role.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating role');
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Role.udpate(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating role');
  }
};

module.exports = {
  getAllRoles,
  deleteRole,
  createRole,
  getRole,
  updateRole,
};
