'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Oops...</h2>
      <p>Something went wrong</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
