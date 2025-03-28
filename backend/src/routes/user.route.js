const express = require('express')
const router = express.Router()
const database = require('../database/database')

router.post('/', async (req, res) => {
  try{
    await database.user.create({
      data: {
        ...req.body
      }
    })
    res.status(201).send()
  } catch (ex) {
    console.error('Error creating user:', ex);
    res.status(500).send({ error: 'An error occurred while creating the user.' });
  }
})

router.put('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    await database.user.update({
      where: {
        id: Number(user_id) 
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        taxid: req.body.taxid,
        phoneNumber: req.body.phoneNumber,
        updatedAt: new Date() 
      }
    });
    res.status(200).send();
  } catch (ex) {
    console.error('Error updating user:', ex);
    res.status(500).send({ error: 'An error occurred while updating the user.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await database.user.findMany();
    res.status(200).send(users);
  } catch (ex) {
    console.error('Error fetching users:', ex);
    res.status(500).send({ error: 'An error occurred while fetching users.' });
  }
});

router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await database.user.findUnique({
      where: { id: Number(user_id) }
    });
    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }
    delete user['password']
    
    res.status(200).send(user);
  } catch (ex) {
    console.error('Error fetching user:', ex);
    res.status(500).send({ error: 'An error occurred while fetching the user.' });
  }
});

const registerRoute = (app) => {
    app.use('/user', router)
}

module.exports = registerRoute