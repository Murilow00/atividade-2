import { useState } from 'react';

export default function ContadorLikes() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Curtir</button>
    </div>
  );
}