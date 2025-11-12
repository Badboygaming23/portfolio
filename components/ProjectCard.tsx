import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
  onPreview: (url: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  const isResumeBuilder = project.id === 'project-6';
  const buttonText = isResumeBuilder ? "Preview & Export PDF" : "Preview Website";

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-[1.02] group"> {/* Added group for icon hover */}
      <img 
        src={project.imageUrl || 'https://via.placeholder.com/400x200?text=Project+Image'} 
        alt={`Screenshot of ${project.title}`} 
        className="w-full h-48 object-cover" 
        loading="lazy"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-3 flex-grow min-h-[60px]">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="mb-4">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="inline-block bg-slate-700 text-indigo-300 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={() => onPreview(project.url, project.title)}
          className="mt-auto w-full inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 text-sm active:scale-95 active:brightness-90"
          aria-label={`${buttonText}: ${project.title}`}
        >
          <span>{buttonText}</span>
          <ExternalLinkIcon className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;