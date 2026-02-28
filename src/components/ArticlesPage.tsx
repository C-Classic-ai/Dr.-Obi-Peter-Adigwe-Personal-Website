import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import PageHeader from './PageHeader';

export default function ArticlesPage() {
  return (
    <div>
      <PageHeader title="Articles" />
      
      {/* White Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-black">Peer-reviewed publications and research contributions to pharmaceutical science and policy</p>
          </div>

          {/* Recent Publications (2024-2025) */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8">Recent Publications (2024-2025)</h3>
            <div className="space-y-6">
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Knowledge and usage patterns of clotrimazole vaginal cream and tablet amongst females: A cross-sectional study
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Adigwe OP, Onavbavba G, Okeke CF.</strong> (2025)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Frontiers in Pharmacology</em>. 16:1484238
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Clinical Research</Badge>
                        <a href="https://doi.org/10.3389/fphar.2025.1484238" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Awareness, knowledge and belief regarding bitter leaf use: A cross-sectional study in Nigeria
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Adigwe OP, Onavbavba G, Omoarelojie O.</strong> (2025)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>PLOS One</em>. 20(6):e0322364
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Traditional Medicine</Badge>
                        <a href="https://doi.org/10.1371/journal.pone.0322364" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Knowledge, attitudes, and practices towards contraception amongst community pharmacy staff: a cross-sectional study in Nigeria
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Adigwe OP, Onavbavba G.</strong> (2025)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Frontiers in Reproductive Health</em>. 7:1488707
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Public Health</Badge>
                        <a href="https://doi.org/10.3389/frph.2025.1488707" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Acceptance and affordability of malaria vaccines: issues relating to hesitancy and willingness to pay amongst Nigerian parents of under-five children
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Adigwe OP, Onavbavba, G.</strong> (2025)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Malaria Journal</em>. 24, 36
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Vaccine Research</Badge>
                        <a href="https://doi.org/10.1186/s12936-025-05268-y" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Complementary and Alternative Medicine: A cross-sectional study on attitudes of prospective healthcare professionals towards herbal medicines
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Aboh MI, Uzuh RN, Adikwu V, Oparaugo P, Adigwe OP.</strong> (2025)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Asian Journal of Advanced Research and Reports</em>. 19 (7): 14-31
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Alternative Medicine</Badge>
                        <a href="https://doi.org/10.9734/ajarr/2025/v19i71078" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* 2024 Publications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8">2024 Publications</h3>
            <div className="space-y-6">
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Antidiabetic phytodrug from Maerua angolensis DC: Formulation, standardization, in vitro and in vivo evaluations
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Adigwe OP, Adzu B, Tarfa FD, Egharevba HO.</strong> (2024)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Scientific African</em>. 23:e02026
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Phytomedicine</Badge>
                        <a href="https://doi.org/10.1016/j.sciaf.2023.e02026" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Current state and challenges of local production of vaccines in Nigeria
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Adigwe OP, Onavbavba G, Adebola OJ, Ayeke A, Sanyaolu SE, Agu KA.</strong> (2024)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Public Health Challenges</em>. 3(4):e70006
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Vaccine Manufacturing</Badge>
                        <a href="https://doi.org/10.1002/puh2.70006" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        Factors influencing health workers' adherence to malaria treatment guidelines in under-five children in Nigeria: A scoping review
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Ezenyi IC, Picozzi K, Amaka JI, Adigwe OP.</strong> (2024)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Malaria World Journal</em>. 15:11
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Malaria Research</Badge>
                        <a href="https://doi.org/10.5281/zenodo.13934642" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        The pH of commercially available non-alcoholic beverages in Nigeria and the dental health implications
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Ibekwe NN, Abdulkarim M, Bello JA, Adigwe OP.</strong> (2025)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <em>Tropical Journal of Phytochemistry and Pharmaceutical Sciences</em>. 4(1):1-8
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Public Health</Badge>
                        <a href="https://doi.org/10.26538/tjpps/v4i1.1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1">
                          View Article <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Research Impact Statement */}
          <div className="mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Research Impact & Key Contributions</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-black mb-4">Notable Research Achievements</h4>
                    <ul className="space-y-3 text-black">
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>First Knowledge Attitudes and Perceptions study on Ebola in Nigeria</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Seminal paper on Rational Use of Medicines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Lead author of "Rewrite the script for Non-medical Prescribing" which contributed to UK Parliament prescribing policy reforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Extensive research on vaccine production and pharmaceutical manufacturing in Nigeria</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-4">Research Focus Areas</h4>
                    <ul className="space-y-3 text-black">
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Pharmaceutical Policy and Regulation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Vaccine Development and Manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Traditional Medicine and Phytomedicine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Public Health and Healthcare Access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Health System Strengthening</span>
                      </li>
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