const Task = require('../models/task')


const migration = async () => {
    const user1 = new Task(    {
        name:'Mike',
        tasks:'["apple", "banana", "orange"]'
    },)
    
    const user2 = new Task(    {
        name:'Craig',
        tasks:'["celery", "carrot", "bike"]'
    })
    
    
    const user3 = new Task(     {
                name:'Steve',
                tasks:'["puck", "stick", "skates"]'
            })
    
    
    await user1.save()
    await user2.save()
    await user3.save()

} 

module.exports = migration