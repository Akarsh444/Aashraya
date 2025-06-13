import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from './BlogPage'; // Import blogData from BlogPage
import { Button } from '../components/ui/button';
import { Calendar, User, Clock } from 'lucide-react';

const BlogDetailPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogData.find(b => b.id === parseInt(blogId || '', 10));

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
        <Link to="/blog">
          <Button className="bg-ngo-primary text-white hover:brightness-75">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <main className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8 md:p-12">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 mb-4">
              {blog.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {blog.author}
              </div>
            </div>

            {/* Blog Content (Description repeated for now) */}
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>{blog.description}</p>
              {/* You would typically fetch and render full blog content here */}
              <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Curabitur pretium tincidunt lacus, eget volutpat turpis. Morbi tincidunt iaculis dui, eget consectetur mauris pretium at. Maecenas ac velit vel justo volutpat feugiat at vel justo. Vestibulum in lectus quis magna vestibulum dapibus. Sed ac nisl ut magna ullamcorper tincidunt. Fusce a tellus sed justo tincidunt dapibus. Etiam auctor, lacus et eleifend dictum, justo nunc congue sem, ac lacinia magna nibh id augue. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            {/* Back Button */}
            <div className="mt-12">
              <Link to="/blog">
                <Button className="bg-gradient-to-r from-ngo-primary to-ngo-dark text-white hover:brightness-75 shadow-lg hover:shadow-xl border-0 overflow-hidden px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300">
                  Back to All Articles
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetailPage; 