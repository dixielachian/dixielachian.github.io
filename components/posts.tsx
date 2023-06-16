import Post from './post';

const Posts = ({ posts }: {
  posts: [{
    slug: string,
    frontMatter: { [ key: string ]: string }
  }]
}) => {
  return (
    <div>
      {posts.map(({ slug, frontMatter: { title, description } }) => (
        <Post key={slug} slug={slug} title={title} description={description} />
      ))}
    </div>
  );
};

export default Posts;
