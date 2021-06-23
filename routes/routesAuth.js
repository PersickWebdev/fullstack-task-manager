const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const UserTaskManager = require('../models/UserTaskManager');
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Enter correct email').isEmail(),
        check('password', 'At least 6 symbols').isLength({ min: 6 })
    ],
    async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect login data'
                });
            }

            const { firstName, lastName, age, email, password, tasks } = request.body;

            const candidate = await UserTaskManager.findOne({ email });
            if (candidate) {
                return response.status(400).json({ 
                    message: 'User already exists'
                });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new UserTaskManager({
                firstName,
                lastName,
                age,
                email, 
                password: hashedPassword,
                tasks: []
            });
            await user.save();

            response.status(201).json({
                message: 'User has been successfully created'
            });

        } catch(error) {
            return response.status(500).json({
                message: 'Internal server error ...'
            });
        }
    }
);

router.post(
    '/login',
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', 'Enter correct password').exists()
    ],
    async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect login data'
                });
            }

            const { email, password } = request.body;

            const user = await UserTaskManager.findOne({ email });
            if (!user) {
                return response.status(400).json({
                    message: 'User not found'
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return response.status(400).json({
                    message: 'Incorrect data'
                });
            }

            const token = jwt.sign(
                { userId: user.id},
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );

            response.status(201).json({
                token,
                userId: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                email: user.email,
                tasks: user.tasks
            });

        } catch(error) {
            return response.status(500).json({
                message: 'Internal server error ...'
            });
        }
    }
)

module.exports = router;