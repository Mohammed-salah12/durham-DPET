import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react';
import logoImage from 'figma:asset/f13ac946bf8815e438910e9ff947906be1c2530b.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[var(--dpet-black)] text-white mt-20">
      <div className="embroidery-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src={logoImage} 
                  alt="DPET Logo" 
                  className="w-10 h-10 object-contain brightness-200"
                />
                <h3 className="text-white">DPET</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering Palestinian students to pursue excellence at Durham University through education and opportunity.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Apply', 'Stories'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(item.toLowerCase())}
                      className="text-gray-400 hover:text-[var(--dpet-beige)] text-sm transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@durhampalestine.org"
                    className="hover:text-[var(--dpet-beige)] transition-colors"
                  >
                    info@durhampalestine.org
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Durham University, UK</span>
                </li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h4 className="text-white mb-4">Our Partners</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.durham.ac.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[var(--dpet-beige)] text-sm transition-colors flex items-center gap-1"
                  >
                    Durham University
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://durhampalestine.webspace.durham.ac.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[var(--dpet-beige)] text-sm transition-colors flex items-center gap-1"
                  >
                    Official Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-[var(--dpet-red)]" fill="currentColor" /> for Palestinian Students
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Durham Palestine Educational Trust. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}