import Papa from 'papaparse';

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  date: string;
  author: string;
  excerpt: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch('/blogposts.csv');
  const csvText = await response.text();
  
  const { data } = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true
  });
  
  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}