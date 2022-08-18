import { type ReactNode } from 'react';
import LinkWrapper from 'next/link';

type LinkProps = {
  href: string;
  children: ReactNode;
};

const Link = ({ children, href }: LinkProps) => {
  return (
    <LinkWrapper href={href}>
      <a>{children}</a>
    </LinkWrapper>
  );
};

export default Link;
