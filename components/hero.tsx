import HeroText from './heroText';

const Hero = ({
  img,
  title,
  subtitle
}: {
  img: string,
  title: string,
  subtitle: string
}) => {
  return (
    <>
      <div className="relative bg-scroll overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: `url(${img})`,
        backgroundAttachment: 'fixed',
        height: '78vh'
      }}>
        <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.3)] bg-fixed'>
          <div className='flex h-full items-center justify-center'>
            <div className='px-6 md:px-12'>
              <HeroText title={title} subtitle={subtitle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
