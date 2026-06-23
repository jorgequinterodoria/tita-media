import { useState, useEffect, useRef, useCallback } from 'react';
import axios from '../../axios';
import PostCard from '../PostCard/PostCard';
import PostModal from '../PostModal/PostModal';
import Skeleton from '../Skeleton/Skeleton';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import './home.css';

export default function Home({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef(null);
  const fetchingRef = useRef(false);

  const fetchPosts = useCallback(async (pageNum, append = false) => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;

    try {
      if (pageNum === 0) setLoading(true);
      else setLoadingMore(true);

      const response = await axios.get(`/post?limit=12&page=${pageNum}`);
      const newPosts = response.data.data;

      setPosts(prev => append ? [...prev, ...newPosts] : newPosts);
      setHasMore(newPosts.length === 12);
      setError(null);
    } catch {
      if (pageNum === 0) setError('Failed to load posts. Check your connection.');
    } finally {
      setLoading(false);
      setLoadingMore(false);
      fetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    fetchPosts(0);
  }, [fetchPosts]);

  useEffect(() => {
    if (!sentinelRef.current || !hasMore || loadingMore || loading) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !fetchingRef.current) {
          setPage(prev => {
            const next = prev + 1;
            fetchPosts(next, true);
            return next;
          });
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadingMore, loading, fetchPosts]);

  const filteredPosts = posts.filter(post =>
    !searchQuery
      ? true
      : post.text?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
  );

  if (error) {
    return (
      <div className="home__state">
        <CloudOffIcon className="home__state-icon" />
        <h3 className="home__state-title">Connection Error</h3>
        <p className="home__state-text">{error}</p>
        <button className="home__retry-btn" onClick={() => fetchPosts(0)}>
          Try Again
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="home__grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="home__state">
        <SearchOffIcon className="home__state-icon" />
        <h3 className="home__state-title">No posts found</h3>
        <p className="home__state-text">
          {searchQuery
            ? 'Try a different search term'
            : 'Nothing to see here yet'}
        </p>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home__grid">
        {filteredPosts.map((post, i) => (
          <PostCard
            key={post.id}
            post={post}
            index={i}
            onClick={setSelectedPost}
          />
        ))}
      </div>

      {loadingMore && (
        <div className="home__grid home__grid--skeleton">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={`skeleton-${i}`} />
          ))}
        </div>
      )}

      {hasMore && <div ref={sentinelRef} className="home__sentinel" />}

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
