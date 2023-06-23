import { Fragment } from 'react';

import styles from '../styles/postBody.module.css';

const PostBody = ({
  body,
  title,
  subtitle
}: {
  body: Fragment,
  title: string,
  subtitle: string
}) => {
  return (
    <div className='w-screen py-14'>
      <div className='text-white mx-auto w-1/2'>
        <h1 className='text-5xl text-center p-2'>{title}</h1>
        <h2 className='text-xl text-center mb-8'>{subtitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: body }} className={styles.body}></div>
      </div>
    </div>
  );
};

export default PostBody;
