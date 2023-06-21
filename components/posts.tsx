import Post from './post';

const Posts = ({ posts }: {
  posts: [{
    slug: string,
    frontMatter: { [ key: string ]: string }
  }]
}) => {
  return (
    <div>
      {posts.map(({ slug, frontMatter: { title, subtitle, date } }) => (
        <Post key={slug} slug={slug} title={title} subtitle={subtitle} date={date} />
      ))}
    </div>
  );
};

export default Posts;
