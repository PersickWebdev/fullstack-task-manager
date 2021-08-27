const { Router } = require('express');
const UserTaskManager = require('../models/UserTaskManager');
const router = Router();

router.post(
    '/add',
    async (request, response) => {
        try {
            const { email, taskId, description, priority, isCompleted } = request.body;
            const user = await UserTaskManager.findOne({ email });

            if (user) {
                const newTask = {
                    taskId,
                    description,
                    priority,
                    isCompleted
                }

                await UserTaskManager.findOneAndUpdate({ email }, { $push: { tasks: newTask } });

                return response.status(201).json({
                   message: `Task '${description}' has been successfully added`
                });
            } else {
                return response.status(404).json({
                    message: 'No such user found'
                });
            }

        } catch {
            return response.status(500).json({
                message: 'Internal server error ... Try again later'
            });
        }
    }
);

module.exports = router;