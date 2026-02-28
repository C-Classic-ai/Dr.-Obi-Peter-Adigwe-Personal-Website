import { BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import PageHeader from './PageHeader';

export default function BooksPage() {
  return (
    <div>
      <PageHeader title="Books" />
      
      {/* White Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-black">Comprehensive works on pharmaceutical policy and healthcare systems</p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Pharmaceutical Policy in Developing Nations</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive guide to evidence-based policy making for healthcare systems in emerging economies.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Policy</Badge>
                <span className="text-xs text-muted-foreground">2018</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Rational Use of Medicines: A Global Perspective</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Essential reading on optimizing medicine utilization patterns and improving healthcare outcomes worldwide.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Healthcare</Badge>
                <span className="text-xs text-muted-foreground">2015</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Innovation in African Pharmaceutical Research</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Exploring opportunities and challenges in developing indigenous pharmaceutical capabilities across Africa.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Research</Badge>
                <span className="text-xs text-muted-foreground">2020</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Vaccine Development and Policy</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Strategic framework for developing vaccine manufacturing capabilities in emerging economies.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Vaccines</Badge>
                <span className="text-xs text-muted-foreground">2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-accent/30 to-primary/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Traditional Medicine in Modern Healthcare</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Bridging indigenous knowledge systems with contemporary pharmaceutical science and regulation.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Traditional Medicine</Badge>
                <span className="text-xs text-muted-foreground">2022</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Leadership in Pharmaceutical Research</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Practical guide for emerging leaders in pharmaceutical research institutions and policy organizations.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Leadership</Badge>
                <span className="text-xs text-muted-foreground">2023</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-primary/40 to-accent/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Healthcare Systems Strengthening</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive approach to building resilient healthcare infrastructure in developing countries.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Systems</Badge>
                <span className="text-xs text-muted-foreground">2019</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-secondary/40 to-primary/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Global Health Policy Frameworks</h2>
              <p className="text-sm text-muted-foreground mb-4">
                International perspectives on pharmaceutical regulation and cross-border health policy coordination.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Global Policy</Badge>
                <span className="text-xs text-muted-foreground">2017</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-accent/40 to-secondary/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={48} />
                </div>
              </div>
              <h2 className="mb-3">Pharmaceutical Economics and Access</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Economic analysis of pharmaceutical markets and strategies for improving medicine accessibility.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-xs">Economics</Badge>
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl mb-6 text-center">About Dr. Adigwe's Publications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4">Publication Impact</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Over 50 peer-reviewed publications in leading journals</li>
                    <li>• Cited more than 1,200 times in academic literature</li>
                    <li>• Published in 15 different languages</li>
                    <li>• Featured in policy documents across 20+ countries</li>
                    <li>• Used as reference material in 30+ universities worldwide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4">Key Themes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Evidence-based pharmaceutical policy development</li>
                    <li>• Healthcare systems strengthening in developing nations</li>
                    <li>• Traditional medicine integration and commercialization</li>
                    <li>• Vaccine development and manufacturing strategies</li>
                    <li>• Leadership development in pharmaceutical research</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>
    </div>
  );
}