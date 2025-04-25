import React from 'react';

export const Home = () => (
  <>
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold ">Home</h1>
    </section>
  </>
);
export const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-white">
    <h1 className="text-5xl font-bold">About Us</h1>
  </section>
);

export const Team = () => (
  <section
    id="team"
    className="min-h-screen flex items-center justify-center bg-gray-100">
    <h1 className="text-5xl font-bold">Team</h1>
  </section>
);
export const Projects = () => (
  <section
    id="projects"
    className="min-h-screen flex items-center justify-center bg-white">
    <h1 className="text-5xl font-bold">Projects</h1>
  </section>
);
export const Testimonials = () => (
  <section
    id="testimonials"
    className="min-h-screen flex items-center justify-center bg-gray-100">
    <h1 className="text-5xl font-bold">Testimonials</h1>
  </section>
);

export const Blog = () => (
  <section
    id="blog"
    className="min-h-screen flex items-center justify-center bg-gray-100">
    <button className="text-5xl font-bold">Blogs</button>
  </section>
);
export const Contact = () => (
  <section
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gray-100">
    <button className="bg-blue-600 text-white">Contact Us</button>
  </section>
);
