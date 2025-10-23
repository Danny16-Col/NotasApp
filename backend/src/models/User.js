// esto es lo primero que se hace 
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// antes de guardar el usuario, hasheamos la contraseña
userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    const salt = bcryptjs.genSaltSync(10);
    this.password = bcryptjs.hashSync(this.password, salt);
    next();
});

// método para comparar contraseñas
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcryptjs.compareSync(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;