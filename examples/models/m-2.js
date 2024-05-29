const { DataTypes } = require("@sequelize/core");
const {sequelize} = require("./../../configs/db.config")
const User = sequelize.define('user', {
    username: DataTypes.STRING, //varchar
    birthday: DataTypes.DATE,
    age: DataTypes.INTEGER
}, {
    modelName: "user",
    timestamps: true,
    updatedAt: "update_date",
    createdAt: false,
    freezeTableName: true,
    tableName: "user-of-node"
});

async function main() {
    await User.sync({force: true})
    const user = await User.create({
        username: "erfanyousefi",
        birthday: new Date("1996-02-22"),
        age: 28
    });
    console.log(user.dataValues);
}
main();