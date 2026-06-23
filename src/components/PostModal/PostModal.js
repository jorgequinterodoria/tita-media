import { useEffect, useCallback } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import moment from 'moment';
import './PostModal.css';

export default function PostModal({ post, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal-glass" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <div className="modal-content">
          {post.image && (
            <div className="modal-image-wrapper">
              <img src={post.image} alt="" className="modal-image" />
            </div>
          )}

          <div className="modal-details">
            <div className="modal-header">
              <Avatar src={post.owner?.picture} className="modal-avatar" />
              <div className="modal-author">
                <span className="modal-name">
                  {post.owner?.title} {post.owner?.firstName} {post.owner?.lastName}
                </span>
                <span className="modal-date">
                  {moment(post.publishDate).format('MMMM Do YYYY, h:mm A')}
                </span>
              </div>
            </div>

            <p className="modal-text">{post.text}</p>

            {post.tags?.length > 0 && (
              <div className="modal-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>
            )}

            <div className="modal-stats">
              <span className="modal-stat">
                <FavoriteIcon className="modal-stat-icon" />
                {post.likes} likes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
