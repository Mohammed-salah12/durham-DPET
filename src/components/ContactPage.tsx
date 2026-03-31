import { Mail, MapPin, Heart, Send, Globe, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@durhampalestine.org',
      link: 'mailto:info@durhampalestine.org',
      description: 'For general inquiries and support',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Durham University, Durham, UK',
      link: 'https://www.durham.ac.uk/',
      description: 'Located in historic Durham',
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'durhampalestine.webspace.durham.ac.uk',
      link: 'https://durhampalestine.webspace.durham.ac.uk/',
      description: 'Official DPET website',
    },
  ];

  const supportOptions = [
    {
      title: 'One-Time Donation',
      description: 'Make a single contribution to support Palestinian students',
      amount: 'Any Amount',
    },
    {
      title: 'Monthly Supporter',
      description: 'Become a recurring donor and create lasting impact',
      amount: 'From £25/month',
    },
    {
      title: 'Full Scholarship',
      description: 'Fund a complete scholarship for one student',
      amount: '£30,000+',
    },
  ];

  return (
    <div>
      <section className="dpet-hero py-24">
        <div className="container dpet-hero-content mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="dpet-kicker mb-6">Connect With DPET</div>
            <h1 className="mb-6 text-5xl font-semibold text-white md:text-6xl">Get in Touch</h1>
            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/85">
              Have questions? Want to support our mission? We&apos;d love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-semibold text-dpet-black">Send Us a Message</h2>
              <Card className="dpet-card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-dpet-black">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="mt-2 h-12 rounded-2xl border-dpet-beige/50 bg-white/80 px-4 focus:border-dpet-red focus:ring-dpet-red/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-semibold text-dpet-black">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="mt-2 h-12 rounded-2xl border-dpet-beige/50 bg-white/80 px-4 focus:border-dpet-red focus:ring-dpet-red/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-semibold text-dpet-black">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      required
                      className="mt-2 h-12 rounded-2xl border-dpet-beige/50 bg-white/80 px-4 focus:border-dpet-red focus:ring-dpet-red/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-semibold text-dpet-black">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="mt-2 min-h-36 rounded-[1.5rem] border-dpet-beige/50 bg-white/80 px-4 py-3 focus:border-dpet-red focus:ring-dpet-red/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="dpet-button-primary h-12 w-full rounded-2xl font-semibold"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <h2 className="mb-6 text-4xl font-semibold text-dpet-black">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="dpet-card p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-dpet-red/10">
                        <method.icon className="h-6 w-6 text-dpet-red" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-2xl font-semibold text-dpet-black">{method.title}</h3>
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-1 block font-medium text-dpet-olive transition-colors hover:text-dpet-red"
                        >
                          {method.value}
                        </a>
                        <p className="text-sm text-dpet-clay">{method.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="dpet-card mt-6 bg-dpet-beige-light/75 p-6">
                <div className="flex gap-3">
                  <MessageCircle className="h-6 w-6 flex-shrink-0 text-dpet-olive" />
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold text-dpet-black">Office Hours</h3>
                    <p className="text-sm leading-relaxed text-dpet-clay">
                      Monday - Friday: 9:00 AM - 5:00 PM (GMT)
                      <br />
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-soft-section py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="dpet-section-title">Support the Trust</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-dpet-clay">
                Your generosity enables Palestinian students to access
                world-class education. Every contribution makes a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {supportOptions.map((option, index) => (
                <Card key={index} className="dpet-card p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-dpet-red/10">
                    <Heart className="h-8 w-8 text-dpet-red" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-dpet-black">{option.title}</h3>
                  <p className="mb-4 leading-relaxed text-dpet-clay">{option.description}</p>
                  <div className="mb-6 text-lg font-semibold text-dpet-red">{option.amount}</div>
                  <Button
                    className="dpet-button-secondary h-11 w-full rounded-2xl font-semibold"
                    onClick={() => toast.info('Donation processing coming soon. Please contact us directly.')}
                  >
                    Support Now
                  </Button>
                </Card>
              ))}
            </div>

            <Card className="dpet-card mt-12 p-8">
              <div className="text-center">
                <h3 className="mb-4 text-3xl font-semibold text-dpet-black">Other Ways to Support</h3>
                <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-dpet-black">Corporate Partnerships</h4>
                    <p className="text-sm leading-relaxed text-dpet-clay">
                      Partner with DPET to create lasting impact through
                      corporate social responsibility programs.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-dpet-black">Legacy Giving</h4>
                    <p className="text-sm leading-relaxed text-dpet-clay">
                      Include DPET in your will to create a lasting legacy of
                      educational opportunity.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-dpet-black">Volunteer</h4>
                    <p className="text-sm leading-relaxed text-dpet-clay">
                      Offer mentorship, professional guidance, or help with
                      events and fundraising.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="dpet-section-title">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <Card className="dpet-card p-6">
                <h3 className="mb-2 text-2xl font-semibold text-dpet-black">How are donations used?</h3>
                <p className="leading-relaxed text-dpet-clay">
                  100% of donations go directly to supporting Palestinian
                  students through tuition, accommodation, living expenses, and
                  academic resources. We operate with minimal overhead through
                  volunteer support.
                </p>
              </Card>

              <Card className="dpet-card p-6">
                <h3 className="mb-2 text-2xl font-semibold text-dpet-black">Can I sponsor a specific student?</h3>
                <p className="leading-relaxed text-dpet-clay">
                  Yes! We offer opportunities for direct student sponsorship.
                  Contact us to learn more about connecting with and supporting
                  an individual scholar.
                </p>
              </Card>

              <Card className="dpet-card p-6">
                <h3 className="mb-2 text-2xl font-semibold text-dpet-black">Is DPET a registered charity?</h3>
                <p className="leading-relaxed text-dpet-clay">
                  DPET operates in partnership with Durham University. Please
                  contact us for specific information about tax-deductible
                  donations in your country.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="dpet-dark-section py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="dpet-kicker mb-6">Students, Supporters, Partners</div>
          <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">Ready to Make a Difference?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/85">
            Whether you&apos;re a prospective student, supporter, or partner,
            we&apos;re here to help.
          </p>
          <Button
            onClick={() => window.open('mailto:info@durhampalestine.org', '_blank')}
            className="dpet-button-light h-13 rounded-full px-8 py-6 font-semibold"
          >
            Contact Us Today <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
