import { Project, PersonalInfo, Skill, EducationItem, NavLinkItem, Quote, DonationInfo } from './types'; // Removed ExperienceItem, Added Quote, Added DonationInfo

export const PERSONAL_INFO: PersonalInfo = {
  name: "Dariel Ganzon",
  title: "", // Removed "Senior Frontend Engineer & UI/UX Designer"
  profileImageUrl: "https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-1/482247844_635870656047450_6239753767865363651_n.jpg?stp=cp6_dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGIIa4qp4flMbsjPdRLScLQa1xKeCn4KFZrXEp4KfgoVp7fmnWmlW8r_qZEjARQSKnrK7DRYnFDq7YY9qOQUj-K&_nc_ohc=jqL0an5Sw6wQ7kNvwHMLxQw&_nc_oc=AdloOo0ErsesXIYoydoidm7RJjcI3IhBkVdIjO6LjTyJg0MU0A7qSLQn8sQHrYhvYyw&_nc_zt=24&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=Mz_1YoH1MaAiyJsQ5hQgNg&oh=00_AfL4g9-JcNYy6jUlePdZzZab6eYs0e4AQ8Qe0gLK56_isA&oe=683C51AF",
  shortBio: "Crafting beautiful and intuitive digital experiences. Passionate about modern web technologies and user-centric design.",
  longBio: "Hello! I'm Dariel Ganzon. I am currently a 3rd-year student pursuing a degree in Information Technology at Misamis University, located in Ozamiz City, Philippines. I'm enthusiastic about web development and currently focusing on strengthening my foundational skills. While I'm gaining experience with frontend technologies like React and TypeScript, I'm also keen on learning more about backend development and aspire to contribute to full-stack projects in the future as I continue to grow my abilities as a student. I enjoy the process of learning, solving problems, and exploring new technologies in the web space.",
  email: "darielganzon2003@gmail.com",
  phoneNumber: "09816249065",
  linkedin: "https://www.linkedin.com/in/yourprofile", // Replace with actual LinkedIn
  github: "https://github.com/yourusername", // Replace with actual GitHub
  resumeUrl: "/resume.pdf" // Example: link to a resume in the public folder
};

export const SKILLS_DATA: Skill[] = [
  { id: 'skill-1', name: 'React' },
  { id: 'skill-2', name: 'TypeScript' },
  { id: 'skill-3', name: 'JavaScript (ES6+)' },
  { id: 'skill-4', name: 'HTML5' },
  { id: 'skill-5', name: 'CSS3 & Tailwind CSS' },
  { id: 'skill-6', name: 'Node.js (Learning)' },
  { id: 'skill-7', name: 'UI/UX Principles' },
  { id: 'skill-8', name: 'Figma (Basic)' },
  { id: 'skill-9', name: 'Git & GitHub' },
  { id: 'skill-10', name: 'Responsive Design' },
  { id: 'skill-11', name: 'Accessibility (Awareness)' },
  { id: 'skill-12', name: 'Gemini API (Exploring)' },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Misamis University',
    degree: 'B.S. in Information Technology (Ongoing)',
    period: '2022 - Present (Expected Graduation: 2026)',
    description: 'Currently in 3rd year, focusing on software development, web technologies, and database management.'
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'AI Weather Forecaster',
    description: 'An AI-powered weather forecasting application providing real-time weather updates and predictions. Uses Gemini for advanced forecasting.',
    url: 'https://global-weather-forecaster-ai-441214296240.us-west1.run.app/',
    imageUrl: 'https://media.delius-klasing.de/dk-wassersport/images/dpr_auto,fl_progressive,f_auto,c_fill,g_face:auto,h_600,w_1068/q_auto:eco/yacht/wettervorhersage-kunstliche-intelligenz-high-res-adobestock-707733573-1_273e0c9205c318beb9721a77b7389b9b/weather-forecast-can-ai-predict-the-weather-better-',
    tags: ['AI', 'Weather', 'React', 'Gemini API'],
  },
  {
    id: 'project-2',
    title: 'AI Chatbot Assistant',
    description: 'An intelligent chatbot built with Natural Language Processing to assist users with inquiries and tasks. Features contextual understanding and learning capabilities.',
    url: 'https://ai-chat-assistant-441214296240.us-west1.run.app/', 
    imageUrl: 'https://cdn.shulex-voc.com/shulex/upload/2024-07-03/9b8df9f1-a7f5-4f6c-a7c8-dd98cd0d414a.jpg',
    tags: ['AI', 'NLP', 'Python', 'React', 'Chatbot'],
  },
  {
    id: 'project-3',
    title: 'AI Job Interview Simulator',
    description: 'A platform that simulates job interviews using AI. Provides feedback on answers, body language (concept), and communication skills to help users prepare.',
    url: 'https://ai-job-interview-coach-441214296240.us-west1.run.app/',
    imageUrl: 'https://www.ttnews.com/sites/default/files/2023-09/iTECH-Dysart-1200.jpg',
    tags: ['AI', 'Machine Learning', 'Interview Prep', 'WebRTC', 'React'],
  },
  {
    id: 'project-4',
    title: 'Interactive Digital Business Card',
    description: 'A sleek, modern digital business card designed for seamless sharing of contact information, social profiles, and a personal QR code. Built with React and styled with Tailwind CSS for a responsive and engaging user experience.',
    url: 'https://leiradigitalcard.muccs.site/index.php', 
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQGiylbsT6QWew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1724334719073?e=2147483647&v=beta&t=nqNgBzaCWhPtwZEmfVm1hP0QCjSJ8TDCb7PjKm9Vju8',
    tags: ['React', 'Tailwind CSS', 'Digital Identity', 'QR Code', 'UX/UI'],
  },
  {
    id: 'project-5',
    title: "AI ER Diagram Generator",
    description: "A smart tool that leverages AI to automatically generate Entity-Relationship diagrams from textual descriptions or database schemas. Simplifies database design and visualization.",
    url: 'https://ai-er-diagram-generator-441214296240.us-west1.run.app/', 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIm3t09vN2OajLdNrZwDUqnilfO4uCWN_GYQ&s', 
    tags: ['AI', 'Database Design', 'ER Diagram', 'Automation', 'Developer Tool', 'Gemini API'],
  },
  {
    id: 'project-6',
    title: 'AI Resume Builder',
    description: 'A smart resume builder that uses AI to help craft compelling resumes. It suggests keywords, optimizes formatting, and provides content recommendations based on job descriptions.',
    url: 'https://ai-resume-builder-441214296240.us-west1.run.app/', // Assumed URL, can be updated
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2d/e1/13/2de1135c-9933-135f-704f-cba596416277/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/1200x630wa.png',
    tags: ['AI', 'Resume', 'React', 'NLP', 'Gemini API'],
  },
  {
    id: 'project-7',
    title: "Interactive Anxiety Check",
    description: "An engaging gamified experience designed to help users reflect on potential anxiety indicators through interactive scenarios and self-assessment. Not a diagnostic tool.",
    url: 'https://anxiety-insights-game-441214296240.us-west1.run.app/', 
    imageUrl: 'https://images.pexels.com/photos/7176316/pexels-photo-7176316.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 
    tags: ['Gamification', 'Mental Wellness', 'Self-Assessment', 'React', 'Interactive', 'UI/UX'],
  },
];

export const PROJECTS_PER_PAGE = 6; // Number of projects to show per page

export const MOTIVATIONAL_QUOTES: Quote[] = [
  { id: 'quote-1', text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 'quote-2', text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { id: 'quote-3', text: "The mind is everything. What you think you become.", author: "Buddha" },
  { id: 'quote-4', text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { id: 'quote-5', text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { id: 'quote-6', text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { id: 'quote-7', text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { id: 'quote-8', text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { id: 'quote-9', text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { id: 'quote-10', text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { id: 'quote-11', text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { id: 'quote-12', text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { id: 'quote-13', text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { id: 'quote-14', text: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman" },
  { id: 'quote-15', text: "The harder I work, the luckier I get.", author: "Samuel Goldwyn" }
];

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'nav-home', label: 'Home', href: '#home' },
  { id: 'nav-about', label: 'About', href: '#about' },
  { id: 'nav-skills', label: 'Skills', href: '#skills' },
  { id: 'nav-wisdom', label: 'Wisdom', href: '#wisdom' },
  { id: 'nav-education', label: 'Education', href: '#education' },
  { id: 'nav-projects', label: 'Projects', href: '#projects' },
  { id: 'nav-donate', label: 'Donate', href: '#donate' }, // Added Donate link
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

export const DONATION_DATA: DonationInfo[] = [
  {
    id: 'donate-1',
    methodName: 'GCash',
    qrCodeImageUrl: 'https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/502727802_698103859824129_6145334884724983041_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG8QCOt_9KAvsgkKXJbnm6wvk7XqrjQbl--TtequNBuX3X_LCCgKlYePlCUPe8Z8n9BOoiUptJtMEPXtlyaeBPM&_nc_ohc=N71ZNhM4K0EQ7kNvwH-51uT&_nc_oc=AdkW0BQO_47D4bTaMSGzvgBCJMb9zz3SxA_6KNpOfZcaGq1y3Qi7Uc1VDTTdj1LoKao&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=BTwANSs8Ozllsj6Khh5IZw&oh=00_AfIE4LRiE7nxA-rVyklRmPPJELkiVSaZUhc3l-tnBiWbFQ&oe=6841755A',
    receiverName: 'Victor G.',
    accountNumber: '09816249065',
    details: 'Scan QR or use the number below. Thank you for your support!'
  },
  {
    id: 'donate-cimb',
    methodName: 'CIMB Bank',
    qrCodeImageUrl: 'https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/502952399_698099103157938_2606399958845633769_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGYr14V6yna9guHWPdpif6TiXeOOLH-xcWJd444sf7Fxcb2CPZNzevih0qVyMMCl66m_uFr0KczOpkt20IZWjqs&_nc_ohc=yegAcvq06NUQ7kNvwHugp8z&_nc_oc=AdnGvH681jSID0BoqKMY5ZDPQY3rXqnWpIVFDGB9Sm1UzvYac-Tk5WkifA9NwdqnGZ4&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=aoXxiLC4Igg6lA-ZK-wQOw&oh=00_AfINcqgrHjq4RWmxzbjg_qYJmalLiPkYFfpJI9qFRpHh4w&oe=6841749C',
    receiverName: 'Victor G.',
    // This account number will not be displayed on the card due to the logic in DonationCard.tsx
    accountNumber: '09816249065', 
    details: 'Scan QR to donate. Thank you!' // Updated details
  },
];