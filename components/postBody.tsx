import { Fragment } from 'react';

const PostBody = ({ body }: { body: Fragment }) => {
  return (
    <div className='w-screen py-14'>
      <div
        className='text-white mx-auto w-1/2'
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  );
};

export default PostBody;
