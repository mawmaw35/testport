import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <nav className="border-b border-dark-border">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              Portfolio
            </Link>
            <div className="flex gap-6">
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive('/about') || isActive('/')
                    ? 'text-white'
                    : 'text-dark-text-secondary hover:text-white'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive('/contact')
                    ? 'text-white'
                    : 'text-dark-text-secondary hover:text-white'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="border-t border-dark-border mt-16">
        <div className="container-custom py-8">
          <div className="text-center text-dark-text-secondary text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
