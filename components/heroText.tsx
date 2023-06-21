import { useEffect } from 'react';

const HeroText = ({ children }: { children: JSX.Element | (string | JSX.Element)[] }) => {

  useEffect(() => {
    let style1: HTMLStyleElement  = document.createElement('style');
    let style2: HTMLStyleElement = document.createElement('style');
    let after = document.querySelector('#after-te1') as HTMLSpanElement | null;
    let before = document.querySelector('#before-te1') as HTMLSpanElement | null;
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
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`;
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`;
    style1.innerHTML = keyframes1;
    style2.innerHTML = keyframes2;
    after?.appendChild(style1);
    before?.appendChild(style2);
    after.style.animation = 'glitch-anim-1 2.5s infinite linear alternate-reverse';
    before.style.animation = 'glitch-anim-2 3s infinite linear alternate-reverse';
  }, []);

  return (
    <div className='h-full flex justify-center items-center'>
      <h1 className='text-white text-4xl font-bold uppercase relative inline-block'>
        <span id='before-te1' className='absolute top-0 left-0.5 w-full h-full bg-transparent' style={{ textShadow: '-2px 0 #49FC00', clipPath: 'rect(24px, 550px, 90px, 0)' }}>{children}</span> {/* glitch::before */}
        {children}
        <span id='after-te1' className='absolute top-0 -left-0.5 w-full h-full bg-transparent' style={{ textShadow: '-2px 0 spin(#49FC00, 180)', clipPath: 'rect(85px, 550px, 140px, 0)' }}>{children}</span> {/* glitch::after */}
      </h1>
    </div>
  );
};

export default HeroText;
