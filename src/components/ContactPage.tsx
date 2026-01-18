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
    // Mock form submission
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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--dpet-olive)] to-[var(--dpet-olive-light)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6 text-white">Get in Touch</h1>
            <p className="text-xl">
              Have questions? Want to support our mission? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6 text-[var(--dpet-black)]">Send Us a Message</h2>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--dpet-red)] hover:bg-[var(--dpet-red-dark)] text-white"
                  >
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-[var(--dpet-black)]">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--dpet-red)]/10 rounded-full flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-[var(--dpet-red)]" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-[var(--dpet-black)]">{method.title}</h3>
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--dpet-olive)] hover:text-[var(--dpet-red)] transition-colors block mb-1"
                        >
                          {method.value}
                        </a>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 mt-6 bg-[var(--dpet-beige-light)] border-[var(--dpet-olive)]">
                <div className="flex gap-3">
                  <MessageCircle className="w-6 h-6 text-[var(--dpet-olive)] flex-shrink-0" />
                  <div>
                    <h3 className="mb-2 text-[var(--dpet-black)]">Office Hours</h3>
                    <p className="text-gray-700 text-sm">
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

      {/* Support the Trust */}
      <section className="py-20 bg-[var(--dpet-beige-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Support the Trust</h2>
              <div className="w-24 h-1 bg-[var(--dpet-red)] mx-auto rounded-full" />
              <p className="text-lg mt-6 text-gray-700 max-w-2xl mx-auto">
                Your generosity enables Palestinian students to access world-class education. 
                Every contribution makes a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--dpet-red)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-[var(--dpet-red)]" />
                    </div>
                    <h3 className="text-2xl mb-3 text-[var(--dpet-black)]">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="text-[var(--dpet-red)] mb-6">{option.amount}</div>
                    <Button
                      className="w-full bg-[var(--dpet-olive)] hover:bg-[var(--dpet-olive-light)] text-white"
                      onClick={() => toast.info('Donation processing coming soon. Please contact us directly.')}
                    >
                      Support Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-white">
              <div className="text-center">
                <h3 className="text-2xl mb-4 text-[var(--dpet-black)]">Other Ways to Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="mb-2 text-[var(--dpet-black)]">Corporate Partnerships</h4>
                    <p className="text-gray-600 text-sm">
                      Partner with DPET to create lasting impact through corporate social responsibility programs.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-[var(--dpet-black)]">Legacy Giving</h4>
                    <p className="text-gray-600 text-sm">
                      Include DPET in your will to create a lasting legacy of educational opportunity.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-[var(--dpet-black)]">Volunteer</h4>
                    <p className="text-gray-600 text-sm">
                      Offer mentorship, professional guidance, or help with events and fundraising.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[var(--dpet-black)]">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-[var(--dpet-olive)] mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl mb-2 text-[var(--dpet-black)]">How are donations used?</h3>
                <p className="text-gray-600">
                  100% of donations go directly to supporting Palestinian students through tuition, accommodation, 
                  living expenses, and academic resources. We operate with minimal overhead through volunteer support.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl mb-2 text-[var(--dpet-black)]">Can I sponsor a specific student?</h3>
                <p className="text-gray-600">
                  Yes! We offer opportunities for direct student sponsorship. Contact us to learn more about 
                  connecting with and supporting an individual scholar.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl mb-2 text-[var(--dpet-black)]">Is DPET a registered charity?</h3>
                <p className="text-gray-600">
                  DPET operates in partnership with Durham University. Please contact us for specific information 
                  about tax-deductible donations in your country.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--dpet-red)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-white">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a prospective student, supporter, or partner, we're here to help
          </p>
          <Button
            onClick={() => window.open('mailto:info@durhampalestine.org', '_blank')}
            className="bg-white text-[var(--dpet-red)] hover:bg-[var(--dpet-beige)] px-8 py-6"
          >
            Contact Us Today <Mail className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
