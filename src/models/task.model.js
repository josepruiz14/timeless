'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Task.init({
    id: {
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: sequelize.UUID,
      field: 'user_id'
    },
    name: {
      type: sequelize.STRING(256),
      allowNull: false,
    },
    code: {
      type: sequelize.STRING(50),
    },
    description: {
      type: sequelize.STRING(500),
    }
  }, {
    sequelize: db,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    modelName: 'task',
    tableName: 'task',
  })

  Task.hasMany(Record)
  Record.belongsTo(Task)
  return Task;
};