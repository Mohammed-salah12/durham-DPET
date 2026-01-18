import { Quote, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StoriesPage() {
  const stories = [
    {
      name: 'Layla Ahmed',
      year: '2018-2020',
      degree: 'MSc International Relations',
      image: 'https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMjYwMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Growing up in Gaza, I dreamed of pursuing higher education but faced countless obstacles. DPET didn\'t just provide financial support—they gave me hope and opportunity. At Durham, I discovered my passion for conflict resolution and peacebuilding. Today, I work with an international NGO, helping communities affected by conflict. The DPET scholarship transformed not just my life, but also the lives of those I now serve.',
      currentRole: 'Peace & Conflict Advisor, International NGO',
    },
    {
      name: 'Omar Hassan',
      year: '2015-2018',
      degree: 'BA Economics & Politics',
      image: 'https://images.unsplash.com/photo-1624918479892-3e5df2910410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjI1MjM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Durham became my second home, a place where I could pursue academic excellence while staying connected to my Palestinian roots. The DPET community provided not just financial support, but mentorship, friendship, and a sense of belonging. My economics degree opened doors I never imagined possible. I returned to Palestine with knowledge, connections, and a deep commitment to economic development in my community.',
      currentRole: 'Economic Development Consultant, Ramallah',
    },
    {
      name: 'Noor Khalil',
      year: '2019-2023',
      degree: 'PhD Computer Science',
      image: 'https://images.unsplash.com/photo-1701760211427-e7a9068028b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjI0MTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'As a female Palestinian student in STEM, I faced unique challenges. DPET believed in me when many others doubted. During my PhD at Durham, I researched AI applications for humanitarian assistance, work that directly impacts Palestinian communities. The scholarship didn\'t just fund my education—it empowered me to become a role model for young Palestinian women in technology. I now teach at a Palestinian university, inspiring the next generation.',
      currentRole: 'Assistant Professor of Computer Science',
    },
    {
      name: 'Khalid Mansour',
      year: '2016-2017',
      degree: 'MA Middle Eastern Studies',
      image: 'https://images.unsplash.com/photo-1669608200997-23a98a5e5ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxlc3RpbmlhbiUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzYyMjY1MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'My time at Durham was transformative. DPET gave me the opportunity to study my own culture and history from an academic perspective, deepening my understanding of Palestinian identity and heritage. The connections I made with scholars from around the world enriched my perspective and strengthened my commitment to cultural preservation. I now curate exhibitions on Palestinian art and culture, sharing our rich heritage with global audiences.',
      currentRole: 'Cultural Heritage Curator',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--dpet-olive)] to-[var(--dpet-olive-light)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6 text-white">Scholar Stories</h1>
            <p className="text-xl">
              Inspiring journeys of resilience, excellence, and hope from our DPET scholars
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-[var(--dpet-red)] mx-auto mb-6" />
            <p className="text-xl text-gray-700">
              Every scholarship tells a story. Each DPET scholar brings unique experiences, dreams, and determination. 
              These are the voices of students who overcame challenges, pursued excellence, and are now making 
              positive change in their communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Scholar Stories */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {stories.map((scholar, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center max-w-6xl mx-auto`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/3">
                  <div className="relative">
                    <ImageWithFallback
                      src={scholar.image}
                      alt={scholar.name}
                      className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--dpet-red)] rounded-lg opacity-20 -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <Card className="p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-[var(--dpet-red)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-[var(--dpet-red)]" />
                      </div>
                      <div>
                        <h2 className="text-3xl mb-2 text-[var(--dpet-black)]">{scholar.name}</h2>
                        <p className="text-[var(--dpet-olive)] mb-1">{scholar.degree}</p>
                        <p className="text-gray-500 text-sm">{scholar.year}</p>
                      </div>
                    </div>

                    <div className="relative pl-6 border-l-4 border-[var(--dpet-beige)] mb-6">
                      <Quote className="absolute -left-3 top-0 w-6 h-6 text-[var(--dpet-olive)] bg-white" />
                      <p className="text-gray-700 italic leading-relaxed">{scholar.story}</p>
                    </div>

                    <div className="flex items-center gap-2 text-[var(--dpet-olive)]">
                      <Briefcase className="w-5 h-5" />
                      <span>{scholar.currentRole}</span>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">The Ripple Effect</h2>
              <div className="w-24 h-1 bg-[var(--dpet-red)] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[var(--dpet-red)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-[var(--dpet-red)]" />
                </div>
                <h3 className="text-2xl mb-2 text-[var(--dpet-red)]">50+</h3>
                <p className="text-gray-600">Scholars Educated</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[var(--dpet-olive)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-[var(--dpet-olive)]" />
                </div>
                <h3 className="text-2xl mb-2 text-[var(--dpet-olive)]">100%</h3>
                <p className="text-gray-600">Employment Rate</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[var(--dpet-red)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[var(--dpet-red)]" />
                </div>
                <h3 className="text-2xl mb-2 text-[var(--dpet-red)]">1000+</h3>
                <p className="text-gray-600">Lives Impacted</p>
              </Card>
            </div>

            <div className="mt-12 bg-gradient-to-br from-[var(--dpet-beige)] to-[var(--dpet-beige-light)] rounded-lg p-8 text-center">
              <p className="text-lg text-gray-700">
                Each DPET scholar goes on to impact hundreds of lives in their communities—through teaching, 
                healthcare, business, advocacy, and leadership. The investment in one student creates a 
                ripple effect of positive change that extends far beyond the individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--dpet-red)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-white">Your Story Could Be Next</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of scholars and write your own success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://durhampalestine.webspace.durham.ac.uk/apply/', '_blank')}
              className="bg-white text-[var(--dpet-red)] hover:bg-[var(--dpet-beige)] px-8 py-4 rounded-md transition-colors"
            >
              Apply for Scholarship
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--dpet-red)] px-8 py-4 rounded-md transition-colors"
            >
              Support Future Scholars
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
