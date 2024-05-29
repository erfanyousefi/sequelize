const { DataTypes } = require("@sequelize/core");
const {sequelize} = require("./../../configs/db.config")
const Blog = sequelize.define('blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: "slug_idx"
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "content of blog"
    },
    author: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    show: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

async function main() {
    await Blog.sync({force: true})
    const blog = await Blog.create({
        title: "NodeJS Structure",
        slug: "nodejs-structure",
        content: "NodeJs Structure is ...",
        image: "https://mysite/image.png",
        author: "erfan yousefi",
    });
    blog.show = true;
    await blog.save();
    console.log(blog.dataValues);
    await blog.reload();
    console.log(blog.dataValues);
}
main();