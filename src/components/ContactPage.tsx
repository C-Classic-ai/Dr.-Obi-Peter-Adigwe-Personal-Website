import { Mail, Phone, MapPin, Youtube, Twitter, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import PageHeader from './PageHeader';

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact" />
      
      {/* White Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-black">Connect for collaboration opportunities and professional inquiries</p>
          </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-[rgb(0,0,0)]">
            <CardContent className="p-8">
              <h2 className="text-2xl mb-6 text-[rgb(255,255,255)]">Official Contact</h2>
              <div className="space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <Mail className="text-white flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Official Email</p>
                    <p className="text-sm">o.p.adigwe@niprd.gov.ng</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-white flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Office Phone</p>
                    <p className="text-sm">+234 915 451 2070</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-white flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-sm">
                      National Institute for Pharmaceutical Research and Development (NIPRD)<br />
                      plot 942, cadastral zone C16, Idu Industrial District, Abuja, FCT, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 bg-[rgb(0,0,0)] text-white">
              <h2 className="text-2xl mb-6">Connect Online</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Youtube className="text-white flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">YouTube Channel</p>
                    <a href="https://www.youtube.com/c/drobiadigwe" target="_blank" rel="noopener noreferrer" 
                       className="text-sm text-white hover:underline">youtube.com/c/drobiadigwe</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="text-white flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Twitter</p>
                    <a href="https://www.x.com/dradigwe" target="_blank" rel="noopener noreferrer" 
                       className="text-sm text-white hover:underline">@dradigwe</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-white flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Speaking Engagements</p>
                    <p className="text-sm">Available for conferences and professional events</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="mb-4">Areas of Collaboration</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Pharmaceutical Policy</Badge>
                  <Badge variant="secondary">Vaccine Research</Badge>
                  <Badge variant="secondary">Health Systems</Badge>
                  <Badge variant="secondary">Academic Partnerships</Badge>
                  <Badge variant="secondary">Policy Reform</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>



        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8 bg-[rgb(0,0,0)] text-white">
            <h2 className="text-2xl mb-6 text-center">Professional Affiliations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="mb-2">National Institute for Pharmaceutical Research and Development (NIPRD)</h3>
                <p className="text-sm">Director General</p>
              </div>
              <div>
                <h3 className="mb-2">World Health Organisation (WHO)</h3>
                <p className="text-sm">Expert Working Groups Member</p>
              </div>
              <div>
                <h3 className="mb-2">African Union Health Committee</h3>
                <p className="text-sm">Strategic Advisor</p>
              </div>
              <div>
                <h3 className="mb-2">ECOWAS Health Ministers Advisory Board</h3>
                <p className="text-sm">Regional Advisor</p>
              </div>
              <div>
                <h3 className="mb-2">Nigerian Academy of Pharmacy</h3>
                <p className="text-sm">Fellow</p>
              </div>
              <div>
                <h3 className="mb-2">Pharmaceutical Society of Nigeria</h3>
                <p className="text-sm">Fellow</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center bg-[rgb(0,0,0)] text-white">
              <h2 className="text-2xl mb-4">Schedule a Consultation</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                For formal collaboration requests, speaking engagements, or academic partnerships, 
                please contact the office directly. Response time is typically 3-5 business days for professional inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:dg@niprd.gov.ng" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  <Mail size={20} />
                  Send Email
                </a>
                <a href="tel:+23492345678" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
                  <Phone size={20} />
                  Call Office
                </a>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>
    </div>
  );
}