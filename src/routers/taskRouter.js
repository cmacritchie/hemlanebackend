const Task = require('../models/task')
const express = require('express')

const router = express.Router()

router.get('/api/task', async (req, res) => {
    try {
        const tasks = await Task.find({}) 
        res.send(tasks)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/api/task', async (req, res) => {
    let { donatingPerson, receivingPerson, taskIndex } = req.body
    
    receivingPerson.tasks.splice(taskIndex, 0, donatingPerson.tasks[taskIndex])
    donatingPerson.tasks.splice(taskIndex, 1)
    
    const [updatedDonor, updatedReceiver ] = await Promise.all([
                                    Task.findOneAndUpdate(
                                        { _id: donatingPerson._id }, 
                                        { tasks: JSON.stringify(donatingPerson.tasks) },
                                        { new: true}),
                                    Task.findOneAndUpdate(
                                        { _id: receivingPerson._id }, 
                                        { tasks: JSON.stringify(receivingPerson.tasks) },
                                        { new: true}),
                                ]);

    try {
        res.send({
            updatedDonor: {
                ...updatedDonor,
                tasks: JSON.parse(updatedDonor.tasks)
            },
            updatedReceiver: {
                ...updatedReceiver,
                tasks: JSON.parse(updatedReceiver.tasks)
            },
        })
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.post('/api/task', async (req, res) => {
    try {
        const { body } = req
        const updatedUser = await Task.findOneAndUpdate(
            { _id: body._id},
            {tasks: JSON.stringify(body.tasks)},
            { new: true }
        )

        res.send({...updatedUser, tasks:JSON.parse(updatedUser.tasks)})
    } 
    catch (e) {
        res.status(400).send(e)
    }
})




module.exports = router