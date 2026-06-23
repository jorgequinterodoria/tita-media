import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { Avatar } from '@mui/material';
import moment from 'moment';
import './PostCard.css';

export default function PostCard({ post, onClick, index = 0 }) {
  const [liked, setLiked] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <article
      className="post-card"
      onClick={() => onClick?.(post)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(post); }}
      role="button"
      tabIndex={0}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="post-card__header">
        <Avatar
          src={post.owner?.picture}
          className="post-card__avatar"
        >
          {post.owner?.firstName?.[0]}
        </Avatar>
        <div className="post-card__author">
          <span className="post-card__name">
            {post.owner?.title} {post.owner?.firstName} {post.owner?.lastName}
          </span>
          <span className="post-card__date">
            {moment(post.publishDate).fromNow()}
          </span>
        </div>
      </div>

      {post.image && !imgError && (
        <div className="post-card__image-wrapper">
          <img
            src={post.image}
            alt=""
            className="post-card__image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        </div>
      )}

      <div className="post-card__body">
        <p className="post-card__text">{post.text}</p>
        {post.tags?.length > 0 && (
          <div className="post-card__tags">
            {post.tags.map(tag => (
              <span key={tag} className="post-card__tag">{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="post-card__footer">
        <button
          className={`post-card__action ${liked ? 'post-card__action--liked' : ''}`}
          onClick={handleLike}
        >
          {liked ? (
            <FavoriteIcon className="post-card__like-icon" />
          ) : (
            <FavoriteBorderIcon />
          )}
          <span>{likeCount}</span>
        </button>
        <button className="post-card__action" onClick={(e) => { e.stopPropagation(); onClick?.(post); }}>
          <ChatBubbleOutlineRoundedIcon />
          <span>Comment</span>
        </button>
      </div>
    </article>
  );
}
