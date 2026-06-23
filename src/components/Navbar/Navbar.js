import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export default function Navbar({ searchQuery, onSearchChange }) {
  const { theme, toggleTheme } = useTheme();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <span className="navbar__logo-icon">◆</span>
          <span className="navbar__logo-text">TitaMedia</span>
        </div>

        <div className={`navbar__search ${searchFocused ? 'navbar__search--focused' : ''}`}>
          <SearchIcon className="navbar__search-icon" />
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Search posts..."
            value={searchQuery || ''}
            onChange={e => onSearchChange?.(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </nav>
  );
}
