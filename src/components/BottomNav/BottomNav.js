import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

const tabs = [
  { path: '/home', icon: HomeIcon, label: 'Home' },
  { path: '/search', icon: SearchIcon, label: 'Search' },
  { path: '/explore', icon: ExploreIcon, label: 'Explore' },
  { path: '/notifications', icon: NotificationsIcon, label: 'Alerts' },
  { path: '/profile', icon: PersonIcon, label: 'Profile' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {tabs.map(({ path, icon: Icon, label }) => (
        <button
          key={path}
          className={`bottom-nav__item ${location.pathname === path ? 'bottom-nav__item--active' : ''}`}
          onClick={() => navigate(path)}
        >
          <Icon className="bottom-nav__icon" />
          <span className="bottom-nav__label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
