import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  category: string;
  image: string;
}

const ProjectCard = ({ title, description, status, category, image }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    return status === "Ongoing" ? "bg-green-600" : "bg-blue-600";
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education":
        return "bg-blue-600";
      case "Healthcare":
        return "bg-red-600";
      case "Environment":
        return "bg-green-700";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Tags overlaid on image */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Badge className={`${getCategoryColor(category)} text-white px-3 py-1 text-sm font-medium shadow-lg opacity-90 transition-all duration-200 ease-in-out hover:shadow-2xl hover:brightness-125 hover:opacity-100`}>
            {category}
          </Badge>
          <Badge className={`${getStatusColor(status)} text-white px-3 py-1 text-sm font-medium shadow-lg opacity-90 transition-all duration-200 ease-in-out hover:shadow-2xl hover:brightness-125 hover:opacity-100`}>
            {status}
          </Badge>
        </div>
      </div>
      
      {/* Content Section Below Image */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard; 