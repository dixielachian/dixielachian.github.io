import Link from 'next/link';

const Post = ({
  slug,
  title,
  subtitle,
  date
}: {
  slug: string,
  title: string,
  subtitle: string,
  date: string
}) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <h5 className='text-white'>{title}</h5>
        <p className='text-white'>{subtitle}</p>
        <p className='text-white'>{date}</p>
        <hr />
      </a>
    </Link>
  );
};

export default Post;
