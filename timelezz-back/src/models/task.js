'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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

  Task.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        field: 'user_id',
      },
      name: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(50),
      },
      description: {
        type: DataTypes.STRING(500),
      },
    },
    {
      sequelize: sequelize,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      modelName: 'task',
      tableName: 'task',
    }
  );

  return Task;
};
