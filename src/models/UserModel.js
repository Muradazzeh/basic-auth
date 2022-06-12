`use strict`
const Users =(sequelize,DataTypes)=>
 sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      UNIQUE:true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  module.exports=Users