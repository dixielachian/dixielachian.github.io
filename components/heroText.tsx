import styles from '../styles/heroText.module.css';

const HeroText = ({
  title,
  subtitle
}: {
  title: string,
  subtitle: string
}) => {

  /*useEffect(() => {
    let style1: HTMLStyleElement  = document.createElement('style');
    let style2: HTMLStyleElement = document.createElement('style');
    let after = document.querySelector(`#after-${afterTag}`) as HTMLSpanElement;
    let before = document.querySelector(`#before-${beforeTag}`) as HTMLSpanElement;

    const setKeyframesRules = (n: number, start: number = 0): string => {
      let steps = '';
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100;
        let random1 = `${Math.random()*150}px`;
        let random2 = `${Math.random()*150}px`;
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `);
      }
      return steps;
    };

    style1.innerHTML = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`;
    style2.innerHTML = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`;
    after?.appendChild(style1);
    before?.appendChild(style2);
    after?.style.animation = 'glitch-anim-1 2.5s infinite linear alternate-reverse';
    before?.style.animation = 'glitch-anim-2 3s infinite linear alternate-reverse';
  }, []);*/

  const Text = () => (
    <span style={{ fontFamily: 'Backyard' }}>
      <h1 className='font-bold text-5xl my-4'>{title}</h1>
      <h2 className='text-xl'>{subtitle}</h2>
    </span>
  );

      /*<span classNameName='text-white text-4xl font-bold uppercase relative inline-block'>
        <span id={`before-${beforeTag}`} classNameName='absolute top-0 left-0.5 w-full h-full bg-transparent' style={{ textShadow: '-2px 0 #49FC00', clipPath: 'rect(24px, 550px, 90px, 0)' }}>
          <Text />
        </span> {/* glitch::before
        <Text />
        <span id={`after-${afterTag}`} classNameName='absolute top-0 -left-0.5 w-full h-full bg-transparent' style={{ textShadow: '-2px 0 spin(#49FC00, 180)', clipPath: 'rect(85px, 550px, 140px, 0)' }}>
          <Text />
        </span> {/* glitch::after
      </span>*/
  return (
    <div className='h-full flex justify-center items-center' style={{ fontFamily: 'Anglican' }}>
      <div className={styles.container}>
        <div className={styles.glitch} dataText={title}>{title}</div>
        <div className={styles.glow}>{title}</div>
      </div>
    </div>
  );
};

export default HeroText;
