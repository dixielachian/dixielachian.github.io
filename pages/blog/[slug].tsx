import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import Layout from '../../components/layout';

const BlogPost = ({
  frontMatter,
  slug,
  content
}: {
  frontMatter: { [key: string]: string },
  slug: string,
  content: string
}) => (
  <Layout>
    <div className='prose prose-sm sm:prose lg:prose-lg mx-auto prose-slate'>
      <img src={frontMatter.thumbnail} alt={frontMatter.title} />
      <div dangerouslySetInnerHTML={{__html: marked(content)}}/>
    </div>
    <div></div>
  </Layout>
);

export default BlogPost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.filter(filename => filename.includes(".md")).map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    }
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({params: {slug}}: never) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
};
