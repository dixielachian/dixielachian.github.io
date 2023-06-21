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
        <h5 className='text-white'>{title}</h5>
        <p className='text-white'>{description}</p>
        <hr />
      </a>
    </Link>
  );
};

export default Post;
