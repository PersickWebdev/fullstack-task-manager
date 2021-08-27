const { Router } = require('express');
const UserTaskManager = require('../models/UserTaskManager');
const router = Router();

router.patch(
    '/user-edit',
    async (request, response) => {
        try {
            const { firstName, lastName, age, email } = request.body;
            await UserTaskManager.updateOne({ email }, { $set: { firstName, lastName, age } });

            return response.status(201).json({
                message: 'The user has been successfully updated'
            });

        } catch(error) {
            return response.status(500).json({
                message: 'Server error ...'
            });
        }
    }
)

router.delete(
    '/user-delete',
    async (request, response) => {
        try {
            const { userId } = request.body;
            
            await UserTaskManager.deleteOne({ '_id': userId });

            return response.status(200).json({
                message: 'The user has been deleted'
            });
        } catch(error) {
            return response.status(500).json({
                message: 'Internal server error'
            });
        }
    }
)

module.exports = router;