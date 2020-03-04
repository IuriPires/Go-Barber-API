import User from '../models/Users'

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({ where: { email: req.body.email } });

        if(userExists) {
            return res.status(400).json({ error: 'User already exist' });
        }
        const user = User.create(req.body);

        return res.json(user);
    }
}

export default new UserController();