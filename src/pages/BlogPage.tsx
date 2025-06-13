import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import BlogCard from '../components/BlogCard';
import SearchFilterBar from '../components/SearchFilterBar';

export const blogData = [
  {
    id: 1,
    title: "5 Simple Habits to Boost Your Mental Wellness Daily",
    description: "Discover easy ways to take care of your mental health without overhauling your routine. These simple, science-backed habits can help you stay balanced and focused.",
    category: "Health",
    date: "Feb 12, 2023",
    readTime: "5 min read",
    author: "Dr. Neha Sharma",
    image: "https://images.unsplash.com/photo-1588776814546-ec7e25944d63?w=400&h=240&fit=crop"
  },
  {
    id: 8,
    title: "Nutrition on a Budget: Healthy Eating for Every Wallet",
    description: "Eating healthy doesn't have to be expensive. Learn smart tips to plan nutritious meals even on the tightest budgets — perfect for students, families, and communities.",
    category: "Health",
    date: "Mar 08, 2023",
    readTime: "6 min read",
    author: "Raj Mehta",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400&h=240&fit=crop"
  },
  {
    id: 3,
    title: "The Rise of AI in Everyday Life: Transforming the Norm",
    description: "Ever noticed how your morning routine has subtly changed over the years? From the moment you ask your smart speaker for the weather forecast to the algorithm...",
    category: "Awareness",
    date: "Jan 24, 2023",
    readTime: "7 min read",
    author: "Emma Davis",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=240&fit=crop"
  },
  {
    id: 2,
    title: "Climate Change and You: What Every Citizen Should Know",
    description: "From rising sea levels to unpredictable weather, the climate crisis is personal. Learn how your daily actions can make a difference in the global fight for sustainability.",
    category: "Awareness",
    date: "Apr 15, 2023",
    readTime: "6 min read",
    author: "Arjun Nair",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=240&fit=crop"
  },
  {
    id: 5,
    title: "Bridging the Digital Divide: Empowering Rural Learners",
    description: "Explore how technology can bridge the gap in education access for students in underserved communities — and what steps are being taken to make it happen.",
    category: "Education",
    date: "May 10, 2023",
    readTime: "5 min read",
    author: "Kavya Iyer",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=240&fit=crop"
  },
  {
    id: 7,
    title: "The Future of Learning: Skills That Matter Most in 2025",
    description: "From critical thinking to digital literacy, learn which core skills are becoming essential for students and young professionals in the evolving job landscape.",
    category: "Education",
    date: "June 01, 2023",
    readTime: "7 min read",
    author: "Tanvi Joshi",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=240&fit=crop"
  },
  {
    id: 6,
    title: "From College to Community: My Weekend Teaching Journey",
    description: "When I first stepped into the village classroom, I didn't know what to expect. But what I found was purpose, joy, and a group of children who changed my life.",
    category: "Volunteer Stories",
    date: "Mar 19, 2023",
    readTime: "4 min read",
    author: "Priya Malhotra",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=240&fit=crop"
  },
  {
    id: 4,
    title: "Organizing My First NGO Event: Chaos, Coffee & Change",
    description: "From early morning calls to last-minute banner printing, organizing our NGO's awareness event was a rollercoaster — but every moment was worth it.",
    category: "Volunteer Stories",
    date: "Feb 27, 2023",
    readTime: "6 min read",
    author: "Rohan Kulkarni",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=400&h=240&fit=crop"
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Articles');
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [email, setEmail] = useState('');

  const categories = ['All Articles', 'Health', 'Education', 'Awareness', 'Volunteer Stories'];

  const filteredBlogs = useMemo(() => {
    let filtered = blogData;

    // Filter by category
    if (activeFilter !== 'All Articles') {
      filtered = filtered.filter(blog => blog.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, activeFilter]);

  const displayedBlogs = filteredBlogs.slice(0, visibleBlogs);

  const handleViewMore = () => {
    setVisibleBlogs(prev => prev + 6);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
    // Add toast notification or feedback here if needed
  };

  // Fixed function to create proper 2-3-2-3 pattern
  const renderBlogGrid = () => {
    const rows: React.ReactElement[] = [];
    let currentIndex = 0;
    let rowCounter = 0; // Initialize row counter

    while (currentIndex < displayedBlogs.length) {
      // Determine items per row: alternating between 2 and 3
      const itemsInRow = rowCounter % 2 === 0 ? 2 : 3;
      const colSpan = itemsInRow === 2 ? 'md:col-span-6' : 'md:col-span-4';
      
      // Get items for this row
      const endIndex = Math.min(currentIndex + itemsInRow, displayedBlogs.length);
      const rowItems = displayedBlogs.slice(currentIndex, endIndex);
      
      // Add items to rows array
      rowItems.forEach((blog, index) => {
        rows.push(
          <div
            key={blog.id}
            className={`${colSpan} animate-fade-in hover:scale-105 transition-transform duration-300`}
            style={{ animationDelay: `${(currentIndex + index) * 100}ms` }}
          >
            <BlogCard blog={blog} />
          </div>
        );
      });
      
      currentIndex = endIndex;
      rowCounter++; // Increment row counter for the next iteration
    }

    return rows;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4">
        {/* Enhanced Hero Section with more whitespace - REMOVED BREADCRUMB */}
        <div className="text-center pt-24 pb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Insight and Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            A collection of hand-picked articles for volunteers and community members. 
            Stories, ideas, and updates to navigate our NGO's journey.
          </p>
        </div>

        {/* Search and Filter Section */}
        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          categories={categories}
        />

        {/* Blog Cards Grid with proper 2-3-2-3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          {renderBlogGrid()}
        </div>

        {/* View More Button */}
        {visibleBlogs < filteredBlogs.length && (
          <div className="text-center mb-20">
            <Button
              onClick={handleViewMore}
              variant="outline"
              className="px-10 py-4 text-lg text-gray-700 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 rounded-full"
            >
              View More Articles
            </Button>
          </div>
        )}

        {/* No results message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 mb-20">
            <p className="text-gray-500 text-xl">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Enhanced Stay Connected Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 p-12 md:p-16 mb-20 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-ngo-primary/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-ngo-secondary/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-6">
              <span className="w-2 h-2 bg-ngo-primary rounded-full"></span>
              Newsletter
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to get the latest updates, stories, and insights from our NGO community. 
              Join thousands of volunteers making a difference.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 focus:border-ngo-primary focus:ring-ngo-primary rounded-2xl bg-white shadow-sm"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-ngo-primary to-ngo-dark hover:brightness-75 text-white px-8 py-4 text-lg rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage; 