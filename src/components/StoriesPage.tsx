import { Quote, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
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
      <section className="dpet-hero py-24">
        <div className="container dpet-hero-content mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="dpet-kicker mb-6">Scholar Voices</div>
            <h1 className="mb-6 text-5xl font-semibold text-white md:text-6xl">Scholar Stories</h1>
            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/85">
              Inspiring journeys of resilience, excellence, and hope from our
              DPET scholars.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="dpet-card mx-auto max-w-3xl p-8 text-center md:p-10">
            <Quote className="mx-auto mb-6 h-12 w-12 text-dpet-red" />
            <p className="text-xl leading-relaxed text-dpet-clay">
              Every scholarship tells a story. Each DPET scholar brings unique
              experiences, dreams, and determination. These are the voices of
              students who overcame challenges, pursued excellence, and are now
              making positive change in their communities and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="dpet-soft-section py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {stories.map((scholar, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center max-w-6xl mx-auto group`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/3">
                  <div className="relative">
                    <div className="dpet-card overflow-hidden p-3">
                      <ImageWithFallback
                        src={scholar.image}
                        alt={scholar.name}
                        className="h-[400px] w-full rounded-[1.25rem] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-[1.75rem] border border-dpet-gold/35 bg-dpet-red/10 -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <Card className="dpet-card p-8 transition-all duration-500 group-hover:shadow-dpet-hover">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-dpet-red/10">
                        <GraduationCap className="h-6 w-6 text-dpet-red" />
                      </div>
                      <div>
                        <h2 className="mb-2 text-3xl font-semibold text-dpet-black transition-colors group-hover:text-dpet-red">{scholar.name}</h2>
                        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-dpet-olive">{scholar.degree}</p>
                        <p className="text-sm text-dpet-clay/80">{scholar.year}</p>
                      </div>
                    </div>

                    <div className="relative mb-6 border-l-4 border-dpet-beige pl-6">
                      <Quote className="absolute -left-3 top-0 h-6 w-6 bg-white text-dpet-olive" />
                      <p className="leading-relaxed text-dpet-clay italic">"{scholar.story}"</p>
                    </div>

                    <div className="flex items-center gap-2 font-semibold text-dpet-olive">
                      <Briefcase className="h-5 w-5" />
                      <span>{scholar.currentRole}</span>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="dpet-section-title">The Ripple Effect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="dpet-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-dpet-red/10">
                  <GraduationCap className="h-8 w-8 text-dpet-red" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-dpet-red">50+</h3>
                <p className="font-medium text-dpet-clay">Scholars Educated</p>
              </Card>

              <Card className="dpet-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-dpet-olive/10">
                  <Briefcase className="h-8 w-8 text-dpet-olive" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-dpet-olive">100%</h3>
                <p className="font-medium text-dpet-clay">Employment Rate</p>
              </Card>

              <Card className="dpet-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-dpet-red/10">
                  <Heart className="h-8 w-8 text-dpet-red" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-dpet-red">15+</h3>
                <p className="font-medium text-dpet-clay">Years of Impact</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-dark-section py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="dpet-kicker mb-6">The Next Chapter</div>
          <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">Your Story Could Be Next</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/85">
            Join our community of scholars and write your own success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://durhampalestine.webspace.durham.ac.uk/apply/', '_blank')}
              className="dpet-button-light h-13 rounded-full px-8 py-6 font-semibold"
            >
              Apply for Scholarship
            </Button>
            <Button
              onClick={() => window.open('mailto:info@durhampalestine.org', '_blank')}
              className="dpet-button-outline-light h-13 rounded-full px-8 py-6 font-semibold"
            >
              Support Future Scholars
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
