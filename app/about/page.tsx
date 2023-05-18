export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us',
  description: 'Bringing people together together'
};

export default async function About() {
  return (
    <main>
      <h1>About us</h1>
      <p>Bringing people together together</p>
    </main>
  );
}
