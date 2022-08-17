import LinkComponent from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: LinkProps) => (
  <LinkComponent href={href}>{children}</LinkComponent>
);

export default Link;
