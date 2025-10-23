//esto es lo segundo y es la logica

import User from '../models/User.js';
import jwt from 'jsonwebtoken';

//Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7h',
    }
    );
}

// Resgister
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //verificacion si el usuario ya existe
        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ message: 'Usuario existente' });
        const user = await User.create({ username, email, password });
        res.status(201).json({
            user: {
                id: user._id,
                username: user.username,
                token: generateToken(user._id)
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

//Login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        res.json({
            id: user._id,
            username: user.username,
            token: generateToken(user._id)
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
}