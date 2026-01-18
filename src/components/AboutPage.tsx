import { Target, Users, Heart, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const milestones = [
    { year: '2010', event: 'DPET Founded', description: 'Trust established to support Palestinian students' },
    { year: '2012', event: 'First Scholars', description: '5 Palestinian students awarded scholarships' },
    { year: '2015', event: 'Partnership Expansion', description: 'Partnerships with additional Durham colleges' },
    { year: '2020', event: '50 Scholars Milestone', description: 'Supported our 50th Palestinian scholar' },
    { year: '2025', event: 'Growing Impact', description: 'Continuing to empower the next generation' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We support students who demonstrate exceptional academic achievement and leadership potential.',
    },
    {
      icon: Heart,
      title: 'Equity',
      description: 'We believe education should be accessible to talented students regardless of their circumstances.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive network of scholars, alumni, and partners committed to mutual growth.',
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'We measure success by the positive change our scholars bring to their communities.',
    },
  ];

  const partners = [
    { name: 'Durham University', url: 'https://www.durham.ac.uk/' },
    { name: 'Various Durham Colleges', url: 'https://www.durham.ac.uk/study/colleges/' },
    { name: 'Palestinian Educational Organizations', url: '#' },
    { name: 'Individual Donors & Supporters', url: '#' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--dpet-red)] to-[var(--dpet-red-dark)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6 text-white">About DPET</h1>
            <p className="text-xl">
              Building bridges between Palestinian heritage and Durham's academic excellence since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-[var(--dpet-black)]">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  The Durham Palestine Educational Trust was founded in 2010 by a group of passionate Durham alumni and academics who recognized the immense potential of Palestinian students and the barriers they faced in accessing world-class higher education.
                </p>
                <p>
                  What began as a modest initiative to support a handful of students has grown into a thriving program that has transformed the lives of over 50 Palestinian scholars. Our scholars have gone on to become leaders in academia, public service, technology, and community development.
                </p>
                <p>
                  Today, DPET stands as a testament to the power of education to transcend borders, build understanding, and create lasting positive change. We are proud to continue this mission in partnership with Durham University and our dedicated supporters worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1688167217076-190b0ec8428f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdXJoYW0lMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2MjI2NTExMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Durham University Campus"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 border-4 border-[var(--dpet-olive)] rounded-lg -translate-x-4 -translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Our Values</h2>
            <div className="w-24 h-1 bg-[var(--dpet-red)] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--dpet-red)]/10 rounded-full mb-4">
                  <value.icon className="w-6 h-6 text-[var(--dpet-red)]" />
                </div>
                <h3 className="text-xl mb-3 text-[var(--dpet-black)]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Our Journey</h2>
            <div className="w-24 h-1 bg-[var(--dpet-olive)] mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--dpet-beige)] hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-[var(--dpet-red)] rounded-full flex items-center justify-center text-white z-10">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <Card className="flex-1 p-6">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl text-[var(--dpet-red)]">{milestone.year}</span>
                        <h3 className="text-xl text-[var(--dpet-black)]">{milestone.event}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-[var(--dpet-olive)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-white">Our Partners</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full" />
            <p className="text-xl mt-6">
              Together, we're making education accessible to Palestinian students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="mb-3 text-[var(--dpet-black)]">{partner.name}</h3>
                {partner.url !== '#' && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dpet-olive)] hover:text-[var(--dpet-red)] transition-colors inline-flex items-center gap-1 text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--dpet-beige)] to-[var(--dpet-beige-light)] rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-4xl mb-6 text-[var(--dpet-black)]">Making a Difference</h2>
              <p className="text-lg text-gray-700 mb-8">
                Every scholarship represents more than financial support—it's an investment in potential, a bridge between cultures, and a commitment to a brighter future. Our scholars return to their communities as educated leaders, ready to make positive change.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl text-[var(--dpet-red)] mb-2">50+</div>
                  <div className="text-gray-700">Scholars Graduated</div>
                </div>
                <div>
                  <div className="text-4xl text-[var(--dpet-red)] mb-2">100%</div>
                  <div className="text-gray-700">Completion Rate</div>
                </div>
                <div>
                  <div className="text-4xl text-[var(--dpet-red)] mb-2">15+</div>
                  <div className="text-gray-700">Years of Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
