import Link from 'next/link';
import Head from 'next/head';
import TopicCard from '../components/TopicCard';

export default function Home({ topics }) {
  return (
    <>
      <Head>
        <title>React + Next.js Practice</title>
        <meta name="description" content="Small practice project" />
      </Head>
      <h1>Topics</h1>
      {topics.map(topic => (
        <Link key={topic.id} href={`/topics/${topic.id}`}>
          <TopicCard name={topic.name} />
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const topics = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Next.js' },
    { id: 3, name: 'JavaScript' }
  ];
  return { props: { topics } };
}