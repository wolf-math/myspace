import { NextResponse } from 'next/server';

// Dummy data
const posts = [
  {
    title: 'Title',
    slug: 'title',
    content: 'content goes here.'
  },
  {
    title: 'Another Title',
    slug: 'another-title',
    content: 'Another content goes here.'
  },
  {
    title: 'Third Title',
    slug: 'third-title',
    content: 'Third content goes here.'
  },
  {
    title: 'Fourth Title',
    slug: 'fourth-title',
    content: 'Fourth content goes here.'
  },
  {
    title: 'Fifth Title',
    slug: 'fifth-title',
    content: 'Fifth content goes here.'
  }
];

export async function GET() {
  return NextResponse.json(posts);
}
