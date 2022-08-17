import Link from '@app/components/elements/Link';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Rabii Luena. All rights reserved.</p>
      <div className="flex items-center space-x-2">
        <Link href="/privacy">Privacy</Link>
        <div className="h-4 w-px bg-slate-500/20" />
        <Link href="/changelog">Changelog</Link>
      </div>
    </footer>
  );
};

export default Footer;
