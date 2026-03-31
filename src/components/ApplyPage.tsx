import {
  CheckCircle,
  Calendar,
  FileText,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  ClipboardCheck,
  FolderOpen,
  Send,
  UserCheck,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";

export function ApplyPage() {
  const eligibilityCriteria = [
    "Palestinian nationality or Palestinian heritage",
    "Excellent academic record (equivalent to UK first-class honours)",
    "Acceptance or conditional offer from Durham University",
    "Demonstrated financial need",
    "Strong leadership potential and commitment to community service",
    "Proficiency in English (IELTS 7.0+ or equivalent)",
  ];

  const applicationSteps = [
    {
      number: 1,
      title: "Check Eligibility",
      icon: UserCheck,
      description:
        "Review the eligibility criteria and ensure you meet all requirements.",
    },
    {
      number: 2,
      title: "Prepare Documents",
      icon: FolderOpen,
      description:
        "Gather academic transcripts, references, personal statement, and Durham acceptance letter.",
    },
    {
      number: 3,
      title: "Complete Application",
      icon: ClipboardCheck,
      description:
        "Fill out the online application form with accurate and complete information.",
    },
    {
      number: 4,
      title: "Submit & Wait",
      icon: Send,
      description:
        "Submit your application and wait for our selection committee to review.",
    },
  ];

  const requiredDocuments = [
    "Academic transcripts (certified translations if not in English)",
    "Two academic references",
    "Personal statement (max 1000 words)",
    "Durham University acceptance or conditional offer letter",
    "Proof of Palestinian identity or heritage",
    "Financial need statement",
    "CV/Resume",
    "English language proficiency certificate",
  ];

  const timeline = [
    { date: "January 15", event: "Application Opens", status: "completed" },
    { date: "March 31", event: "Application Deadline", status: "upcoming" },
    { date: "April 30", event: "Shortlist Announced", status: "future" },
    { date: "May 15", event: "Interviews Conducted", status: "future" },
    { date: "June 1", event: "Final Decisions", status: "future" },
  ];

  return (
    <div>
      <section className="dpet-hero py-24">
        <div className="container dpet-hero-content mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="dpet-kicker mb-6">Scholarship Applications</div>
            <h1 className="mb-6 text-5xl font-semibold text-white md:text-6xl">
              Apply for Scholarship
            </h1>
            <p className="mb-8 text-xl font-medium leading-relaxed text-white/85">
              Take the first step towards your Durham University education
            </p>
            <Alert className="dpet-glass mx-auto max-w-2xl border-white/20 text-white">
              <AlertCircle className="h-5 w-5" />
              <AlertDescription className="font-bold">
                Applications for the 2025-2026 academic year are now open.
                Deadline: March 31, 2025
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="dpet-section-title">Eligibility Criteria</h2>
            </div>

            <Card className="dpet-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex gap-3 items-center group">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-dpet-olive" />
                    <span className="leading-relaxed text-dpet-clay">{criteria}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="dpet-soft-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="dpet-section-title">Application Process</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step) => (
              <Card
                key={step.number}
                className="dpet-card relative p-6 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-dpet-red/10 shadow-sm transition-all duration-300 group-hover:bg-dpet-red">
                  <step.icon className="h-8 w-8 text-dpet-red transition-colors group-hover:text-white" />
                </div>
                <div className="absolute right-4 top-2 text-4xl font-bold text-dpet-beige/30 transition-colors group-hover:text-dpet-red/10">
                  {step.number}
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-dpet-black transition-colors group-hover:text-dpet-red">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-dpet-clay">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="dpet-section-title">Required Documents</h2>
            </div>

            <Card className="dpet-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex gap-3 items-start group">
                    <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-dpet-olive" />
                    <span className="text-sm leading-relaxed text-dpet-clay">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-dpet-beige/40 bg-dpet-beige-light/70 p-6">
                <p className="text-sm leading-relaxed text-dpet-clay">
                  <strong className="text-dpet-red">Note:</strong> All documents
                  must be submitted in English or with certified English
                  translations. Incomplete applications will not be considered.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="dpet-soft-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="dpet-section-title">Application Timeline</h2>
            </div>

            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${
                        item.status === "completed"
                          ? "bg-dpet-olive"
                          : item.status === "upcoming"
                            ? "bg-dpet-red"
                            : "bg-dpet-clay/50"
                      }`}
                    >
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="my-2 h-16 w-0.5 bg-dpet-gold/25" />
                    )}
                  </div>
                  <Card className="dpet-card flex-1 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="mb-1 text-2xl font-semibold text-dpet-black">
                          {item.event}
                        </h3>
                        <p className="text-dpet-clay">{item.date}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          item.status === "completed"
                            ? "bg-dpet-olive/10 text-dpet-olive"
                            : item.status === "upcoming"
                              ? "bg-dpet-red/10 text-dpet-red"
                              : "bg-white/70 text-dpet-clay"
                        }`}
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-dark-section py-20">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="dpet-kicker mb-6">Application Support</div>
            <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">Ready to Apply?</h2>
            <p className="mb-8 text-xl text-white/85">
              Start your application today and take the first step towards your
              Durham education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://durhampalestine.webspace.durham.ac.uk/apply/",
                    "_blank",
                  )
                }
                className="dpet-button-light h-13 rounded-full px-8 py-6 font-semibold"
              >
                Start Application <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => window.open("mailto:info@durhampalestine.org")}
                className="dpet-button-outline-light h-13 rounded-full px-8 py-6 font-semibold"
              >
                Contact Us for Help
              </Button>
            </div>
            <div className="mt-8">
              <a
                href="https://durhampalestine.webspace.durham.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
              >
                Visit Official DPET Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="dpet-section-title">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <Card className="dpet-card p-6">
                <h3 className="mb-2 text-2xl font-semibold text-dpet-black">
                  Can I apply if I don't have a Durham offer yet?
                </h3>
                <p className="leading-relaxed text-dpet-clay">
                  Yes, you can submit your application with a conditional offer
                  or while your Durham application is pending. However, the
                  scholarship will only be awarded upon confirmation of your
                  Durham acceptance.
                </p>
              </Card>

              <Card className="dpet-card p-6">
                <h3 className="mb-2 text-2xl font-semibold text-dpet-black">
                  What does the scholarship cover?
                </h3>
                <p className="leading-relaxed text-dpet-clay">
                  The scholarship typically covers full tuition fees,
                  accommodation, and a living allowance. Specific coverage may
                  vary based on available funding and individual circumstances.
                </p>
              </Card>

              <Card className="dpet-card p-6">
                <h3 className="mb-2 text-2xl font-semibold text-dpet-black">
                  How competitive is the selection process?
                </h3>
                <p className="leading-relaxed text-dpet-clay">
                  The selection process is competitive, with many qualified
                  applicants. We evaluate candidates holistically, considering
                  academic excellence, leadership potential, financial need, and
                  commitment to community service.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
