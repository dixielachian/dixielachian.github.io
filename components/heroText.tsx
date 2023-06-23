import styles from '../styles/heroText.module.css';

const HeroText = ({
  title,
  subtitle
}: {
  title: JSX.Element | string,
  subtitle: JSX.Element | string
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
        <div className={'px-1 ' + size}>
          <div className={styles.glitch} data-text={word}>{word}</div>
          <div className={styles.glow}>{word}</div>
        </div>
      ))}
    </div>
  );

  // !!! - MUST SET TEXT COLOR TO SLIGHTLY DIFFERENT SHADES - !!!

  return (
    <div className='block'>
      {/*<GlitchText text={title} font='Anglican' size='text-6xl'/>*/}
      <GlitchText text={subtitle} font='Mobile Infantry Italic' size='text-4xl' />
    </div>
  );
};

export default HeroText;
