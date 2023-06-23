import Link from 'next/link';
import Image from 'next/image';

import Hero from './hero';

const Post = ({
  slug,
  frontMatter: {
    title,
    subtitle,
    date,
    thumbnail
  }
}: {
  slug: string,
  thumbnail: {
    title: string,
    subtitle: string,
    date: string,
    thumbnail: string
  }
}) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <Hero
          img={thumbnail}
          title={title}
          subtitle={subtitle}
        />
      </a>
    </Link>
  );
};

export default Post;
