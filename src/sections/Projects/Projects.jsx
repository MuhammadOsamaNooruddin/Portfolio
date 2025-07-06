import Project_Cards from "../../components/Project_Cards";

const Projects = () => {
    return (
        <div className="c-space max-w-7xl mx-auto mt-10 md:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center sm:text-start ">Projects</h2>
            <p className="text-lg text-gray-600 mb-4">
                Here are some of the projects I have worked on. Some of these are personal projects, while others are part of my professional wok, so can't share the code or link to the live version. Here are some of the projects I have worked on. Some of these are personal projects, while others are part of my professional work, so I can't share the code or link to the live version. Links of my personal projects are available on my GitHub profile.
            </p>
            <Project_Cards />
        </div>
    )

}

export default Projects;