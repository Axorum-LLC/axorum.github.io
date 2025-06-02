import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Hexagon className="h-8 w-8" />
              <span className="m-2 mt-3 text-xl font-semibold logo">Axorum</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-foreground/80">
              Home
            </Link>
            <Link to="/resources" className="text-foreground hover:text-foreground/80">
              Resources
            </Link>
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "Dark" : "Light"} Mode
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-foreground/80"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-foreground hover:text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  setIsOpen(false);
                }}
              >
                {theme === "light" ? "Dark" : "Light"} Mode
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}