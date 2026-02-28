import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import PageHeader from './PageHeader';
import OrganizationCard from './OrganizationCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import napLogo from 'figma:asset/e712d4057fae650ce849ca7fa7f6537d09c5b323.png';
import waiphLogo from 'figma:asset/5cc944e95f7f516b82acc664c5cffc91ac12ed23.png';
import psnLogo from 'figma:asset/9f3f80b6b80251b476d54c0c27157cf8c19027ba.png';
import cpaLogo from 'figma:asset/046a9f1fd89bfdcf479a9db1bffa3ae5c5e62ef2.png';
import drAdigweImage from 'figma:asset/ede7cdc6db9b0caea75478d6dfa397ad8bfc5ac7.png';
import drAdigweSpeaking from 'figma:asset/cc31bce5b1b1aaee299ef3250e916c4f3c774748.png';
import drAdigweMeeting from 'figma:asset/07897d220d37fb26859f957d7a1049848f9d2626.png';

export default function ProfessionalBodiesPage() {
  return (
    <div>
      <PageHeader title="Professional Organization" />
      
      {/* White Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Professional Fellowships */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Professional Fellowships</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              
              <OrganizationCard
                image={napLogo}
                title="Nigerian Academy of Pharmacy"
                role="Fellow (FNAPharm) - 2023"
                description="As a Fellow of the Nigerian Academy of Pharmacy, Dr. Adigwe contributes to advancing pharmaceutical education, research, and practice standards across Nigeria while promoting professional excellence in the field."
                imageAlt="Nigerian Academy of Pharmacy Logo"
              />

              <OrganizationCard
                image={psnLogo}
                title="Pharmaceutical Society of Nigeria"
                role="Fellow"
                description="A longstanding Fellow of the Pharmaceutical Society of Nigeria, Dr. Adigwe has played a pivotal role in shaping pharmaceutical policy and advancing the professional development of pharmacists nationwide."
                imageAlt="Pharmaceutical Society of Nigeria Logo"
              />

              <OrganizationCard
                image={waiphLogo}
                title="West African Postgraduate College of Pharmacists"
                role="Fellow (FPCPharm) - 2024"
                description="As a Fellow of the West African Postgraduate College of Pharmacists, Dr. Adigwe brings expertise in pharmaceutical sciences and professional development across the West African region."
                imageAlt="West African Postgraduate College of Pharmacists Logo"
              />

              <OrganizationCard
                image={cpaLogo}
                title="Academy of Public Health"
                role="Fellow (FAPH) - 2023"
                description="As a Fellow of the Academy of Public Health, Dr. Adigwe promotes public health excellence and evidence-based policy development across healthcare systems."
                imageAlt="Academy of Public Health Logo"
              />

            </div>
          </div>

          {/* Current National and International Assignments */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Current Leadership Roles & Assignments (2022-2025)</h2>
            
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-red-100 text-red-800">2025 - Chair</Badge>
                    <span className="text-sm text-gray-500">Ministerial Committee</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Chair – Ministerial Committee on Commercialization of Phytomedicines Value Chain
                  </h3>
                  <p className="text-sm text-gray-600">
                    Leading Nigeria's strategic initiative to commercialize traditional medicine and phytomedicines, developing frameworks for sustainable value chain development.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-800">2025 - Member</Badge>
                    <span className="text-sm text-gray-500">Nigerian Academy of Science</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Member – Nigerian Academy of Science's Consensus Study Committee: The Cannabis Oil Debate
                  </h3>
                  <p className="text-sm text-gray-600">
                    Contributing scientific expertise to national policy discussions on cannabis oil for medical applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-green-100 text-green-800">2024 - Member</Badge>
                    <span className="text-sm text-gray-500">Presidential Initiative</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Member – Presidential Initiative for Unlocking the Healthcare Value Chain Committee (PVAC)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Strategic advisor on unlocking Nigeria's healthcare value chain potential and pharmaceutical sector development.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-100 text-purple-800">2023 - Project Lead</Badge>
                    <span className="text-sm text-gray-500">Vaccine Technology</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Project Lead – Ministerial Committee on mRNA Vaccine Technology
                  </h3>
                  <p className="text-sm text-gray-600">
                    Leading Nigeria's strategic initiative to develop local mRNA vaccine manufacturing capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-orange-100 text-orange-800">2023 - Member</Badge>
                    <span className="text-sm text-gray-500">Lassa Fever Initiative</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Member – Ministerial Task Team on Effective Vaccine for Lassa Fever in Nigeria
                  </h3>
                  <p className="text-sm text-gray-600">
                    Contributing to the development of effective vaccines against Lassa fever, addressing a critical public health challenge.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-teal-100 text-teal-800">2022 - Co-Chair</Badge>
                    <span className="text-sm text-gray-500">United Nations</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Co-Chair - Technical Sub-committee on Investment in Health Research and Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    High-Level Segment of the United Nations General Assembly at the International Economic Partnership Forum.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Pharmacy Council of Nigeria Roles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Pharmacy Council of Nigeria Governing Council Roles</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Education Committee Member (2020-2022)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Contributing to pharmaceutical education standards and curriculum development across Nigeria's pharmacy schools.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Finance & General-Purpose Committee Member (2020-2021)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Overseeing financial management and strategic planning for Nigeria's pharmaceutical regulatory body.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Appointment, Promotion and Discipline Committee Member (2020-2021)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsible for personnel decisions and maintaining professional standards within the pharmacy profession.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Chairman - Pre-registration Examination for Pharmacists (PEP) Ad-hoc Committee (2020)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Led the committee overseeing the standardization of pre-registration examinations for pharmacy graduates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* International and Regional Organizations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">International & Regional Organization Roles</h2>
            
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-indigo-100 text-indigo-800">UNIDO</Badge>
                    <span className="text-sm text-gray-500">2021</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    United Nations Industrial Development Organization (UNIDO) Project Steering Committee Member
                  </h3>
                  <p className="text-sm text-gray-600">
                    Federal Ministry of Industry, Trade & Investment Project Steering and Consultative Committee member.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-yellow-100 text-yellow-800">WAHO</Badge>
                    <span className="text-sm text-gray-500">2020-2021</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    West African Health Organization Task Force on COVID-19 Vaccines
                  </h3>
                  <p className="text-sm text-gray-600">
                    Member of regional task force developing COVID-19 vaccine strategies for West Africa and conducting feasibility studies for ECOWAS vaccine development.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-pink-100 text-pink-800">D-8</Badge>
                    <span className="text-sm text-gray-500">2017</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Country Lead - Developing 8 Organization for Economic Cooperation (D-8) Ministerial Task Force
                  </h3>
                  <p className="text-sm text-gray-600">
                    Led Nigeria's participation in D-8 Ministerial Task Force on Pharma & Medical Equipment development initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-red-100 text-red-800">African Union</Badge>
                    <span className="text-sm text-gray-500">2017</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Country Representative and Panel Chair – African Union Continental Forum on Access to Medicines
                  </h3>
                  <p className="text-sm text-gray-600">
                    Represented Nigeria and chaired panels at the AU Continental Forum on Access to Medicines and Health Commodities in Ethiopia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* COVID-19 Response Committees */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">COVID-19 Response Leadership (2020-2021)</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Presidential Steering Committee on COVID-19 Technical Working Group Member
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Key member of Nigeria's national COVID-19 response strategy team, contributing to policy development and implementation.
                  </p>
                  <Badge className="bg-red-100 text-red-800 text-xs">2021</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Federal Ministry of Health National COVID-19 Vaccine Coordinating Committee Member
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Coordinated Nigeria's national vaccine distribution and administration strategies during the pandemic.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">2021</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Federal Ministry of Science and Technology Ministerial Committee on COVID-19 Herbal Remedies
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Evaluated traditional and herbal remedies for COVID-19 treatment and prevention protocols.
                  </p>
                  <Badge className="bg-green-100 text-green-800 text-xs">2020</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Federal Ministry of Health World Bank Impact Project Steering Committee Member
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Steering committee member for World Bank-funded health system strengthening initiatives.
                  </p>
                  <Badge className="bg-purple-100 text-purple-800 text-xs">2020</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Professional Engagements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[5/4] group">
                <img
                  src={drAdigweImage}
                  alt="Dr. Obi Peter Adigwe in Professional Setting"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[5/4] group">
                <img
                  src={drAdigweSpeaking}
                  alt="Dr. Obi Peter Adigwe Speaking at Professional Event"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[5/4] group">
                <img
                  src={drAdigweMeeting}
                  alt="Dr. Obi Peter Adigwe Speaking at Professional Meeting"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}