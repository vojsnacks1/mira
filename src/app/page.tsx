import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <main className="flex w-full max-w-xl flex-col items-center text-center">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl font-semibold text-background">
          M
        </div>

        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Meet Mira
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-muted">
          Your personal AI assistant that actually remembers you. The more you
          talk, the better it understands what matters to you.
        </p>

        <Link
          href="/chat"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-medium text-background transition-opacity hover:opacity-90"
        >
          Start chatting
        </Link>

        <p className="mt-6 text-sm text-muted">
          No account needed yet — just say hello.
        </p>
      </main>
    </div>
  );
}
