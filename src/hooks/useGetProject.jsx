const useGetProject = () => {
  const projects = [
    {
      id: 1,
      name: "Panda Gaiming",
      description:
        "Panda gaming is a solely informative site where it uses Rest type API that brings us all the information about the video games that is later rendered on the page",
      imageUrl: "https://i.postimg.cc/9M8tdfVZ/Captura-de-pantalla-18.png",
      url: "https://gaming-site-nine.vercel.app/",
      technologies: ["HTML", "CSS", "Javascript", "React"],
      typeProject: "Frontend",
    },
    {
      id: 2,
      name: "World Portal",
      description:
        "World portal is a web app to search for information about each country in the world, this was achieved thanks to a grahp type API that provided us with all that information and a mongoDB database to store it",
      imageUrl: "https://i.postimg.cc/L5f59H9j/Captura-de-pantalla-19.png",
      url: "https://app-countries2.vercel.app/",
      technologies: [
        "Javascript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "GraphQL",
      ],
      typeProject: "Fullstack",
    },
    {
      id: 3,
      name: "To-Do List",
      description:
        "To-Do list is a web app that allows you to create a list of tasks and mark them as completed",
      imageUrl: "https://i.postimg.cc/L80r6XCQ/Captura-de-pantalla-20.png",
      url: "https://to-do-list-reto-final.vercel.app/",
      technologies: ["HTML", "CSS", "Javascript"],
      typeProject: "Frontend",
    },
    {
      id: 4,
      name: "Time Shop",
      description:
        "Time shop seeks to simulate a shopping experience in an e-commerce, and it works since we consume a rest type API to bring the products and at the end of the purchase the record is saved in a database (Firebase).",
      imageUrl: "https://i.postimg.cc/Tw0tP2fH/Captura-de-pantalla-22.png",
      url: "https://proyect-react-ivory.vercel.app/",
      technologies: ["HTML", "CSS", "Javascript", "React", "Firebase"],
      typeProject: "Fullstack",
    },
    {
      id: 5,
      name: "Tic-Tac-Toe",
      description:
        "Tic-Tac-Toe is a web app that allows you to play a game of tic-tac-toe",
      imageUrl: "https://i.postimg.cc/4xjnHpBr/Captura-de-pantalla-21.png",
      url: "https://tic-tac-toe-beryl-seven.vercel.app/",
      technologies: ["HTML", "CSS", "Javascript"],
      typeProject: "Frontend",
    },
    {
      id: 6,
      name: "Razer page",
      description:
        "a landing page that somewhat simulates the page of a technology brand called 'Razer', in this project bootstrap was used for the layout",
      imageUrl: "https://i.postimg.cc/W3XbwyMf/Captura-de-pantalla-23.png",
      url: "https://razer-colombia.netlify.app/",
      technologies: ["HTML", "CSS", "Bootstrap"],
      typeProject: "Frontend",
    },
    {
      id: 7,
      name: "Bingo",
      description: "Bingo is a web application that allows you to play bingo in an interactive and pleasant way, the big 3 HTML, CSS and JavaScript were used",
      imageUrl: "https://i.postimg.cc/RFSRKkRb/Captura-de-pantalla-26.png",
      url: "https://bingo-kappa-lovat.vercel.app/",
      technologies: ["HTML", "CSS", "Javascript"],
      typeProject: "Frontend",
    }
  ];

  return { projects };
};

export default useGetProject;
