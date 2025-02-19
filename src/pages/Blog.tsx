import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';
import { type BlogPost, getBlogPosts } from '@/lib/blog';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then(posts => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 bg-neutral-100 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Our Blog 🌹
          </h1>
          <p className="text-xl text-gray-600">
            Insights, guides, and resources for honoring loved ones
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <article className="space-y-4">
                  <h2 className="text-2xl font-bold hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4">
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Read more →
                    </span>
                  </div>
                </article>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}