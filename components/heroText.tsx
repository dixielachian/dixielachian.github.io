import styles from '../styles/heroText.module.css';

const HeroText = ({
  title,
  subtitle
}: {
  title: string,
  subtitle: string
}) => {

  const GlitchText = ({
    text,
    font,
    size
  }: {
    text: string,
    font: string,
    size: string
  }) => (
    <div className={styles.container} style={{ fontFamily: font }}>
      {text.split(' ').map((word: string) => (
        <div className={'px-1 ' + size} key={word}>
          <div className={styles.glitch} data-text={word}>{word}</div>
          <div className={styles.glow}>{word}</div>
        </div>
      ))}
    </div>
  );

  // !!! - MUST SET TEXT COLOR TO SLIGHTLY DIFFERENT SHADES - !!!

  return (
    <div className='block'>
      <GlitchText text={title} font='Anglican' size='text-7xl' />
      <GlitchText text={subtitle} font='Charmset' size='text-2xl' />
    </div>
  );
};

export default HeroText;
