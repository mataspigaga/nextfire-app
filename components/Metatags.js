import Head from "next/head";

export default function Metatags({
  title = "Dynamic Feed Project",
  description = "Following the course on React + Next.js + Firebase from Fireship.io",
  image = "https://pbs.twimg.com/profile_images/1440910479757565956/KjnURzUB_400x400.jpg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mataspigaga" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
