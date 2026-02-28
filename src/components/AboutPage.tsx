import image_8bb762d8c6f92920e2791ab71b68c0b3aa042bf6 from 'figma:asset/8bb762d8c6f92920e2791ab71b68c0b3aa042bf6.png';

export default function AboutPage() {
  return (
    <div>
      {/* Dark Hero Section */}
      <section className="min-h-[40vh] bg-black flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            {/* About Title */}
            <div>
              <h1 className="text-[64px] font-bold text-white">
                About
              </h1>
            </div>
            
            {/* Profile Image */}
            <div className="hidden md:block">
              <div 
                className="w-72 h-72 lg:w-96 lg:h-96 bg-cover bg-center bg-no-repeat rounded-full"
                style={{ backgroundImage: `url(${image_8bb762d8c6f92920e2791ab71b68c0b3aa042bf6})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* White Content Section */}
      <section className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column - Name Display */}
            <div className="flex flex-col justify-start">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Dr. Obi Peter
                <br />
                <span className="text-black font-normal">
                  ADIGWE
                </span>
              </h2>
            </div>

            {/* Right Column - Core Biographical Information */}
            <div className="space-y-12">
              
              {/* Educational Qualifications Section */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Educational Qualifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-black">
                    <span className="mr-3">•</span>
                    <span>Doctorate in Pharmaceutical Policy (Ph.D.), University of Leeds (2012)</span>
                  </li>
                  <li className="flex items-start text-black">
                    <span className="mr-3">•</span>
                    <span>Masters in Global Health and Public Policy, University of Edinburgh (2008)</span>
                  </li>
                  <li className="flex items-start text-black">
                    <span className="mr-3">•</span>
                    <span>Bachelor of Pharmacy, University of Jos (2000)</span>
                  </li>
                </ul>
              </div>

              {/* Current Role Section */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Current Position</h3>
                <div className="space-y-3">
                  <p className="text-black">
                    <strong>Director General & Chief Executive Officer</strong><br />
                    National Institute for Pharmaceutical Research and Development (NIPRD)<br />
                    <span className="text-gray-600">2018 - Present (Reappointed 2022)</span>
                  </p>
                  <p className="text-black">
                    Dr. Adigwe was first appointed as Director General of NIPRD on August 10, 2018, by former President Muhammadu Buhari, and was reappointed on June 14, 2022, in recognition of his outstanding performance and strategic vision.
                  </p>
                </div>
              </div>

              {/* Career Progression */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Career Progression</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4">
                    <h4 className="font-bold text-black">2018 - Present: NIPRD Director General</h4>
                    <p className="text-gray-600 text-sm">Leading Nigeria's premier pharmaceutical research institute with close to 300 staff, including about 80 PhD and MSc holders</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-bold text-black">2015 - 2018: Executive Secretary, Pharmaceutical Manufacturers Group (MAN)</h4>
                    <p className="text-gray-600 text-sm">Led strategic initiatives including prioritisation of Pharma Industry in 2016 Fiscal Policy and organization of the Landmark 2017 Pharma Expo</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-bold text-black">2012 - 2015: Head, Health Policy Research and Development Unit, National Assembly</h4>
                    <p className="text-gray-600 text-sm">Pioneer Head developing evidence-based approaches to healthcare legislation and policy formulation</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-bold text-black">2010 - 2012: Senior Project Officer, Pharmacy Development Unit, Leeds UK</h4>
                    <p className="text-gray-600 text-sm">Developed resources for healthcare training and coordinated finances for over 60 apprentices</p>
                  </div>
                </div>
              </div>

              {/* Management Skills & Expertise */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Management & Organisational Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-black">Technical Skills</h4>
                    <ul className="space-y-1 text-sm text-black">
                      <li>• Data management (SPSS, Nvivo)</li>
                      <li>• Web design & e-learning</li>
                      <li>• Microsoft Office & Adobe suites</li>
                      <li>• Grant application & report writing</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-black">Leadership Skills</h4>
                    <ul className="space-y-1 text-sm text-black">
                      <li>• Strategic planning & organizational development</li>
                      <li>• Project management & evaluation</li>
                      <li>• Stakeholder engagement & media relations</li>
                      <li>• Languages: English, French, Hausa, Igbo</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Personal Statement Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Personal Statement</h3>
            <div className="space-y-6 text-black text-lg leading-relaxed">
              <p>
                I bring to my role as Director General of The National Institute for Pharmaceutical Research and Development (NIPRD), over two decades' knowledge and experience in relevant research, policymaking and management, both in Nigeria and internationally. Prior to my appointment as Director General of NIPRD, I was the Executive Secretary of the Pharmaceutical Manufacturers Group (PMGMAN), where I played a key role in the development and implementation of policy initiatives which made considerable impact on West Africa's Pharmaceutical Sector.
              </p>
              <p>
                Some of my achievements in PMGMAN include the prioritisation of the Pharma Industry in the 2016 Fiscal Policy, and the organization of the Landmark 2017 Pharma Expo. I was also the lead contributor to the Medicines' Security Concept that aimed at improving sustainable access to safe, high quality and affordable healthcare, through local production of medicines and other health commodities.
              </p>
              <p>
                I established and was the pioneer Head of the Health Policy Research and Development (HPRD) Unit at the Nigerian Parliament, where we formulated research and development strategies in health policy with a view to developing an evidence-based approach to Legislation and Policymaking in Nigeria. We also developed innovative and contextual capacity building modules for Healthcare Professionals, as well as coordinated research that contributed to Health System strengthening.
              </p>
              <p>
                I have a significant number of peer reviewed publications including the first Knowledge Attitudes and Perceptions study on Ebola in Nigeria, as well as a seminal paper on Rational Use of Medicines. While in the United Kingdom, I was the lead author of the article "Rewrite the script for Non-medical Prescribing" which contributed to prescribing policy reforms in the British Parliament.
              </p>
              <p>
                I have pioneered a significant number of innovative research activities and developmental projects as well as secured various high-profile grants targeted at improving access to healthcare; achieving Medicines Security; and catalysing Socio-economic advancements in Nigeria and in other African countries. I have headed and served on numerous Committees and Expert Working Groups at both national and international levels, including the D8, United Nations, World Health Organisation, The African Union and ECOWAS.
              </p>
              <p>
                I was conferred with the National Productivity Order of Merit (NPOM) award by the President of the Federal Republic of Nigeria, following National recognition of our productivity and excellence in a number of high-level thematic contributions to National Development. I have been conferred with Fellowships of the Nigeria Academy of Pharmacy, and the West African Postgraduate College of Pharmacists for contributions to the field of pharmacy, Nationally and on the Continent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}