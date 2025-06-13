import React from 'react';
import { Search, Heart, BookOpen, Globe, Users, FileText } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SearchFilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  categories: string[];
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'All Articles':
      return <FileText className="w-4 h-4" />;
    case 'Health':
      return <Heart className="w-4 h-4" />;
    case 'Education':
      return <BookOpen className="w-4 h-4" />;
    case 'Awareness':
      return <Globe className="w-4 h-4" />;
    case 'Volunteer Stories':
      return <Users className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  categories
}) => {
  return (
    <div className="mb-16">
      {/* All Articles Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Find or list tools that will help designers build to last. Simplify design with our comprehensive
          and carefully vetted library from the start.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
        {/* Enhanced Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-ngo-primary focus:ring-ngo-primary rounded-2xl bg-white shadow-sm transition-all duration-200"
          />
        </div>

        {/* Enhanced Filter Categories */}
        <div className="flex flex-wrap gap-3 overflow-x-auto pb-2 lg:pb-0">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 border-2 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-ngo-primary to-ngo-dark text-white hover:brightness-90 shadow-lg hover:shadow-xl border-0 overflow-hidden'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-ngo-primary hover:text-ngo-primary shadow-sm hover:shadow-md'
              }`}
            >
              {getCategoryIcon(category)}
              <span className="font-medium">{category}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar; 