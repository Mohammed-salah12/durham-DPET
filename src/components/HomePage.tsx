import { ArrowRight, GraduationCap, Users, Award, BookOpen, Heart, Globe } from 'lucide-react';
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
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Traditional Palestinian Tatreez embroidery with olive branch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--dpet-black)]/80 via-[var(--dpet-red)]/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-4 py-2 bg-[var(--dpet-red)]/90 rounded-full mb-6">
              <span className="text-sm">Building Futures Since 2010</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Empowering Palestinian Students.
              <br />
              <span className="text-[var(--dpet-beige)]">Building a Future Through Education.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Supporting exceptional Palestinian students to pursue world-class education at Durham University.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => onNavigate('apply')}
                className="bg-[var(--dpet-red)] hover:bg-[var(--dpet-red-dark)] text-white px-8 py-6"
              >
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="border-white text-[var(--dpet-red)] hover:bg-white hover:text-[var(--dpet-black)] px-8 py-6"
              >
                Support the Trust <Heart className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b border-[var(--dpet-beige)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--dpet-beige)] rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-[var(--dpet-red)]" />
                </div>
                <div className="text-4xl mb-2 text-[var(--dpet-red)]">{stat.value}</div>
                <div className="text-[var(--dpet-olive)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Our Mission</h2>
              <div className="w-24 h-1 bg-[var(--dpet-red)] mx-auto rounded-full" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg mb-6 text-[var(--dpet-black)] leading-relaxed">
                The Durham Palestine Educational Trust (DPET) is dedicated to providing scholarships and support to outstanding Palestinian students seeking to pursue their higher education at Durham University. Founded on the principles of educational equity and cultural exchange, we believe that education is the cornerstone of peace, prosperity, and understanding.
              </p>
              <p className="text-lg text-[var(--dpet-black)] leading-relaxed">
                Through our scholarship program, we aim to create lasting bridges between Palestinian heritage and British academic excellence, empowering the next generation of leaders, thinkers, and change-makers who will shape a brighter future for their communities and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Scholars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Meet Our Scholars</h2>
            <div className="w-24 h-1 bg-[var(--dpet-olive)] mx-auto rounded-full" />
            <p className="text-lg mt-6 text-[var(--dpet-olive)]">
              Stories of resilience, excellence, and hope
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholars.map((scholar, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={scholar.image}
                    alt={scholar.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[var(--dpet-black)]">{scholar.name}</h3>
                  <div className="text-sm text-[var(--dpet-olive)] mb-4">{scholar.program}</div>
                  <p className="text-gray-600 italic">"{scholar.quote}"</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('stories')}
              variant="outline"
              className="border-[var(--dpet-olive)] text-[var(--dpet-olive)] hover:bg-[var(--dpet-olive)] hover:text-white"
            >
              Read More Stories <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--dpet-olive)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-white">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of scholars and make your mark at Durham University
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate('apply')}
              className="bg-white text-[var(--dpet-olive)] hover:bg-[var(--dpet-beige)] px-8 py-6"
            >
              Apply for Scholarship <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={() => onNavigate('about')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--dpet-olive)] px-8 py-6"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
