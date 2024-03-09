import { Sequelize, Model } from "sequelize";
import { db } from '../../db/db.js';
import { Record } from "./record.model.js";


export class Task extends Model { }

Task.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.UUID,
        field: 'user_id'
    },
    name: {
        type: Sequelize.STRING(256),
    },
    code: {
        type: Sequelize.STRING(50),
    },
    description: {
        type: Sequelize.STRING(500),
    }
}, {
    sequelize: db,
    // timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    modelName: 'task',
    tableName: 'task',
})

Task.hasMany(Record)
Record.belongsTo(Task)