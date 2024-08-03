'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ Profile }) {
    //   this.hasOne(Profile, {
    //     foreignKey: { name: "userId", allowNull: false },
    //     as: "profile",
    //   });
    // }

    toJSON() {
      return { ...this.get(), password: undefined };
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING(24),
      },
      password: {
        type: DataTypes.STRING(256),
      },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      modelName: 'user',
      tableName: 'user',
    }
  );

  return User;
};
