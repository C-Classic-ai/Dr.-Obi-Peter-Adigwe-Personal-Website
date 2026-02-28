import { Award, Trophy, Medal, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import PageHeader from './PageHeader';

export default function AwardsPage() {
  return (
    <div>
      <PageHeader title="Awards" />
      
      {/* White Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-black">Fellowships, awards, grants and commendations for excellence in pharmaceutical research and leadership</p>
          </div>

          {/* Selected Fellowships, Awards and Grants */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Fellowships, Awards and Grants</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Trophy className="text-yellow-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">National Productivity Order of Merit (NPOM) Award</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    Awarded by the President of the Federal Republic of Nigeria (2022)
                  </p>
                  <p className="text-xs text-gray-500">
                    Following National recognition of productivity and excellence in high-level thematic contributions to National Development
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Medal className="text-blue-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">Fellow of the West African Postgraduate College of Pharmacists</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    FPCPharm (2024)
                  </p>
                  <p className="text-xs text-gray-500">
                    Recognition for contributions to pharmacy practice and education across West Africa
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Medal className="text-green-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">Fellow of Nigeria Academy of Pharmacy</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    FNAPharm (2023)
                  </p>
                  <p className="text-xs text-gray-500">
                    For contributions to the field of pharmacy in Nigeria and the continent
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Star className="text-purple-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">Fellow of the Academy of Public Health</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    FAPH (2023)
                  </p>
                  <p className="text-xs text-gray-500">
                    Recognition for excellence in public health research and policy development
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Award className="text-orange-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">EU & Bulgarian Government Grant</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    Team Europe Initiative (TEI MAV+) (2022)
                  </p>
                  <p className="text-xs text-gray-500">
                    Grant to Support Local Production of Vaccines in Nigeria - joint European Union and Bulgarian Government funding
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Award className="text-red-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">Bulgarian Government Grant</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    Evidence-based Vaccine Production Strategies (2024)
                  </p>
                  <p className="text-xs text-gray-500">
                    Identifying evidence-based strategies to improve interventions targeted at local production of vaccines in Nigeria
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Award className="text-teal-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">SIFCoVAN Grant</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    COVID-19 Vaccine Safety Study (2022)
                  </p>
                  <p className="text-xs text-gray-500">
                    To undertake safety & immunogenicity of fractional doses of Moderna mRNA-1273 vaccine among Nigerian adults
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Award className="text-indigo-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">TETFund Mega Research Grant</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    National Development R&D (2021)
                  </p>
                  <p className="text-xs text-gray-500">
                    To contribute meaningfully to Government's desire to revive and make Research and Development the launch pad for National Development
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Award className="text-pink-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">African Export-Import (AFREXIM) Bank Grant</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    API Training and Production Plant (2021)
                  </p>
                  <p className="text-xs text-gray-500">
                    To equip and support Active Pharmaceutical Ingredient (API) Training and Production Plant for NIPRD
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Award className="text-cyan-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">West African Health Organization Grant</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    Niprimune Clinical Trial (2020)
                  </p>
                  <p className="text-xs text-gray-500">
                    To undertake clinical trial on Niprimune
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Medal className="text-amber-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">University of Leeds GRASS Post-Doctorate Award</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    Prestigious Post-Doctorate Fellowship (2013)
                  </p>
                  <p className="text-xs text-gray-500">
                    Granted following a competitive interview process
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Star className="text-emerald-600 mb-4" size={32} />
                  <h2 className="text-lg mb-3">University of Leeds Underwritten Scholarship</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    School of Healthcare (2008)
                  </p>
                  <p className="text-xs text-gray-500">
                    Highly competitive scholarship award
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Selected Commendations */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Selected Commendations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-black mb-3">NIPRD Governing Board</h4>
                  <p className="text-sm text-muted-foreground">
                    Commendation for outstanding performance in promoting the ideals of NIPRD.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-black mb-3">Joint Action Committee of all NIPRD Staff Unions</h4>
                  <p className="text-sm text-muted-foreground">
                    Commendation for the hard work and diligent efforts into re-positioning NIPRD to realize its mandate (2021).
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-black mb-3">National Security Adviser</h4>
                  <p className="text-sm text-muted-foreground">
                    Commendation for tremendous successes recorded regarding Joint Operations Room that was activated to mitigate impact of COVID-19 (2020).
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-black mb-3">Aisha Buhari Foundation</h4>
                  <p className="text-sm text-muted-foreground">
                    Commendation for invaluable contributions made towards exploring ways to increase local production of Ready to Use Therapeutic Food (2020).
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-black mb-3">African Resource Centre</h4>
                  <p className="text-sm text-muted-foreground">
                    Commendation for organizing international conference aimed at improving access to medicines (2018).
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-black mb-3">West African Pharmaceutical Manufacturers Association</h4>
                  <p className="text-sm text-muted-foreground">
                    Commendation for sterling performance as head and coordinator of the organizing committee during the WAPMA's First International Forum in Abidjan (2018).
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Academic & Early Achievements</h3>
            <div className="space-y-6">
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-lg font-bold text-black mb-2">University of Edinburgh Essay Competition Winner (2008)</h4>
                    <p className="text-sm text-muted-foreground">
                      Won a University-wide essay competition and was subsequently funded to represent the University of Edinburgh at an international conference.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-bold text-black mb-2">Magna Cum Laude Graduate (2000)</h4>
                    <p className="text-sm text-muted-foreground">
                      Graduated magna cum laude in Bachelor of Pharmacy Degree at the University of Jos.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}