import { GraduationCap, BookOpen, Users, Globe, Award, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import PageHeader from './PageHeader';

export default function MentorshipPage() {
  return (
    <div>
      <PageHeader title="Mentorship" />
      
      {/* White Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-black">Shaping the next generation of pharmaceutical professionals</p>
          </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl mb-6">Mentorship Statistics</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-primary" size={24} />
                    <span>PhD Candidates Mentored</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-primary" size={24} />
                    <span>MSc Students Supervised</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">30+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="text-primary" size={24} />
                    <span>Pharmacists Trained</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">100+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="text-primary" size={24} />
                    <span>International Collaborations</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">25+</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl mb-6">Mentorship Philosophy</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "Excellence in pharmaceutical research and policy requires nurturing the next generation of leaders 
                  who can bridge scientific innovation with practical healthcare solutions."
                </p>
                <p className="text-muted-foreground">
                  Dr. Adigwe's mentorship approach emphasizes evidence-based practice, ethical leadership, 
                  and the development of critical thinking skills essential for addressing complex healthcare challenges.
                </p>
                <div className="flex items-center gap-2 pt-4">
                  <Heart className="text-primary" size={16} />
                  <span className="text-sm italic">Committed to developing future pharmaceutical leaders</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <GraduationCap className="text-primary mb-4" size={32} />
              <h2 className="mb-3">PhD Program Leadership</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Supervising doctoral research in pharmaceutical policy, focusing on evidence-based healthcare solutions for developing nations.
              </p>
              <Badge variant="outline" className="text-xs">Doctoral Supervision</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <Users className="text-primary mb-4" size={32} />
              <h2 className="mb-3">Young Pharmacist Development</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Mentoring early-career pharmacists in research methodology, policy analysis, and professional development.
              </p>
              <Badge variant="outline" className="text-xs">Professional Development</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <Globe className="text-primary mb-4" size={32} />
              <h2 className="mb-3">International Exchange Programs</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Facilitating research collaborations and exchange programs with international institutions for capacity building.
              </p>
              <Badge variant="outline" className="text-xs">Global Collaboration</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <BookOpen className="text-primary mb-4" size={32} />
              <h2 className="mb-3">Research Publication Mentorship</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Guiding mentees through the research publication process, from study design to peer review publication.
              </p>
              <Badge variant="outline" className="text-xs">Publication Support</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <Award className="text-primary mb-4" size={32} />
              <h2 className="mb-3">Leadership Development</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Training future leaders in pharmaceutical research institutions and policy organizations across Africa.
              </p>
              <Badge variant="outline" className="text-xs">Leadership Training</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h2 className="mb-3">Career Advancement Support</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Providing ongoing career guidance and networking opportunities for mentees in pharmaceutical research and policy.
              </p>
              <Badge variant="outline" className="text-xs">Career Support</Badge>
            </CardContent>
          </Card>
        </div>



        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-2xl mb-6 text-center">Mentorship Impact by Numbers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">of mentees advanced to leadership positions within 5 years</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-sm text-muted-foreground">peer-reviewed publications by mentees</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <p className="text-sm text-muted-foreground">countries where mentees now work</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">completion rate for doctoral programs under supervision</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl mb-6 text-center">Research Areas & Specializations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="mb-3">Pharmaceutical Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    Evidence-based policy development, regulatory frameworks, and healthcare legislation
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-3">Health Systems Research</h3>
                  <p className="text-sm text-muted-foreground">
                    Healthcare delivery systems, access to medicines, and health economics
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-3">Pharmaceutical Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">
                    Local production capabilities, technology transfer, and quality assurance
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-3">Traditional Medicine</h3>
                  <p className="text-sm text-muted-foreground">
                    Phytomedicine commercialization, integration with modern healthcare, and regulation
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-3">Global Health</h3>
                  <p className="text-sm text-muted-foreground">
                    International health policy, pandemic preparedness, and cross-border collaboration
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-3">Research Methodology</h3>
                  <p className="text-sm text-muted-foreground">
                    Mixed-methods research, data analysis, and research ethics in pharmaceutical studies
                  </p>
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