import type { IconType } from 'react-icons';

import { contactLandingSection4 } from '@/data/contactLandingSection4';

export const ContactaConNosotros = () => {
  const renderParagraphs = (Icon: IconType, text: string, alt: string) => {
    const lines: string[] = text.split('\n');
    return lines.map((line: string, index: number) => (
      <p className="lg:pl-8" key={index}>
        {renderContent(alt, line)}
      </p>
    ));
  };

  const renderContent = (alt: string, content: string) => {
    if (alt === 'Instagram') {
      return (
        <a
          href="https://www.instagram.com/lapizzadehugo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return <>{content}</>;
  };

  return (
    <div className="px-2 sm:px-10 md:px-5 lg:pl-16">
      <h1 className="pb-8 pt-10 text-center font-garamond text-3xl text-webC underline decoration-2 underline-offset-8 sm:pb-8 sm:pt-10 sm:text-5xl md:pb-8 md:pt-10 md:text-5xl lg:pt-1 lg:text-5xl">
        Contacta Con Nosotros
      </h1>
      <h2 className="pb-5 pt-4 text-xl font-bold underline sm:pb-7 sm:pt-7 md:hidden md:pb-6 md:pt-10 lg:pb-6">
        La pizza de Hugo
      </h2>
      <div className="xs:divide-y sm:divide-y md:grid md:grid-cols-4 md:divide-x lg:divide-y">
        {contactLandingSection4.map(({ Icon, alt, p }) => (
          <div
            key={alt}
            className="flex place-items-center xs:py-4 sm:py-4 md:flex md:flex-col md:place-content-center md:items-center md:justify-center md:px-2 lg:py-4"
          >
            <Icon size={35} className="xs:pr-2 sm:pr-2 md:pb-5" />

            <div>{renderParagraphs(Icon, p, alt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
