 function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
          }
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
         len: [1,1000]
        }
      },
    });
    return Post;
  };


  module.exports = Post
 
 