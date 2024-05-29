const { Model, DataTypes } = require("@sequelize/core");
const {sequelize} = require("./../../configs/db.config")
class User extends Model {}
User.init({
    username: DataTypes.STRING, //varchar
    birthday: DataTypes.DATE
}, {
    sequelize,
    modelName: "user",
    timestamps: true,
    updatedAt: "update_date",
    createdAt: false
});

async function main() {
    await User.sync({force: true})
    const user = await User.create({
        username: "erfanyousefi",
        birthday: new Date("1996-02-22")
    });
    console.log(user.dataValues);
}
main();