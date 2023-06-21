import { Fragment } from 'react';

const PostBody = ({ body }: { body: Fragment }) => {
  return (
    <div className='w-screen'>
      <div
        className='text-white mx-auto w-4/5'
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  );
};

export default PostBody;
