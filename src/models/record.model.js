'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Record.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV4
    },
    taskId: {
      type: sequelize.UUID,
      field: 'task_id'
    },
    start: {
      type: sequelize.TIME,
    },
    end: {
      type: sequelize.TIME,
    },
    date: {
      type: sequelize.DATEONLY,
    },
    createdAt: {
      allowNull: false,
      type: sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};