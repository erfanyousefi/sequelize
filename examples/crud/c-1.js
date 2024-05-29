const {
    DataTypes
} = require("@sequelize/core");
const {
    sequelize
} = require("./../../configs/db.config")
const User = sequelize.define('user', {
    fullname: DataTypes.STRING(50),
    username: {
        type: DataTypes.STRING(50),
        unique: true
    },
    password: DataTypes.STRING(16)
}, {
    timestamps: false,
    freezeTableName: true,
});

async function main() {
    await User.sync({
        force: true
    })
    const user1 = await User.create({
        username: "erfanyousefi",
        fullname: "Erfan Usefi",
        password: "1243456"
    }, {
        fields: ["fullname", "username"]
    });
    console.log(user1.dataValues);
    //---------------------------------
    const user2 = User.build({
        fullname: "Arsaln Ahmadi",
        username: "arsalan332",
        password: "fdg346"
    });
    console.log(user2 instanceof User);
    await user2.save();
    console.log(user2.dataValues);
    //---------------------------------
    const result = await User.bulkCreate([{
            fullname: "ali 1",
            username: "ali1",
            password: "2232345"
        },
        {
            fullname: "ali 2",
            username: "ali2",
            password: "fgb45"
        },
        {
            fullname: "ali 3",
            username: "ali3",
            password: "456456"
        },
        {
            fullname: "ali 4",
            username: "ali4",
            password: "ergedrg"
        },
        {
            fullname: "ali 5",
            username: "ali5",
            password: "dfb"
        },
        {
            fullname: "ali 6",
            username: "ali6",
            password: "dfgb"
        },
        {
            fullname: "ali 7",
            username: "ali7",
            password: "gfhf"
        },
    ]);
    let usersList = result.map(user => user.dataValues)
    console.log(usersList);
    //---------------------------------
    const [user4, created] = await User.findOrCreate({
        where: {username: "moienmoradi12"}, 
        defaults: {
            fullname: "Moien Moradi",
            password: "65344wde5fg1"
        },
        fields: ["fullname"]
    });
    console.log(user4.dataValues);
}
main();