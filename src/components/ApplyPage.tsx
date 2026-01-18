import { CheckCircle, Calendar, FileText, Users, ArrowRight, ExternalLink, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';

export function ApplyPage() {
  const eligibilityCriteria = [
    'Palestinian nationality or Palestinian heritage',
    'Excellent academic record (equivalent to UK first-class honours)',
    'Acceptance or conditional offer from Durham University',
    'Demonstrated financial need',
    'Strong leadership potential and commitment to community service',
    'Proficiency in English (IELTS 7.0+ or equivalent)',
  ];

  const applicationSteps = [
    {
      number: 1,
      title: 'Check Eligibility',
      description: 'Review the eligibility criteria and ensure you meet all requirements.',
    },
    {
      number: 2,
      title: 'Prepare Documents',
      description: 'Gather academic transcripts, references, personal statement, and Durham acceptance letter.',
    },
    {
      number: 3,
      title: 'Complete Application',
      description: 'Fill out the online application form with accurate and complete information.',
    },
    {
      number: 4,
      title: 'Submit & Wait',
      description: 'Submit your application and wait for our selection committee to review.',
    },
  ];

  const requiredDocuments = [
    'Academic transcripts (certified translations if not in English)',
    'Two academic references',
    'Personal statement (max 1000 words)',
    'Durham University acceptance or conditional offer letter',
    'Proof of Palestinian identity or heritage',
    'Financial need statement',
    'CV/Resume',
    'English language proficiency certificate',
  ];

  const timeline = [
    { date: 'January 15', event: 'Application Opens', status: 'completed' },
    { date: 'March 31', event: 'Application Deadline', status: 'upcoming' },
    { date: 'April 30', event: 'Shortlist Announced', status: 'future' },
    { date: 'May 15', event: 'Interviews Conducted', status: 'future' },
    { date: 'June 1', event: 'Final Decisions', status: 'future' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--dpet-olive)] to-[var(--dpet-olive-light)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6 text-white">Apply for Scholarship</h1>
            <p className="text-xl mb-8">
              Take the first step towards your Durham University education
            </p>
            <Alert className="bg-white/10 border-white/20 text-white max-w-2xl mx-auto">
              <AlertCircle className="h-5 w-5" />
              <AlertDescription>
                Applications for the 2025-2026 academic year are now open. Deadline: March 31, 2025
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Eligibility Criteria</h2>
              <div className="w-24 h-1 bg-[var(--dpet-red)] mx-auto rounded-full" />
            </div>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--dpet-olive)] flex-shrink-0" />
                    <span className="text-gray-700">{criteria}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Application Process</h2>
            <div className="w-24 h-1 bg-[var(--dpet-olive)] mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step) => (
              <Card key={step.number} className="p-6 relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-[var(--dpet-red)] rounded-full flex items-center justify-center text-white">
                  {step.number}
                </div>
                <h3 className="text-xl mb-3 mt-2 text-[var(--dpet-black)]">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Required Documents</h2>
              <div className="w-24 h-1 bg-[var(--dpet-red)] mx-auto rounded-full" />
            </div>

            <Card className="p-8">
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <FileText className="w-5 h-5 text-[var(--dpet-olive)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[var(--dpet-beige)] rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> All documents must be submitted in English or with certified English translations. 
                  Incomplete applications will not be considered.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Application Timeline</h2>
              <div className="w-24 h-1 bg-[var(--dpet-olive)] mx-auto rounded-full" />
            </div>

            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === 'completed' ? 'bg-[var(--dpet-olive)]' : 
                      item.status === 'upcoming' ? 'bg-[var(--dpet-red)]' : 
                      'bg-gray-300'
                    }`}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-300 my-2" />
                    )}
                  </div>
                  <Card className="flex-1 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl mb-1 text-[var(--dpet-black)]">{item.event}</h3>
                        <p className="text-gray-600">{item.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.status === 'completed' ? 'bg-[var(--dpet-olive)]/10 text-[var(--dpet-olive)]' : 
                        item.status === 'upcoming' ? 'bg-[var(--dpet-red)]/10 text-[var(--dpet-red)]' : 
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--dpet-red)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-white">Ready to Apply?</h2>
            <p className="text-xl mb-8">
              Start your application today and take the first step towards your Durham education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://durhampalestine.webspace.durham.ac.uk/apply/', '_blank')}
                className="bg-white text-[var(--dpet-red)] hover:bg-[var(--dpet-beige)] px-8 py-6"
              >
                Start Application <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => window.open('mailto:info@durhampalestine.org')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--dpet-red)] px-8 py-6"
              >
                Contact Us for Help
              </Button>
            </div>
            <div className="mt-8">
              <a
                href="https://durhampalestine.webspace.durham.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Visit Official DPET Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-[var(--dpet-olive)] mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl mb-2 text-[var(--dpet-black)]">Can I apply if I don't have a Durham offer yet?</h3>
                <p className="text-gray-600">
                  Yes, you can submit your application with a conditional offer or while your Durham application is pending. However, the scholarship will only be awarded upon confirmation of your Durham acceptance.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl mb-2 text-[var(--dpet-black)]">What does the scholarship cover?</h3>
                <p className="text-gray-600">
                  The scholarship typically covers full tuition fees, accommodation, and a living allowance. Specific coverage may vary based on available funding and individual circumstances.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl mb-2 text-[var(--dpet-black)]">How competitive is the selection process?</h3>
                <p className="text-gray-600">
                  The selection process is competitive, with many qualified applicants. We evaluate candidates holistically, considering academic excellence, leadership potential, financial need, and commitment to community service.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
