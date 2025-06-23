import Image from 'next/image';
import Link from 'next/link';

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={project.link}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}