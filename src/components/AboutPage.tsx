import {
  Target,
  Users,
  Heart,
  Award,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const milestones = [
    {
      year: "2010",
      event: "DPET Founded",
      description: "Trust established to support Palestinian students",
    },
    {
      year: "2012",
      event: "First Scholars",
      description: "5 Palestinian students awarded scholarships",
    },
    {
      year: "2015",
      event: "Partnership Expansion",
      description: "Partnerships with additional Durham colleges",
    },
    {
      year: "2020",
      event: "50 Scholars Milestone",
      description: "Supported our 50th Palestinian scholar",
    },
    {
      year: "2025",
      event: "Growing Impact",
      description: "Continuing to empower the next generation",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We support students who demonstrate exceptional academic achievement and leadership potential.",
    },
    {
      icon: Heart,
      title: "Equity",
      description:
        "We believe education should be accessible to talented students regardless of their circumstances.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We foster a supportive network of scholars, alumni, and partners committed to mutual growth.",
    },
    {
      icon: Award,
      title: "Impact",
      description:
        "We measure success by the positive change our scholars bring to their communities.",
    },
  ];

  const partners = [
    { name: "Durham University", url: "https://www.durham.ac.uk/" },
    {
      name: "Various Durham Colleges",
      url: "https://www.durham.ac.uk/study/colleges/",
    },
    { name: "Palestinian Educational Organizations", url: "#" },
    { name: "Individual Donors & Supporters", url: "#" },
  ];

  return (
    <div>
      <section className="dpet-hero py-24">
        <div className="container dpet-hero-content mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="dpet-kicker mb-6">Who We Are</div>
            <h1 className="mb-6 text-5xl font-semibold text-white md:text-6xl">About DPET</h1>
            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/85">
              Building bridges between Palestinian heritage and Durham&apos;s
              academic excellence since 2010.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="dpet-section-title dpet-section-title-left mb-8">
                Our Story
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-dpet-clay">
                <p>
                  The Durham Palestine Educational Trust was founded in 2010 by
                  a group of passionate Durham alumni and academics who
                  recognized the immense potential of Palestinian students and
                  the barriers they faced in accessing world-class higher
                  education.
                </p>
                <p>
                  What began as a modest initiative to support a handful of
                  students has grown into a thriving program that has
                  transformed the lives of over 50 Palestinian scholars. Our
                  scholars have gone on to become leaders in academia, public
                  service, technology, and community development.
                </p>
                <p>
                  Today, DPET stands as a testament to the power of education to
                  transcend borders, build understanding, and create lasting
                  positive change. We are proud to continue this mission in
                  partnership with Durham University and our dedicated
                  supporters worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="dpet-card overflow-hidden p-3">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1688167217076-190b0ec8428f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdXJoYW0lMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2MjI2NTExMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Durham University Campus"
                  className="h-[420px] w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <div className="absolute inset-0 -z-10 translate-x-5 -translate-y-5 rounded-[2rem] border border-dpet-gold/40" />
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-soft-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="dpet-section-title">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="dpet-card group p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-dpet-red/10 transition-all duration-300 group-hover:bg-dpet-red group-hover:text-white">
                  <value.icon className="h-6 w-6 text-dpet-red transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-dpet-black">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-dpet-clay">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="dpet-section-title">Our Journey</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-8 top-0 hidden w-0.5 bg-dpet-gold/25 md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-8 group">
                    <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-dpet-red text-white shadow-lg shadow-dpet-red/20">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <Card className="dpet-card flex-1 p-6 transition-all group-hover:shadow-dpet-hover">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-dpet-red">
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl font-semibold text-dpet-black">
                          {milestone.event}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-dpet-clay">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-dark-section py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="dpet-kicker mb-6">Shared Commitment</div>
          <h2 className="mb-4 text-4xl font-semibold text-white md:text-5xl">Our Partners</h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl text-white/80">
            Together, we&apos;re making education accessible to Palestinian students.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dpet-glass flex flex-col items-center gap-4 p-6 text-white/85 transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <div className="rounded-2xl bg-white/10 p-4 transition-all">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold tracking-[0.04em]">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="dpet-card p-8 text-center md:p-12">
              <div className="dpet-kicker mb-5 !border-dpet-gold/30 !bg-dpet-beige-light !text-dpet-clay">
                Why it matters
              </div>
              <h2 className="mb-6 text-4xl font-semibold text-dpet-black md:text-5xl">
                Making a Difference
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-dpet-clay">
                Every scholarship represents more than financial support. It&apos;s an
                investment in potential, a bridge between cultures, and a
                commitment to a brighter future. Our scholars return to their
                communities as educated leaders, ready to make positive change.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <div className="mb-2 text-4xl font-bold text-dpet-red">
                    50+
                  </div>
                  <div className="text-dpet-clay">Scholars Graduated</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold text-dpet-red">
                    100%
                  </div>
                  <div className="text-dpet-clay">Completion Rate</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold text-dpet-red">
                    15+
                  </div>
                  <div className="text-dpet-clay">Years of Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
