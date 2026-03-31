import { ArrowRight, GraduationCap, Award, BookOpen, Heart, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/27e306b8ccec9cf83edb96ad6817b7f1cc0aa27d.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { icon: GraduationCap, value: '50+', label: 'Scholars Supported' },
    { icon: BookOpen, value: '15+', label: 'Years of Impact' },
    { icon: Award, value: '100%', label: 'Success Rate' },
    { icon: Globe, value: '3', label: 'Countries Reached' },
  ];

  const scholars = [
    {
      name: 'Layla Ahmed',
      program: 'MSc International Relations',
      image: 'https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMjYwMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The DPET scholarship gave me wings to pursue my dreams at one of the world\'s finest universities.',
    },
    {
      name: 'Omar Hassan',
      program: 'BA Economics',
      image: 'https://images.unsplash.com/photo-1624918479892-3e5df2910410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjI1MjM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'This opportunity has transformed my life and opened doors I never thought possible.',
    },
    {
      name: 'Noor Khalil',
      program: 'PhD Computer Science',
      image: 'https://images.unsplash.com/photo-1701760211427-e7a9068028b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjI0MTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Durham became my second home, and DPET made it all possible. Forever grateful.',
    },
  ];

  return (
    <div className="relative">
      <section className="dpet-hero min-h-[680px] border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Traditional Palestinian Tatreez embroidery with olive branch"
            className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dpet-black/90 via-dpet-red/45 to-transparent" />
        </div>

        <div className="dpet-hero-content container mx-auto flex min-h-[680px] items-center px-4 py-24">
          <div className="max-w-3xl text-white">
            <div className="dpet-kicker mb-6">
              Building Futures Since 2010
            </div>
            <h1 className="mb-6 max-w-3xl text-5xl font-semibold leading-[0.94] text-white md:text-7xl">
              Empowering Palestinian Students.
              <br />
              <span className="text-dpet-beige">Building a Future Through Education.</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-white/82 md:text-xl">
              Supporting exceptional Palestinian students to pursue world-class
              education at Durham University.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => onNavigate('apply')}
                className="dpet-button-primary h-13 rounded-full px-8 py-6 font-semibold"
              >
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                className="dpet-button-outline-light h-13 rounded-full px-8 py-6 font-semibold"
              >
                Support the Trust <Heart className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="dpet-card mx-auto max-w-6xl px-6 py-8 md:px-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-dpet-beige-light text-dpet-red transition-colors duration-500 group-hover:bg-dpet-red group-hover:text-white">
                    <stat.icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="mb-2 text-4xl font-extrabold text-dpet-red tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-dpet-clay">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-soft-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="dpet-section-title mb-12">Our Mission</h2>
            <div className="dpet-card p-8 md:p-12">
              <p className="mb-6 text-lg leading-relaxed text-dpet-black">
                The Durham Palestine Educational Trust (DPET) is dedicated to
                providing scholarships and support to outstanding Palestinian
                students seeking to pursue their higher education at Durham
                University. Founded on the principles of educational equity and
                cultural exchange, we believe that education is the cornerstone
                of peace, prosperity, and understanding.
              </p>
              <p className="text-lg leading-relaxed text-dpet-black">
                Through our scholarship program, we aim to create lasting
                bridges between Palestinian heritage and British academic
                excellence, empowering the next generation of leaders,
                thinkers, and change-makers who will shape a brighter future
                for their communities and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="dpet-section-title">Meet Our Scholars</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-dpet-clay">
              Stories of resilience, excellence, and hope
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholars.map((scholar, index) => (
              <Card key={index} className="dpet-card group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={scholar.image}
                    alt={scholar.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dpet-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold text-dpet-black transition-colors duration-300 group-hover:text-dpet-red">{scholar.name}</h3>
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-dpet-olive">{scholar.program}</div>
                  <p className="leading-relaxed text-dpet-clay italic">"{scholar.quote}"</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('stories')}
              className="dpet-button-outline-brand h-13 rounded-full px-8 py-6 font-semibold"
            >
              Read More Stories <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="dpet-dark-section py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="dpet-kicker mb-6">
            Scholarships, community, and opportunity
          </div>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-semibold text-white md:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-dpet-white/85">
            Join our community of scholars and make your mark at Durham
            University.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate('apply')}
              className="dpet-button-light h-13 rounded-full px-8 py-6 font-semibold"
            >
              Apply for Scholarship <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={() => onNavigate('about')}
              className="dpet-button-outline-light h-13 rounded-full px-8 py-6 font-semibold"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
