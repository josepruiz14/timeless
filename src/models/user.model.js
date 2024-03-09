import { Sequelize, Model } from "sequelize";
import { db } from '../../db/db.js';
import { Task } from "./task.model.js";

export class User extends Model { }

User.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(24),
    },
    password: {
        type: Sequelize.STRING(256),
    }
}, {
    sequelize: db,
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    modelName: 'user',
    tableName: 'user',
})

Task.belongsTo(User);
User.hasMany(Task)