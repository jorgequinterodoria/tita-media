import Navbar from '../Navbar/Navbar';
import BottomNav from '../BottomNav/BottomNav';
import './Layout.css';

export default function Layout({ children, searchQuery, onSearchChange }) {
  return (
    <div className="layout">
      <Navbar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <main className="layout__content">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
