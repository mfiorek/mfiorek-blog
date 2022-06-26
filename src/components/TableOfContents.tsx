import { useEffect, useState } from 'preact/hooks';

const TableOfContents = ({ headers }) => {
  const [headerToHighlight, setHeaderToHighlight] = useState(undefined);
  const headersForTOC = headers.filter((h) => h.depth <= 3);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      setHeaderToHighlight(
        [...headersForTOC].reverse().find((h) => {
          const headerElement = document.getElementById('markdown').querySelector(`#${h.slug}`) as HTMLElement | null;
          return headerElement?.offsetTop < winScroll + 65;
        })?.slug,
      );
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id='toc' class='sticky top-16 flex flex-col gap-2 pt-8'>
      {headersForTOC?.map((h) => (
        <a
          id={h.slug}
          className={`${h.slug !== headerToHighlight && 'opacity-30'} text-lg font-semibold mb-4 overflow-hidden text-ellipsis`}
          style={`padding-left: ${h.depth * 1.5}rem;`}
          href={`#${h.slug}`}
        >
          {h.text}
        </a>
      ))}
    </div>
  );
};

export default TableOfContents;
