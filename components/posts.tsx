import Post from './post';

const Posts = ({ posts }: {
  posts: [ {
    slug: string,
    frontMatter: { [ key: string ]: string }
  } ]
}) => {
  return (
    <div>
      {posts.map(({ slug, frontMatter }) => (
        <Post key={slug} slug={slug} frontMatter={frontMatter} />
      ))}
    </div>
  );
};

export default Posts;
