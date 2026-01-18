import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/f13ac946bf8815e438910e9ff947906be1c2530b.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'apply', label: 'Apply' },
    { id: 'stories', label: 'Stories' },
    { id: 'map', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImage} 
              alt="DPET Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="text-left hidden sm:block">
              <div className="font-semibold text-[var(--dpet-black)]">Durham Palestine</div>
              <div className="text-sm text-[var(--dpet-olive)]">Educational Trust</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-[var(--dpet-red)] text-white'
                    : 'text-[var(--dpet-black)] hover:bg-[var(--dpet-beige)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('apply')}
              className="bg-[var(--dpet-olive)] hover:bg-[var(--dpet-olive-light)] text-white"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[var(--dpet-beige)] rounded-md transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--dpet-black)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--dpet-black)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-md text-left transition-colors ${
                    currentPage === item.id
                      ? 'bg-[var(--dpet-red)] text-white'
                      : 'text-[var(--dpet-black)] hover:bg-[var(--dpet-beige)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onNavigate('apply');
                  setMobileMenuOpen(false);
                }}
                className="bg-[var(--dpet-olive)] hover:bg-[var(--dpet-olive-light)] text-white w-full mt-2"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}