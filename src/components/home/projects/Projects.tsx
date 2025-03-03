import { FC } from 'react';
import project1 from "../../../assets/projects/project1.png";
import project2 from "../../../assets/projects/project2.png";
import ProjectCard from './ProjectCard';

const Projects: FC = () => {
    const projects = [
        {
            id: 1,
            title: "Example Project",
            description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.Create and save new playlists of recommended tracks based on your existing playlists and more.",
            projectImg: project1
        },
        {
            id: 2,
            title: "Example Project",
            description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.Create and save new playlists of recommended tracks based on your existing playlists and more.",
            projectImg: project2
        },
    ];
    return (
        <section className='min-h-screen'>
            <div className='flex flex-col space-y-40'>
                {
                    projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            projectImg={project.projectImg}
                            isOdd={i % 2 !== 0}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;