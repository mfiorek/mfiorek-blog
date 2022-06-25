import { useEffect, useState } from 'preact/hooks';

const ProgressBar = ({}) => {
  const [scrolledPercent, setScrolledPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrolledPercent((winScroll / height) * 100);
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div onScroll={() => console.log('this works!')} class='fixed top-[60px] w-full h-1'>
      <div style={`width: ${scrolledPercent}%;`} class='bg-lime-500 h-full'></div>
    </div>
  );
};

export default ProgressBar;
