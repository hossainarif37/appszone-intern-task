import { FC } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../../constants/projectData';

const Projects: FC = () => {

    return (
        <section className='min-h-screen'>
            <div className='flex flex-col space-y-20 md:space-y-36'>
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