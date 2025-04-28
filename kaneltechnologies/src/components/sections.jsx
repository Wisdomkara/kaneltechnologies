import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/images/Business-growth.jpeg';
import US from "../assets/images/team.jpeg";   

// Helper component for animation when scrolling
const AnimatedSection = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // If the element is visible
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // No need to observe once it's visible
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={domRef}
      className={`${className} transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      {children}
    </section>
  );
};

export const Home = () => (
  <AnimatedSection
    id="home"
    className="bg-gradient-to-b from-blue-600 via-blue-50 to-gray-50 py-16 px-9 md:px-12 pt-36 pb-28">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-lato  m-10">
          Comprehensive Managed IT Services
          <br className="hidden sm:block" />{' '}
          <span className="text-blue-700 font-lato">
            for the Modern{' '}
            <span className="text-blue-500 font-lato">Business Landscape</span>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-lato">
          At{' '}
          <span className="font-semibold text-blue-600 font-lato ">
            Kanel Technologies
          </span>
          , we do more than deliver IT services — we empower your business to
          grow, innovate, and scale with technology built around your goals.
          With solutions designed for today's challenges and tomorrow's
          opportunities.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-2xl shadow-lg transform hover:scale-105 hover:bg-blue-700 transition-all duration-300 ease-in-out">
            Our Services
          </button>
          <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 bg-white text-base font-semibold rounded-2xl transform hover:scale-105 hover:bg-blue-100 transition-all duration-300 ease-in-out">
            Reach Out
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={HeroImage}
          alt="Business growth illustration"
          className="w-full md:w-3/4 max-w-lg object-cover rounded-2xl shadow-xl transition-all duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  </AnimatedSection>
);








// about section
export const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content:
        'To empower businesses with technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.',
    },
    vision: {
      title: 'Our Vision',
      content:
        'To be the premier technology partner for businesses seeking innovative IT solutions that transform operations and enable sustainable success.',
    },
    values: {
      title: 'Our Values',
      content:
        'Excellence, Integrity, Innovation, Partnership, and Customer-Centricity guide everything we do at Kanel Technologies.',
    },
  };

  return (
    <AnimatedSection id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Kanel Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A team of dedicated IT professionals committed to delivering
            exceptional managed services tailored to your business requirements.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl bg-blue-200">
              {/* Placeholder for about image */}
              <div className="w-full h-64 bg-blue-200 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  <div>
                    <img
                      src={US}
                      alt=" team working together"
                      className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Your Trusted IT Partner
            </h3>
            <p className="text-gray-600 mb-6 font-lato">
              Since our founding, Kanel Technologies has been at the forefront
              of IT innovation, helping businesses leverage technology to
              achieve their goals. Our experienced team brings expertise across
              multiple domains to ensure your IT infrastructure operates at peak
              efficiency.
            </p>

            <div className="flex justify-between items-center text-gray-800">
              <div className="text-center">
                <p className="text-3xl font-lato font-bold text-blue-600">
                  15+
                </p>
                <p className="text-sm font-lato">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm font-lato">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm font-lato">Support</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {/* Tabs navigation */}
            <div className="flex border-b border-gray-200 mb-6">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 font-medium text-sm transition-all duration-200 ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-blue-500'
                  }`}>
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="py-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {tabContent[activeTab].content}
              </p>

              <ul className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Key point about{' '}
                      {tabContent[activeTab].title.toLowerCase()} at Kanel
                      Technologies. We prioritize excellence in every aspect of
                      our operations.
                    </p>
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'bg-blue-200', // Placeholder for team member image
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: 'bg-blue-200', // Placeholder for team member image
    },
    {
      name: 'Alex Johnson',
      position: 'Head of Client Relations',
      image: 'bg-blue-200', // Placeholder for team member image
    },
    {
      name: 'Sarah Williams',
      position: 'Lead System Architect',
      image: 'bg-blue-200', // Placeholder for team member image
    },
  ];

  return (
    <AnimatedSection id="team" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our talented professionals bring years of industry experience and a
            passion for technology to deliver exceptional IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div
                className={`h-48 ${member.image} flex items-center justify-center`}>
                <span className="text-blue-600 font-semibold">Team Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm">
                  Experienced professional with expertise in delivering
                  cutting-edge IT solutions.
                </p>
                <div className="mt-4 flex space-x-3">
                  {/* Social media icons */}
                  {['LinkedIn', 'Twitter', 'Email'].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition">
                      <span className="text-xs">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Interested in joining our team of IT professionals?
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Cloud Migration',
      category: 'Cloud Services',
      description:
        'Complete migration of legacy systems to cloud infrastructure for a Fortune 500 company.',
    },
    {
      title: 'Cybersecurity Enhancement',
      category: 'Security',
      description:
        'Implementation of comprehensive security protocols for a financial institution.',
    },
    {
      title: 'Network Infrastructure Upgrade',
      category: 'Networking',
      description:
        'Complete overhaul of networking systems for improved performance and reliability.',
    },
    {
      title: 'Custom Software Development',
      category: 'Development',
      description:
        'Custom application designed to streamline business operations and increase efficiency.',
    },
  ];

  return (
    <AnimatedSection id="projects" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx- font-lato">
            Explore some of our recent work delivering innovative IT solutions
            for businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  Project Image
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 font-medium flex items-center space-x-1 hover:text-blue-800 transition-colors">
                  <span>View Case Study</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Brown',
      company: 'XYZ Corporation',
      quote:
        "Kanel Technologies transformed our IT infrastructure and significantly improved our operational efficiency. Their team's expertise and commitment to excellence exceeded our expectations.",
    },
    {
      name: 'Emily Wilson',
      company: 'ABC Enterprises',
      quote:
        'Working with Kanel has been a game-changer for our business. Their proactive approach to IT management has prevented numerous issues and their support team is always responsive.',
    },
    {
      name: 'David Lee',
      company: '123 Industries',
      quote:
        'The cloud migration project handled by Kanel Technologies was completed ahead of schedule and under budget. Their technical knowledge and project management skills are outstanding.',
    },
  ];

  return (
    <AnimatedSection
      id="testimonials"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from the businesses we've
            helped succeed with our IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="mb-6">
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-blue-200"
                  fill="currentColor"
                  viewBox="0 0 32 32">
                  <path d="M10 8v6c0 2.2-1.8 4-4 4H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c4.4 0 8-3.6 8-8v-8c0-1.1-.9-2-2-2zm18 0v6c0 2.2-1.8 4-4 4h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c4.4 0 8-3.6 8-8v-8c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300">
            Read More Testimonials
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Blog = () => {
  const blogPosts = [
    {
      title: '5 Ways Cloud Computing Can Transform Your Business',
      category: 'Cloud Services',
      date: 'April 15, 2025',
      excerpt:
        'Discover how cloud computing solutions can drive efficiency and growth for businesses of all sizes.',
    },
    {
      title: "The Importance of Cybersecurity in Today's Digital Landscape",
      category: 'Security',
      date: 'April 8, 2025',
      excerpt:
        'Learn about the latest threats and how to protect your business from potential cybersecurity risks.',
    },
    {
      title: 'Leveraging AI for IT Operations: A Practical Guide',
      category: 'Innovation',
      date: 'March 27, 2025',
      excerpt:
        'Explore practical applications of artificial intelligence to improve your IT infrastructure and operations.',
    },
  ];

  return (
    <AnimatedSection id="blog" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and news in IT and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">Blog Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-blue-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-medium flex items-center space-x-1 hover:text-blue-800 transition-colors">
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Contact = () => {
  return (
    <AnimatedSection
      id="contact"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our IT services or want to discuss your
            project? Reach out to us today and one of our experts will get back
            to you promptly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Message Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Your Message"></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">Email</h4>
              <p className="text-gray-600">info@kaneltechnologies.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">Location</h4>
              <p className="text-gray-600">
                123 Business Avenue, Suite 100
                <br />
                New York, NY 10001
              </p>
            </div>

            <div className="flex justify-between items-center p-2">
              {/* Social Media Links */}
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <span className="text-sm font-bold">
                      {social.charAt(0)}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
