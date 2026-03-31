import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react';
import logoImage from 'figma:asset/f13ac946bf8815e438910e9ff947906be1c2530b.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="dpet-dark-section relative z-10 mt-20">
      <div className="embroidery-border opacity-80"></div>
      <div className="container relative z-10 mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                <img
                  src={logoImage}
                  alt="DPET Logo"
                  className="h-10 w-10 object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="dpet-display text-3xl text-white">DPET</h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Durham Palestine Educational Trust
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Empowering Palestinian students to pursue excellence at Durham
              University through education, community, and opportunity.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-dpet-beige">
              Explore
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Apply', 'Stories', 'Journey'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase() === 'journey' ? 'map' : item.toLowerCase())}
                    className="group inline-flex items-center gap-3 text-sm text-white/70 transition-all duration-300 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-dpet-gold transition-transform duration-300 group-hover:scale-125" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-dpet-beige">
              Connect
            </h4>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-2.5 transition-colors group-hover:bg-white/12">
                  <Mail className="h-4 w-4 text-dpet-gold" />
                </div>
                <a
                  href="mailto:info@durhampalestine.org"
                  className="mt-1 transition-colors hover:text-white"
                >
                  info@durhampalestine.org
                </a>
              </li>
              <li className="group flex items-start gap-3 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-2.5 transition-colors group-hover:bg-white/12">
                  <MapPin className="h-4 w-4 text-dpet-gold" />
                </div>
                <span className="mt-1">Durham University, United Kingdom</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-dpet-beige">
              Partners
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.durham.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-dpet-gold transition-transform duration-300 group-hover:scale-125" />
                  Durham University
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://durhampalestine.webspace.durham.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-dpet-gold transition-transform duration-300 group-hover:scale-125" />
                  Official Website
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-sm text-white/70">
            Made with <Heart className="h-4 w-4 fill-dpet-gold text-dpet-gold" /> for Palestinian Students
          </p>
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Durham Palestine Educational Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
