import { useRouter } from 'next/router';
import Head from 'next/head';

export default function TopicDetail({ topic }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{topic.name} Detail</title>
      </Head>
      <h1>{topic.name} Details</h1>
      <p>Some description about {topic.name}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } }
    ],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const topics = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Next.js' },
    { id: 3, name: 'JavaScript' }
  ];
  const topic = topics.find(t => t.id === parseInt(params.id));
  return { props: { topic } };
}