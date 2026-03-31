import { useEffect, useRef } from "react";
import { Plane, GraduationCap, Heart } from "lucide-react";
import { Card } from "./ui/card";

export function MapPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
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
    window.addEventListener("resize", updateCanvasSize);

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
      ctx.strokeStyle = "#E8DCC4"; // dpet-beige
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(palestineX, palestineY);
      ctx.quadraticCurveTo(
        canvas.width * 0.5,
        canvas.height * 0.2,
        durhamX,
        durhamY,
      );
      ctx.stroke();

      // Draw animated path
      const progress = (Math.sin(frame * 0.02) + 1) / 2;

      ctx.strokeStyle = "#8B1E3F"; // dpet-red
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(palestineX, palestineY);

      const t = progress;
      const x =
        Math.pow(1 - t, 2) * palestineX +
        2 * (1 - t) * t * (canvas.width * 0.5) +
        Math.pow(t, 2) * durhamX;
      const y =
        Math.pow(1 - t, 2) * palestineY +
        2 * (1 - t) * t * (canvas.height * 0.2) +
        Math.pow(t, 2) * durhamY;

      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw plane
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = "#556B2F"; // dpet-olive
      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, Math.PI * 2);
      ctx.fill();
      // Add a glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#556B2F";
      ctx.stroke();
      ctx.restore();

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  const milestones = [
    {
      location: "Palestine",
      title: "Dreams Begin",
      description:
        "Talented students with aspirations for world-class education",
      icon: Heart,
      color: "var(--dpet-red)",
    },
    {
      location: "Application",
      title: "Taking the First Step",
      description:
        "Applying for DPET scholarship and Durham University admission",
      icon: GraduationCap,
      color: "var(--dpet-olive)",
    },
    {
      location: "Journey",
      title: "The Bridge",
      description: "Traveling from Palestine to Durham, supported by DPET",
      icon: Plane,
      color: "var(--dpet-red)",
    },
    {
      location: "Durham",
      title: "Excellence Achieved",
      description: "Studying at one of the world's top universities",
      icon: GraduationCap,
      color: "var(--dpet-olive)",
    },
  ];

  return (
    <div>
      <section className="dpet-hero py-24">
        <div className="container dpet-hero-content mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="dpet-kicker mb-6">A Bridge of Learning</div>
            <h1 className="mb-6 text-5xl font-semibold text-white md:text-6xl">The Journey</h1>
            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/85">
              A bridge of learning connecting Palestine and Durham University.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="dpet-card p-8">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-4xl font-semibold text-dpet-black">
                  From Palestine to Durham
                </h2>
                <p className="text-dpet-clay">
                  Watch the journey of hope, opportunity, and transformation
                </p>
              </div>

              <div className="relative h-[400px] w-full overflow-hidden rounded-[1.5rem] border border-dpet-beige/30 bg-dpet-beige-light/50 shadow-inner">
                <canvas ref={canvasRef} className="absolute inset-0" />

                <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="h-4 w-4 rounded-full bg-dpet-red shadow-lg"></div>
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-dpet-red/20 bg-white px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-dpet-red shadow-sm">
                    PALESTINE
                  </div>
                </div>
                <div className="absolute left-[80%] top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="h-4 w-4 rounded-full bg-dpet-olive shadow-lg"></div>
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-dpet-olive/20 bg-white px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-dpet-olive shadow-sm">
                    DURHAM
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {milestones.map((milestone, index) => (
                <Card key={index} className="dpet-card group p-6">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: milestone.color }}
                  >
                    <milestone.icon className="h-6 w-6" />
                  </div>
                  <div
                    className="mb-1 text-sm font-semibold uppercase tracking-[0.18em]"
                    style={{ color: milestone.color }}
                  >
                    {milestone.location}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-dpet-black transition-colors group-hover:text-dpet-red">
                    {milestone.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dpet-clay">
                    {milestone.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="dpet-card mx-auto max-w-4xl p-10 text-center">
            <Heart className="mx-auto mb-6 h-12 w-12 fill-dpet-red text-dpet-red" />
            <h2 className="mb-6 text-4xl font-semibold text-dpet-black md:text-5xl">
              Building a Global Community
            </h2>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-dpet-clay">
              Our scholars return to Palestine or join the global diaspora as
              ambassadors of change, carrying the knowledge and spirit of
              Durham with them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="dpet-dark-section rounded-[2rem] p-12 text-center text-white">
              <div className="relative z-10">
                <h2 className="mb-8 text-4xl font-semibold text-white md:text-5xl">
                  A Bridge of Opportunity
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div>
                    <div className="mb-2 text-5xl font-bold">50+</div>
                    <div className="text-lg">Scholars</div>
                    <div className="text-sm opacity-80">Who made the journey</div>
                  </div>
                  <div>
                    <div className="mb-2 text-5xl font-bold">15+</div>
                    <div className="text-lg">Years</div>
                    <div className="text-sm opacity-80">Of building bridges</div>
                  </div>
                  <div>
                    <div className="mb-2 text-5xl font-bold">∞</div>
                    <div className="text-lg">Impact</div>
                    <div className="text-sm opacity-80">Lives transformed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-soft-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="dpet-section-title">More Than Miles</h2>
            </div>

            <Card className="dpet-card p-8 md:p-12">
              <p className="mb-6 text-lg leading-relaxed text-dpet-clay">
                The journey from Palestine to Durham represents more than just
                physical distance. It's a bridge between two cultures, two
                communities, and countless opportunities. DPET scholars carry
                with them the rich heritage of Palestine—its resilience,
                creativity, and deep commitment to education.
              </p>
              <p className="text-lg leading-relaxed text-dpet-clay">
                At Durham, they encounter world-class academics, diverse
                perspectives, and the historic excellence of one of Britain's
                oldest universities. This fusion of Palestinian heritage and
                British academic tradition creates something truly special:
                scholars who are deeply rooted in their culture while equipped
                to make a global impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="dpet-dark-section py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="dpet-kicker mb-6">Take the First Step</div>
          <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">Begin Your Journey</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/85">
            The path from Palestine to Durham is waiting for talented students
            like you
          </p>
          <button
            onClick={() =>
              window.open(
                "https://durhampalestine.webspace.durham.ac.uk/apply/",
                "_blank",
              )
            }
            className="dpet-button-light rounded-full px-8 py-4 font-semibold"
          >
            Apply for Scholarship
          </button>
        </div>
      </section>
    </div>
  );
}
