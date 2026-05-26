export const partners = [
  { n: 'Google', c: '#4285F4', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { n: 'Microsoft', c: '#00A4EF', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { n: 'Amazon', c: '#FF9900', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { n: 'TCS', c: '#E31937', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { n: 'Infosys', c: '#007CC3', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { n: 'Wipro', c: '#7CB9E8', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { n: 'Deloitte', c: '#86BC25', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
  { n: 'Cognizant', c: '#1560A0', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Cognizant_logo.svg' },
  { n: 'Capgemini', c: '#0070AD', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Capgemini_Logo.svg' },
  { n: 'Accenture', c: '#A100FF', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { n: 'Tech Mahindra', c: '#E31E24', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tech_Mahindra_New_Logo.svg' },
  { n: 'HCL', c: '#0095D9', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/HCL_Technologies_logo.svg' },
  { n: 'IBM', c: '#054ADA', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { n: 'Flipkart', c: '#F1C40F', logo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Flipkart_logo.svg' },
  { n: 'Zoho', c: '#E42527', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Zoho_logo.svg' },
];

export const popularCourses = [
  { title: 'Python', subtitle: 'For Beginners', level: 'Beginner', students: '32K', gradient: 'linear-gradient(135deg,#1e3a5f,#0d7490)', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', featured: false },
  { title: 'Web Development', subtitle: 'HTML, CSS, JS', level: 'Intermediate', students: '48K', gradient: 'linear-gradient(135deg,#4a1040,#7c3aed)', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', featured: false },
  { title: 'Full Stack Dev', subtitle: 'MERN Stack', level: 'Advanced', students: '65K', gradient: 'linear-gradient(135deg,#0c4a6e,#1d4ed8)', img: 'https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png', featured: true },
  { title: 'Java Programming', subtitle: 'Core Java', level: 'Intermediate', students: '27K', gradient: 'linear-gradient(135deg,#450a0a,#dc2626)', img: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', featured: false },
  { title: 'C++ Programming', subtitle: 'Learn C++', level: 'Advanced', students: '21K', gradient: 'linear-gradient(135deg,#0c2a4a,#1d4ed8)', img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', featured: false },
];

export const reviews = [
  { name: 'Rahul Sharma', role: 'Full Stack Developer', company: 'TCS', text: 'CodingPoint completely changed my career. I got placed in TCS after completing the MERN Stack course.', hl: 'MERN Stack', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Verma', role: 'Software Engineer', company: 'Accenture', text: 'The mentors and projects were amazing. I cracked my Accenture interview confidently.', hl: 'Accenture', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Aman Thakur', role: 'Python Developer', company: 'Infosys', text: 'Best coding institute for beginners. The placement support helped me a lot.', hl: 'placement support', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { name: 'Neha Singh', role: 'Web Developer', company: 'Wipro', text: "I learned so much from live projects and doubt sessions. Now I'm working as a Web Developer.", hl: 'Web Developer', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

export const courses = [
  { img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', iconBg: '#3776AB', title: 'Python Programming', subtitle: 'From Basics to Advanced', desc: 'Master Python programming with real-world projects and hands-on exercises.', duration: '10 Weeks', level: 'Beginner', badge: 'Bestseller', badgeColor: '#7c3aed', cat: 'Programming' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', iconBg: '#20232a', title: 'React.js Development', subtitle: 'Build Modern Web Apps', desc: 'Learn React from scratch and build fast, scalable, and interactive web applications.', duration: '12 Weeks', level: 'Intermediate', badge: 'Popular', badgeColor: '#2563eb', cat: 'Web Development' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', iconBg: '#F7DF1E', title: 'JavaScript Essentials', subtitle: 'Fundamentals to Advanced', desc: 'Strengthen your JavaScript skills and build dynamic, responsive web applications.', duration: '8 Weeks', level: 'Beginner', badge: 'Bestseller', badgeColor: '#7c3aed', cat: 'Programming' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', iconBg: '#1a1a1a', title: 'Node.js Backend', subtitle: 'Build Powerful APIs', desc: 'Learn Node.js, Express, and MongoDB to build fast and secure backend applications.', duration: '10 Weeks', level: 'Intermediate', badge: 'New', badgeColor: '#059669', cat: 'Web Development' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', iconBg: '#00599C', title: 'C++ Programming', subtitle: 'For Problem Solving', desc: 'Master C++ and data structures to solve complex problems efficiently.', duration: '12 Weeks', level: 'Advanced', badge: 'Popular', badgeColor: '#2563eb', cat: 'Programming' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg', iconBg: '#150458', title: 'Data Science', subtitle: 'Analyze. Visualize. Predict.', desc: 'Learn data analysis, visualization, and machine learning using Python libraries.', duration: '14 Weeks', level: 'Intermediate', badge: 'New', badgeColor: '#059669', cat: 'Data Science' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', iconBg: '#1e1e1e', title: 'UI/UX Design', subtitle: 'Design Beautiful Experiences', desc: 'Learn UI/UX design principles and create modern, user-friendly designs.', duration: '8 Weeks', level: 'Beginner', badge: 'Bestseller', badgeColor: '#7c3aed', cat: 'Tools & Others' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', iconBg: '#0f172a', title: 'Tailwind CSS', subtitle: 'Utility-First Styling', desc: 'Master Tailwind CSS and build modern, responsive, and beautiful web interfaces.', duration: '6 Weeks', level: 'Beginner', badge: 'New', badgeColor: '#059669', cat: 'Web Development' },
];

export const studentsPlaced = [
  { name: 'Rahul Sharma', role: 'Software Engineer', company: 'Microsoft', pkg: '12.5 LPA', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Ananya Singh', role: 'Software Developer', company: 'Google', pkg: '11.2 LPA', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Karan Patel', role: 'SDE - 1', company: 'Amazon', pkg: '9.8 LPA', avatar: 'https://randomuser.me/api/portraits/men/55.jpg', companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Neha Gupta', role: 'Asst. System Eng.', company: 'TCS', pkg: '7.6 LPA', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Arjun Mehta', role: 'System Engineer', company: 'Infosys', pkg: '7.0 LPA', avatar: 'https://randomuser.me/api/portraits/men/76.jpg', companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
];

export const hiringPartners = [
  { n: 'IBM', c: '#054ADA', students: '120+ Hired', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { n: 'TCS', c: '#E31937', students: '200+ Placed', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { n: 'Accenture', c: '#A100FF', students: '150+ Students', hl: true, logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { n: 'Infosys', c: '#007CC3', students: '180+ Placed', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { n: 'Wipro', c: '#7CB9E8', students: '100+ Hired', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { n: 'Cognizant', c: '#1560A0', students: '90+ Placed', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Cognizant_logo.svg' },
  { n: 'HCL', c: '#0095D9', students: '120+ Hired', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/HCL_Technologies_logo.svg' },
  { n: 'Tech Mahindra', c: '#E31E24', students: '80+ Placed', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tech_Mahindra_New_Logo.svg' },
  { n: 'Capgemini', c: '#0070AD', students: '70+ Hired', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Capgemini_Logo.svg' },
  { n: 'Deloitte', c: '#86BC25', students: '60+ Placed', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
  { n: 'Google', c: '#4285F4', students: '50+ Hired', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { n: 'Microsoft', c: '#00A4EF', students: '60+ Placed', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { n: 'Amazon', c: '#FF9900', students: '80+ Hired', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { n: 'Flipkart', c: '#F1C40F', students: '40+ Placed', logo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Flipkart_logo.svg' },
  { n: 'Zoho', c: '#E42527', students: '30+ Hired', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Zoho_logo.svg' },
];

export const blogPosts = [
  { title: 'Top 10 Programming Languages to Learn in 2025', excerpt: 'Discover which programming languages are dominating the tech industry and why you should learn them.', cat: 'Programming', date: 'May 15, 2025', read: '5 min read', color: '#2563eb', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=220&fit=crop' },
  { title: 'How to Crack Your First Tech Interview', excerpt: 'A complete guide to preparing for and acing technical interviews at top product companies.', cat: 'Career', date: 'May 10, 2025', read: '8 min read', color: '#7c3aed', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=220&fit=crop' },
  { title: 'MERN Stack vs MEAN Stack: Which to Choose?', excerpt: 'A detailed comparison of the two most popular full-stack JavaScript frameworks for web development.', cat: 'Web Dev', date: 'May 5, 2025', read: '6 min read', color: '#0891b2', img: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=220&fit=crop' },
  { title: 'Data Science Career Path: A Complete Roadmap', excerpt: 'Everything you need to know about starting and growing a career in data science.', cat: 'Data Science', date: 'April 28, 2025', read: '10 min read', color: '#059669', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop' },
  { title: 'Why Every Developer Should Know DSA', excerpt: 'Understanding data structures and algorithms is essential for writing efficient code and cracking interviews.', cat: 'Programming', date: 'April 20, 2025', read: '7 min read', color: '#d97706', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=220&fit=crop' },
  { title: 'Freelancing as a Developer: Getting Started', excerpt: 'Learn how to transition from a student to a freelance developer and land your first client.', cat: 'Career', date: 'April 15, 2025', read: '9 min read', color: '#dc2626', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=220&fit=crop' },
];

export const reviewStats = [
  { icon: '👥', val: '10K+', lbl: 'Students Trained', bg: 'rgba(37,99,235,0.2)' },
  { icon: '🏆', val: '95%', lbl: 'Placement Rate', bg: 'rgba(124,58,237,0.2)' },
  { icon: '💼', val: '500+', lbl: 'Hiring Partners', bg: 'rgba(37,99,235,0.2)' },
  { icon: '⭐', val: '4.9/5', lbl: 'Student Rating', bg: 'rgba(124,58,237,0.2)' },
];