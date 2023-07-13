import proj1 from "../assets/Project1.png";
import proj2 from "../assets/Project2.png";
import proj3 from "../assets/Project3.png";

const ProjectCardData = [
    {
        imgsrc: proj1,
        title: "Technicaly Social API",
        text: "This is a social network API that allows users to interact with various features such as creating, updating, and deleting users, thoughts, reactions, and friend connections. The API is built using Node.js, Express.js, and MongoDB with Mongoose as the ODM.",
        view: "https://photos.app.goo.gl/JyFSGB6EPSSf5iFi8",
        source: "https://github.com/Jadyngg19/Technically-Social-API"
    },

    {
        imgsrc: proj2,
        title: "My Personal Notepad",
        text: "This is a note-taking application that allows you to create, edit, and manage notes in a user-friendly interface.",
        view: "https://my-personal-notepad.herokuapp.com/",
        source: "https://github.com/Jadyngg19/My-Personal-Notepad"
    },

    {
        imgsrc: proj3,
        title: "Coder's Corner",
        text: "Coder's Corner is a CMS-style blog site that allows users to create, read, update, and delete blog posts. Users can sign up, sign in, and log out to manage their blog posts. The site also supports leaving comments on blog posts.",
        view: "https://coders-corner.herokuapp.com/",
        source: "https://github.com/Jadyngg19/Coders-Corner"
    }
];

export default ProjectCardData;