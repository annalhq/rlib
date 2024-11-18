import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">RLib V3.0</h1>
      <p className="text-fd-muted-foreground">
        renovate{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
      </p>
    </main>
  );
}
