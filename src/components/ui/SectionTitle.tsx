export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-lg text-gray-600">{subtitle}</p>
      ) : null}
    </div>
  );
}