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
  frontMatter: { [ key: string ]: string }
  /*{
    title: string,
    subtitle: string,
    date: string,
    thumbnail: string
  }*/
}) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a title={title}>
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
