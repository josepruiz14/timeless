import { Sequelize, Model } from "sequelize";
import { db } from '../../db/db.js';

export class Record extends Model { }

Record.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    taskId:{
        type : Sequelize.UUID,
        field: 'task_id'
    },
    start:{
        type: Sequelize.TIME,
    },
    end:{
        type: Sequelize.TIME,
    },
    date:{
        type: Sequelize.DATEONLY,
    }
}, {
    sequelize: db,
    // timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    modelName: 'record',
    tableName: 'record',
})