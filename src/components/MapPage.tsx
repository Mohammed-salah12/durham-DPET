import { useEffect, useRef, useState } from 'react';
import { MapPin, Plane, GraduationCap, Heart } from 'lucide-react';
import { Card } from './ui/card';

export function MapPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Animation
    let frame = 0;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate positions
      const palestineX = canvas.width * 0.2;
      const palestineY = canvas.height * 0.5;
      const durhamX = canvas.width * 0.8;
      const durhamY = canvas.height * 0.4;

      // Draw path
      ctx.strokeStyle = '#E8DCC4';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(palestineX, palestineY);
      ctx.quadraticCurveTo(
        canvas.width * 0.5,
        canvas.height * 0.2,
        durhamX,
        durhamY
      );
      ctx.stroke();

      // Draw animated path
      const progress = (Math.sin(frame * 0.02) + 1) / 2;
      setAnimationProgress(progress);

      ctx.strokeStyle = '#8B1E3F';
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(palestineX, palestineY);

      const t = progress;
      const x = Math.pow(1 - t, 2) * palestineX + 2 * (1 - t) * t * (canvas.width * 0.5) + Math.pow(t, 2) * durhamX;
      const y = Math.pow(1 - t, 2) * palestineY + 2 * (1 - t) * t * (canvas.height * 0.2) + Math.pow(t, 2) * durhamY;

      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw plane
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = '#556B2F';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  const milestones = [
    {
      location: 'Palestine',
      title: 'Dreams Begin',
      description: 'Talented students with aspirations for world-class education',
      icon: Heart,
      color: 'var(--dpet-red)',
    },
    {
      location: 'Application',
      title: 'Taking the First Step',
      description: 'Applying for DPET scholarship and Durham University admission',
      icon: GraduationCap,
      color: 'var(--dpet-olive)',
    },
    {
      location: 'Journey',
      title: 'The Bridge',
      description: 'Traveling from Palestine to Durham, supported by DPET',
      icon: Plane,
      color: 'var(--dpet-red)',
    },
    {
      location: 'Durham',
      title: 'Excellence Achieved',
      description: 'Studying at one of the world\'s top universities',
      icon: GraduationCap,
      color: 'var(--dpet-olive)',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--dpet-red)] to-[var(--dpet-red-dark)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6 text-white">The Journey</h1>
            <p className="text-xl">
              A bridge of learning connecting Palestine and Durham University
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl mb-4 text-[var(--dpet-black)]">From Palestine to Durham</h2>
                <p className="text-gray-600">
                  Watch the journey of hope, opportunity, and transformation
                </p>
              </div>

              {/* Canvas Map */}
              <div className="relative w-full h-[400px] bg-[var(--dpet-beige-light)] rounded-lg overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0" />

                {/* Palestine Marker */}
                <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[var(--dpet-red)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <MapPin className="w-8 h-8 text-white" fill="white" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                        <p className="text-[var(--dpet-red)]">Palestine</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Durham Marker */}
                <div className="absolute left-[80%] top-[40%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[var(--dpet-olive)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <MapPin className="w-8 h-8 text-white" fill="white" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                        <p className="text-[var(--dpet-olive)]">Durham, UK</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Distance Info */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <p className="text-sm text-gray-700">
                      <Plane className="w-4 h-4 inline mr-2" />
                      ~3,600 km journey · 5-6 hours flight
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                Animation represents the journey of Palestinian students to Durham University
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Milestones */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">The Path to Excellence</h2>
              <div className="w-24 h-1 bg-[var(--dpet-red)] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${milestone.color}15` }}
                    >
                      <milestone.icon className="w-6 h-6" style={{ color: milestone.color }} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{milestone.location}</div>
                      <h3 className="text-xl mb-2 text-[var(--dpet-black)]">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--dpet-olive)] to-[var(--dpet-olive-light)] rounded-lg p-12 text-white text-center">
              <h2 className="text-4xl mb-8 text-white">A Bridge of Opportunity</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl mb-2">50+</div>
                  <div className="text-lg">Scholars</div>
                  <div className="text-sm opacity-80">Who made the journey</div>
                </div>
                <div>
                  <div className="text-5xl mb-2">15+</div>
                  <div className="text-lg">Years</div>
                  <div className="text-sm opacity-80">Of building bridges</div>
                </div>
                <div>
                  <div className="text-5xl mb-2">∞</div>
                  <div className="text-lg">Impact</div>
                  <div className="text-sm opacity-80">Lives transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Connection */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">More Than Miles</h2>
              <div className="w-24 h-1 bg-[var(--dpet-olive)] mx-auto rounded-full" />
            </div>

            <Card className="p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The journey from Palestine to Durham represents more than just physical distance. It's a bridge between 
                two cultures, two communities, and countless opportunities. DPET scholars carry with them the rich 
                heritage of Palestine—its resilience, creativity, and deep commitment to education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Durham, they encounter world-class academics, diverse perspectives, and the historic excellence of 
                one of Britain's oldest universities. This fusion of Palestinian heritage and British academic tradition 
                creates something truly special: scholars who are deeply rooted in their culture while equipped to make 
                a global impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--dpet-red)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-white">Begin Your Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The path from Palestine to Durham is waiting for talented students like you
          </p>
          <button
            onClick={() => window.open('https://durhampalestine.webspace.durham.ac.uk/apply/', '_blank')}
            className="bg-white text-[var(--dpet-red)] hover:bg-[var(--dpet-beige)] px-8 py-4 rounded-md transition-colors"
          >
            Apply for Scholarship
          </button>
        </div>
      </section>
    </div>
  );
}
