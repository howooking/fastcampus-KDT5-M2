export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className="container max-w-5xl mx-auto">{children}</div>;
}