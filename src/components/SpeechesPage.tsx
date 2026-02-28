import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import PageHeader from './PageHeader';

export default function SpeechesPage() {
  const recentSpeeches = [
    {
      id: 1,
      title: "Harnessing the available gains and opportunities with raw data for researches; Community Pharmacists Perspective",
      event: "Association of Community Pharmacists (ACPN) FCT Branch Business Forum Summit 2.0",
      year: "2024",
      category: "PROFESSIONAL DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtpbmclMjBwaGFybWFjZXV0aWNhbHxlbnwxfHx8fDE3NTY0OTU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Delivered a position paper focusing on leveraging research data for community pharmacy advancement and evidence-based practice."
    },
    {
      id: 2,
      title: "Pharmacy, Building a Sustainable Future for Healthcare – Aligning Goals to 2023",
      event: "Pharmaceutical Society of Nigeria (PSN) Imo State Pharmacy Week/Conference",
      year: "2023", 
      category: "HEALTHCARE SUSTAINABILITY",
      image: "https://images.unsplash.com/photo-1576670160060-c4e874631c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTY0MzMwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Keynote address outlining strategic approaches to building sustainable healthcare systems through pharmaceutical innovation."
    },
    {
      id: 3,
      title: "Advancing Pharmaceutical Security in Africa through Translational Research & Development and Stringent Regulatory Processes",
      event: "17th Annual Scientific Conference & Exhibitions of NAPPSA",
      year: "2023",
      category: "CONTINENTAL DEVELOPMENT", 
      image: "https://images.unsplash.com/photo-1645753573116-0b515ae0b7ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwcG9kaXVtfGVufDF8fHx8MTc1NjQ3MDE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "High-level policy paper presented to Nigerian Association of Pharmacists & Pharmaceutical Scientists in the Americas."
    }
  ];

  return (
    <div>
      <PageHeader title="Speeches" />
      
      {/* White Content Section */}
      <section className="bg-white min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Recent Keynote Addresses */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-8">Recent Keynote Addresses</h1>
            
            <div className="space-y-8 bg-[rgba(255,255,255,0)]">
              {recentSpeeches.map((speech) => (
                <Card key={speech.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative">
                        <ImageWithFallback
                          src={speech.image}
                          alt={speech.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium px-3 py-1">
                            {speech.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 p-6 bg-white">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-500 font-medium">{speech.year}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-black mb-3">
                          {speech.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-4 font-medium">
                          {speech.event}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {speech.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conference Presentations Archive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8">Selected Conferences, Presentations & Lectures</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* 2023 Presentations */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2023</Badge>
                    <span className="text-xs text-gray-500">Innovations</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Nigerian Academy of Science (NAS) 4th Annual Scientific Conference
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Lead Presentation: "Innovations in Healthcare Delivery"
                  </p>
                  <p className="text-xs text-gray-500">Abuja (FCT)</p>
                </CardContent>
              </Card>

              {/* 2022 Presentations */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2022</Badge>
                    <span className="text-xs text-gray-500">Economic Strategy</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Pharmaceutical Society of Nigeria (PSN) 95th Annual Scientific Conference
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Keynote: "Medicines' Security in an Unstable Economy"
                  </p>
                  <p className="text-xs text-gray-500">Jos, Plateau State</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2022</Badge>
                    <span className="text-xs text-gray-500">Hospital Pharmacy</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Annual Scientific National Conference of AHAPN
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Keynote: "COVID-19 Experience: Expanding the Role of Health System Pharmacists"
                  </p>
                  <p className="text-xs text-gray-500">Association of Hospital and Administrative Pharmacists</p>
                </CardContent>
              </Card>

              {/* 2021 Presentations */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2021</Badge>
                    <span className="text-xs text-gray-500">Pandemic Response</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Nigerian Economic Summit Group
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Panelist: "Pandemic Response: Strategic Imperatives of COVID-19 Vaccine Access in Nigeria"
                  </p>
                  <p className="text-xs text-gray-500">Interactive Session</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2021</Badge>
                    <span className="text-xs text-gray-500">Drug Security</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Business Day Future of Pharma Conference 2021
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Speaker: "Achieving National Drug Security and Export through Local Contract Manufacturing"
                  </p>
                  <p className="text-xs text-gray-500">Industry Strategy</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2021</Badge>
                    <span className="text-xs text-gray-500">WHO Initiative</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    World Health Organization Information Session on WHO Biohub
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Speaker: "A voluntary system for Member States to share Biological Materials from emerging pathogens"
                  </p>
                  <p className="text-xs text-gray-500">Global Health Security</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2021</Badge>
                    <span className="text-xs text-gray-500">Professional Development</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    PSN-Young 2nd Annual National Conference
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Keynote: "The Future of Pharmacy Practice: The Place of Policy, Regulations and Effective Leadership"
                  </p>
                  <p className="text-xs text-gray-500">Young Pharmacists</p>
                </CardContent>
              </Card>

              {/* 2020 Presentations */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2020</Badge>
                    <span className="text-xs text-gray-500">Policy Options</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Pharmaceutical Society of Nigeria 93rd Annual National Conference
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Lead Speaker: "Policy options for driving national self-sufficiency and global competitiveness"
                  </p>
                  <p className="text-xs text-gray-500">Industry Competitiveness</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2020</Badge>
                    <span className="text-xs text-gray-500">Research & Development</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Africa Resource Centre Supply Chain for Development Event Series
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Keynote Speaker: "Healthcare Supply Chain Research for Development"
                  </p>
                  <p className="text-xs text-gray-500">Continental Development</p>
                </CardContent>
              </Card>

              {/* 2019 Presentations */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2019</Badge>
                    <span className="text-xs text-gray-500">Quality Healthcare</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Future of Health Conference by Nigeria Healthwatch
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Speaker: "Quality in Healthcare: Patient Centered Outcomes"
                  </p>
                  <p className="text-xs text-gray-500">Healthcare Quality</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2019</Badge>
                    <span className="text-xs text-gray-500">NCDs</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Nigeria Association of Foreign Trained Pharmacists' 2nd International Conference
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Speaker: "Non-Communicable Diseases in Nigeria: The Need for Timely Healthcare"
                  </p>
                  <p className="text-xs text-gray-500">Public Health Interventions</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2019</Badge>
                    <span className="text-xs text-gray-500">UHC</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    National Health Dialogue 2019
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Theme: "Universal Health Coverage - The role of State and Non-State Actors"
                  </p>
                  <p className="text-xs text-gray-500">Abuja</p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* International and Historical Presentations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8">International & Historical Presentations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2017</Badge>
                    <span className="text-xs text-gray-500">Continental Policy</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Assembly of ECOWAS Health Ministers
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Regional pharmaceutical policy development
                  </p>
                  <p className="text-xs text-gray-500">West African Region (Abuja)</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2014</Badge>
                    <span className="text-xs text-gray-500">Research</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Health Services Research & Pharmacy Practice Conference
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Pharmaceutical research methodologies
                  </p>
                  <p className="text-xs text-gray-500">Aberdeen, UK</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2011</Badge>
                    <span className="text-xs text-gray-500">Pain Management</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Joint British and Canadian Pain Societies Annual Scientific Meeting
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    International conference with 874 participants
                  </p>
                  <p className="text-xs text-gray-500">Edinburgh, UK</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">2008</Badge>
                    <span className="text-xs text-gray-500">International</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    League of European Research Universities - BRIGHT International Conference
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Selected and funded to represent University of Edinburgh
                  </p>
                  <p className="text-xs text-gray-500">Helsinki, Finland</p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Speaking Impact Statement */}
          <div className="mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Speaking Engagements Impact</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
                    <p className="text-black">International & National Conferences</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-primary mb-2">15+</h4>
                    <p className="text-black">Countries Represented</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-primary mb-2">10K+</h4>
                    <p className="text-black">Healthcare Professionals Reached</p>
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