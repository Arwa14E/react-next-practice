export default function handler(req, res) {
  const topics = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Next.js' },
    { id: 3, name: 'JavaScript' }
  ];
  res.status(200).json(topics);
}