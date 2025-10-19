import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumb = (str: string) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 p-3 bg-card/50 rounded-lg border border-border/50">
      <Link 
        to="/" 
        className="hover:text-foreground transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-accent/20"
      >
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={name} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            {isLast ? (
              <span className="text-foreground font-medium px-2 py-1 bg-primary/10 rounded-md">
                {formatBreadcrumb(name)}
              </span>
            ) : (
              <Link 
                to={routeTo} 
                className="hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-accent/20"
              >
                {formatBreadcrumb(name)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
