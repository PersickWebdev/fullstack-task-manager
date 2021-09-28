const { Router } = require('express');
const UserTaskManager = require('../models/UserTaskManager');
const router = Router();

router.post(
    '/task-add',
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
                save();
                return response.status(201).json({
                    message: `Task '${description}' has been successfully added`,
                    addedTask: newTask
                });
            } else {
                return response.status(404).json({
                    message: 'No such user found. Cannot add new task'
                });
            }

        } catch {
            return response.status(500).json({
                message: 'Internal server error ... Try again later'
            });
        }
    }
);

router.patch(
    '/task-edit',
    async (response, request) => {
        try {
            const { email, taskId, description, priority, isCompleted } = request.body;

            const user = await UserTaskManager.findOne({ email });

            if (user) {
                const updatedTask = {
                    taskId,
                    description,
                    priority,
                    isCompleted
                }

                await UserTaskManager.findOneAndUpdate({ email }, { $set: { tasks: {'_id': updatedTask} } });

                return response.status(201).json({
                    message: 'Task has been successfully updated'
                });
            } else {
                return response.status(404).json({
                    message: 'No such task found'
                });
            }

        } catch (error) {
            return response.status(500).json({
                message: 'Internal server error ... Try again later'
            });
        }
    }
);

router.delete(
    '/task-delete',
    async (request, response) => {
        try {
            const { email, taskId } = request.body;
            console.log(request.body);
            const user = await UserTaskManager.findOne({ email });

            if (user) {
                const updatedUser = await UserTaskManager.findOneAndUpdate({ email }, { $pull: { tasks: {'_id': taskId} }});
                return response.status(200).json({
                    message: 'Task has been successfully deleted',
                    updatedUser
                });
            }
        } catch (error) {
            return response.status(500).json({
                message: 'Internal server error ... Try again later'
            });
        }
    }
);

router.delete(
    '/task-delete-all',
    async(request, response) => {
        try {
            const { email } = request.body;
            const user = await UserTaskManager.findOne({ email });
            if (user) {
                const updatedUser = await UserTaskManager.findOneAndUpdate({ email }, { $set: { tasks: [] } });
                return response.status(200).json({
                    message: 'All tasks have been successfully deleted',
                    updatedUser
                });
            }
        } catch (error) {
            return response.status(500).json({
                message: 'Internal server error ... Try again later'
            });
        }
    }
)

module.exports = router;