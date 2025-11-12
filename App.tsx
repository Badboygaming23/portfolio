
import React, { useState, useEffect } from 'react';
import { Project, PersonalInfo, Skill, EducationItem, Quote, DonationInfo } from './types'; // Added DonationInfo
import { PERSONAL_INFO, SKILLS_DATA, EDUCATION_DATA, PROJECTS_DATA, NAV_LINKS, MOTIVATIONAL_QUOTES, DONATION_DATA, PROJECTS_PER_PAGE } from './constants'; // Added DONATION_DATA, PROJECTS_PER_PAGE
import AnimatedBackground from './components/AnimatedBackground';
import ProjectCard from './components/ProjectCard';
import ProjectPreview from './components/ProjectPreview';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import QuoteOfTheDay from './components/QuoteOfTheDay';
import ContactModal from './components/ContactModal';
import Preloader from './components/Preloader';
import DonationCard from './components/DonationCard'; 
import ImagePopup from './components/ImagePopup'; // Import ImagePopup
import PaginationControls from './components/PaginationControls'; // Import PaginationControls
import { MailIcon } from './components/icons/MailIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { GitHubIcon } from './components/icons/GitHubIcon';
// import { CoffeeIcon } from './components/icons/CoffeeIcon'; // CoffeeIcon not directly used in title here

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string | null>(null);
  const [personalInfo] = useState<PersonalInfo>(PERSONAL_INFO);
  const [skills] = useState<Skill[]>(SKILLS_DATA);
  const [education] = useState<EducationItem[]>(EDUCATION_DATA);
  // const [projects] = useState<Project[]>(PROJECTS_DATA); // Managed by pagination
  const [donations] = useState<DonationInfo[]>(DONATION_DATA); 
  const [dailyQuote, setDailyQuote] = useState<Quote | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // State for Image Popup
  const [imagePopupUrl, setImagePopupUrl] = useState<string | null>(null);
  const [imagePopupAlt, setImagePopupAlt] = useState<string | null>(null);

  // State for Project Pagination
  const [currentProjectsPage, setCurrentProjectsPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (MOTIVATIONAL_QUOTES.length > 0) {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; 
      const day = now.getDate(); 
      const dailySeed = year * 372 + month * 31 + day; 
      const quoteIndex = dailySeed % MOTIVATIONAL_QUOTES.length;
      setDailyQuote(MOTIVATIONAL_QUOTES[quoteIndex]);
    }
  }, []);

  const handlePreviewProject = (url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
  };

  const handlePreviewResume = (url: string) => {
    setPreviewUrl(url);
    setPreviewTitle(`${personalInfo.name}'s Resume`);
  };

  const handleClosePreview = () => {
    setPreviewUrl(null);
    setPreviewTitle(null);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Functions for Image Popup
  const openImagePopup = (url: string, alt: string) => {
    setImagePopupUrl(url);
    setImagePopupAlt(alt);
  };

  const closeImagePopup = () => {
    setImagePopupUrl(null);
    setImagePopupAlt(null);
  };

  // Project Pagination Logic
  const totalPagesForProjects = Math.ceil(PROJECTS_DATA.length / PROJECTS_PER_PAGE);
  const displayedProjects = PROJECTS_DATA.slice(
    (currentProjectsPage - 1) * PROJECTS_PER_PAGE,
    currentProjectsPage * PROJECTS_PER_PAGE
  );

  const handleProjectsPageChange = (page: number) => {
    setCurrentProjectsPage(page);
     // Scroll to the top of the projects section smoothly when page changes
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      // Add a small delay for content to potentially re-render before scrolling
      setTimeout(() => {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (previewUrl) {
          handleClosePreview();
        }
        if (isContactModalOpen) {
          closeContactModal();
        }
        if (imagePopupUrl) { // Close image popup on Escape
          closeImagePopup();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewUrl, isContactModalOpen, imagePopupUrl]); // Add imagePopupUrl to dependencies

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      console.log("Context menu disabled.");
    };

    const handleDevToolsKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F12') {
        event.preventDefault();
        console.log("F12 key disabled.");
      }
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        console.log("Ctrl+Shift+I / Cmd+Option+I disabled.");
      }
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        console.log("Ctrl+Shift+J / Cmd+Option+J disabled.");
      }
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
        console.log("Ctrl+Shift+C / Cmd+Option+C potentially for dev tools, logging action.");
      }
      if ((event.ctrlKey || event.metaKey) && event.key === 'U') {
        event.preventDefault();
        console.log("Ctrl+U / Cmd+U disabled.");
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleDevToolsKeyDown);

    console.log('%cHold Up!', 'color: #D946EF; font-size: 30px; font-weight: bold;');
    console.log('%cLooks like you\'re curious about the code! That\'s awesome. If you have any questions or want to collaborate, feel free to reach out.', 'color: #60A5FA; font-size: 16px;');

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleDevToolsKeyDown);
    };
  }, []);

  return (
    <>
      <Preloader isLoading={isAppLoading} />
      
      <div 
        className={`relative min-h-screen bg-slate-900 text-slate-100 antialiased transition-opacity duration-700 
                    ${isAppLoading ? 'opacity-0 invisible' : 'opacity-100 visible delay-200'}`}
      >
        <AnimatedBackground />
        <Navbar navLinks={NAV_LINKS} />
        
        <div className="relative z-10">
          <HeroSection 
            id="home" 
            personalInfo={personalInfo} 
            onContactMeClick={openContactModal}
            onPreviewResumeClick={handlePreviewResume}
          />

          <Section id="about" title="About Me">
            <p className="text-slate-300 leading-relaxed md:text-lg max-w-3xl mx-auto text-center">
              {personalInfo.longBio}
            </p>
          </Section>

          <Section id="skills" title="Skills">
            {(isVisibleArg) => (
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
                {skills.map((skill, index) => (
                  <span 
                    key={skill.id} 
                    className={`bg-slate-700 text-indigo-300 text-sm md:text-base font-medium px-4 py-2 rounded-full shadow-md hover:bg-slate-600 hover:shadow-lg hover:scale-110 transform transition-all duration-300 ease-out ${
                      isVisibleArg ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-90'
                    }`}
                    style={{ transitionDelay: isVisibleArg ? `${200 + index * 50}ms` : '0ms' }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </Section>

          <Section id="wisdom" title="Daily Dose of Wisdom">
            <QuoteOfTheDay quote={dailyQuote} />
          </Section>

          <Section id="education" title="Education">
            <div className="space-y-8 max-w-3xl mx-auto">
              {education.map(item => (
                <div key={item.id} className="bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl md:text-2xl font-semibold text-indigo-400">{item.degree}</h3>
                  <p className="text-slate-400 font-medium">{item.institution} | {item.period}</p>
                  {item.description && <p className="mt-2 text-slate-300">{item.description}</p>}
                </div>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects">
            {PROJECTS_DATA.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {displayedProjects.map(project => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onPreview={handlePreviewProject} 
                    />
                  ))}
                </div>
                {totalPagesForProjects > 1 && (
                  <PaginationControls 
                    currentPage={currentProjectsPage}
                    totalPages={totalPagesForProjects}
                    onPageChange={handleProjectsPageChange}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-slate-400">No projects to display yet.</p>
              </div>
            )}
          </Section>

          <Section id="donate" title="Donate for more Open Source Projects">
            {donations.length > 0 ? (
              <>
                <p className="text-slate-300 leading-relaxed md:text-lg max-w-2xl mx-auto text-center mb-10">
                  If you find this portfolio or any of my projects useful, please consider supporting my work. 
                  A small contribution helps me dedicate more time to creating and sharing open-source projects. Thank you!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {donations.map(donationItem => (
                    <DonationCard 
                      key={donationItem.id} 
                      donation={donationItem}
                      onImageClick={openImagePopup} // Pass openImagePopup here
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-slate-400">Donation information will be available soon.</p>
              </div>
            )}
          </Section>
          
          <Section id="contact" title="Get In Touch">
            <div className="text-center max-w-xl mx-auto">
              <p className="text-slate-300 md:text-lg mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={openContactModal}
                  className="inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-lg active:scale-95 active:brightness-90"
                >
                  <MailIcon className="w-6 h-6" />
                  <span>Contact Me</span>
                </button>
                <div className="flex space-x-4">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-slate-400 hover:text-indigo-400 transition-transform duration-200 ease-out transform hover:scale-110 hover:-rotate-[5deg] p-2">
                    <LinkedInIcon className="w-8 h-8" />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-slate-400 hover:text-indigo-400 transition-transform duration-200 ease-out transform hover:scale-110 hover:rotate-[5deg] p-2">
                    <GitHubIcon className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </Section>

          <footer className="text-center py-10 md:py-16 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">
                  &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                  Built with React, Tailwind CSS, and passion.
              </p>
          </footer>
        </div>

        {previewUrl && previewTitle && (
          <ProjectPreview 
            previewUrl={previewUrl} 
            previewTitle={previewTitle} 
            onClose={handleClosePreview} 
          />
        )}
        <ContactModal 
          personalInfo={personalInfo}
          isOpen={isContactModalOpen}
          onClose={closeContactModal}
        />
        {imagePopupUrl && imagePopupAlt && ( // Conditionally render ImagePopup
          <ImagePopup 
            imageUrl={imagePopupUrl}
            altText={imagePopupAlt}
            onClose={closeImagePopup}
          />
        )}
      </div>
    </>
  );
};

export default App;