import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">Hakkımızda</Link>
      <br />
      <Link href="/docs/post-1">Post 1</Link>
      <br />
      <Link
        target="_blank"
        className="test"
        href={{
          pathname: "/contact",
          query: {
            name: "Next.js",
            surname: "react",
          },
        }}
      >
        Contact
      </Link>
    </div>
  );
}
