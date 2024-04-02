const posts = [
  {
    id: "post-1",
    title: "Auto layout in Figma",
    duration: "10m read",
  },
  {
    id: "post-2",
    title: "How to properly write css",
    duration: "15m read",
  },
  {
    id: "post-3",
    title: "Tailwind in depth",
    duration: "25m read",
  },
  {
    id: "post-4",
    title: "Next.js vs Remix",
    duration: "15m read",
  },
  {
    id: "post-5",
    title: "How to use GSAP and ScrollTrigger",
    duration: "10m read",
  },
];

export function Content() {
  return (
    <>
      <div className="w-full h-24 md:h-44 bg-transparent" />

      <section className="h-full">
        <article className="">
          <h2 className="text-primary">
            Learn how to master motion design and interactions.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3 inline-block ml-2 -mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </h2>

          <p className="mt-4 text-sm">10m read</p>
        </article>

        <article className="mt-16">
          <h2 className="text-primary text-xl">Posts</h2>

          <ul className="mt-6 flex gap-y-6 flex-col">
            {posts.map((post) => (
              <li
                key={post.id}
                className="gap-6 bg-foreground/5 py-2 px-3 rounded-md"
              >
                <div>
                  <h3 className="line-clamp-1">{post.title}</h3>
                  <p className="text-foreground/50">{post.duration}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="mt-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-16 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <p className="mt-6">
            <span className="text-primary">Join</span> 10,000+ subscribers and
            get the latest articles sent right to your inbox.
          </p>
        </article>
      </section>
    </>
  );
}
