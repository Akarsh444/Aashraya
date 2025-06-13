import React from 'react';
import { Calendar, User, Heart, BookOpen, Globe, Users, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface Blog {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

interface BlogCardProps {
  blog: Blog;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Health':
      return <Heart className="w-4 h-4" />;
    case 'Education':
      return <BookOpen className="w-4 h-4" />;
    case 'Awareness':
      return <Globe className="w-4 h-4" />;
    case 'Volunteer Stories':
      return <Users className="w-4 h-4" />;
    default:
      return <BookOpen className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Health':
      return 'bg-red-100 text-red-700';
    case 'Education':
      return 'bg-blue-100 text-blue-700';
    case 'Awareness':
      return 'bg-green-100 text-green-700';
    case 'Volunteer Stories':
      return 'bg-purple-100 text-purple-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="group overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 h-full">
      {/* Featured Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6 flex flex-col">
        {/* Category and Meta Info */}
        <div className="flex items-center justify-between mb-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
            {getCategoryIcon(blog.category)}
            {blog.category}
          </div>
        </div>

        {/* Date and Read Time */}
        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {blog.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-ngo-primary transition-colors duration-200">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
          {blog.description}
        </p>

        {/* Author and Read More Button */}
        <div className="flex items-center justify-between gap-2 text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <User className="w-3 h-3" />
            <span>{blog.author}</span>
          </div>
          <Link to={`/blog/${blog.id}`}>
            <Button variant="link" className="text-ngo-primary text-xs font-medium px-0 hover:underline">
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard; 