import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/f13ac946bf8815e438910e9ff947906be1c2530b.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "apply", label: "Apply" },
    { id: "stories", label: "Stories" },
    { id: "map", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-dpet-beige/40 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigate("home")}
            className="group flex items-center gap-3 text-left transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dpet-beige/50 bg-white/70 shadow-dpet transition-all duration-300 group-hover:shadow-dpet-hover">
              <img
                src={logoImage}
                alt="DPET Logo"
                className="h-11 w-11 object-contain"
              />
            </div>
            <div className="text-left hidden sm:block">
              <div className="dpet-display text-[1.7rem] leading-none text-dpet-black">
                Durham Palestine
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-dpet-clay">
                Educational Trust
              </div>
            </div>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-dpet-beige/50 bg-white/70 p-1 shadow-dpet md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-dpet-red text-white shadow-lg shadow-dpet-red/20"
                    : "text-dpet-black/80 hover:bg-dpet-beige-light hover:text-dpet-red"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate("apply")}
              className="dpet-button-secondary h-11 rounded-full px-6 font-semibold"
            >
              Apply Now
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-dpet-beige/50 bg-white/70 p-2.5 text-dpet-black shadow-dpet transition-colors hover:bg-dpet-beige-light md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="dpet-card mt-4 p-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                    currentPage === item.id
                      ? "bg-dpet-red text-white shadow-lg shadow-dpet-red/15"
                      : "text-dpet-black hover:bg-dpet-beige-light"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onNavigate("apply");
                  setMobileMenuOpen(false);
                }}
                className="dpet-button-secondary mt-2 h-11 w-full rounded-2xl font-semibold"
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
