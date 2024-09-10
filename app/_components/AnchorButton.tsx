interface AchorWrapper {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const AnchorButton = ({
  children,
  href,
  className = "",
}: AchorWrapper) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};
