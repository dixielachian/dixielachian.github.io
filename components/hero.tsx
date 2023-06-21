import HeroText from './heroText';

const Hero = ({
  img,
  text
}: {
  img: string,
  text: JSX.Element | (string | JSX.Element)[]
}) => {
  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
          backgroundPosition: '50%',
          backgroundImage: `url(${img})`,
          height: 500
      }}>
        <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.3)] bg-fixed'>
          <div className='flex h-full items-center justify-center'>
            <div className='px-6 text-center text-white md:px-12'>
              <HeroText>
                {text}
              </HeroText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
