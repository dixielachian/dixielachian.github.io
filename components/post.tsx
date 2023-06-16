import Link from 'next/link';

const Post = ({
  slug,
  title,
  description
}: {
  slug: string,
  title: string,
  description: string
}) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <h5>{title}</h5>
        <p>{description}</p>
        <hr />
      </a>
    </Link>
  );
};

export default Post;
