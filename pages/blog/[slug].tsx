import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import Layout from '../../components/layout';
import Hero from '../../components/hero';
import PostBody from '../../components/postBody';

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
    <Hero
      img={frontMatter.thumbnail}
      title={frontMatter.title}
      subtitle={frontMatter.subtitle}
    />
    <PostBody
      body={marked(content)}
      title={frontMatter.title}
      subtitle={frontMatter.subtitle}
    />
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
