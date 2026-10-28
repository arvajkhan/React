import { useState } from "react";
function LikedButton() {
  const [liked, SetLiked] = useState(false);
  return (
    <div>
      <button onClick={() => SetLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like "} 
      </button>
    </div>
  );
}
export default LikedButton;
