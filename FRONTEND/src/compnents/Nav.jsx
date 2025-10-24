import React from "react";
import { Link } from "react-router-dom";

// --- (Services Data from step 1) ---
const servicesData = [
  {
    icon: "gavel",
    title: "Corporate Law",
    description:
      "Advising businesses on legal obligations, compliance, and governance.",
  },
  {
    icon: "family_restroom",
    title: "Family Law",
    description:
      "Handling sensitive matters like divorce, custody, and settlements with care.",
  },
  {
    icon: "real_estate_agent",
    title: "Real Estate Law",
    description:
      "Guiding clients through property transactions, zoning, and disputes.",
  },
  {
    icon: "shield",
    title: "Criminal Defense",
    description:
      "Defending your rights with expert legal representation in criminal cases.",
  },
  {
    icon: "medical_services",
    title: "Personal Injury",
    description:
      "Fighting for compensation you deserve from accidents and injuries.",
  },
  {
    icon: "account_balance",
    title: "Litigation & Dispute",
    description:
      "Representing you in court and resolving complex legal disputes effectively.",
  },
];

// --- (Team Data from step 2) ---
const teamData = [
  {
    name: "Jonathan Mitchell",
    role: "Corporate Law Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Sophia Rodriguez",
    role: "Family Law Attorney",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  },
  {
    name: "David Chen",
    role: "Litigation Expert",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

// --- 1. I'VE ADDED THIS NEW TESTIMONIALS DATA ---
const testimonialsData = [
  {
    quote:
      "Lex Connect's expertise in corporate law was invaluable. They guided us through a complex merger with professionalism and precision.",
    name: "Sarah K.",
    company: "CEO, Tech Innovators",
  },
  {
    quote:
      "Facing a difficult family matter, Sophia Rodriguez provided not just expert legal counsel, but also the compassion I needed.",
    name: "Michael B.",
    company: "Private Client",
  },
  {
    quote:
      "David Chen is a sharp and relentless litigator. His dedication to our case led to a successful outcome we didn't think was possible.",
    name: "Emily T.",
    company: "Director, Apex Solutions",
  },
];

export const LandingPageContent = () => {
  return (
    <>
      {/* Hero Section (Unchanged) */}
      <section className="relative py-20 bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Expert Legal <span className="text-yellow-500">Solutions</span>{" "}
                For Your Complex Issues
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our team of experienced attorneys provides comprehensive legal
                consultancy services tailored to your specific needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-all duration-200 transform hover:-translate-y-1"
                >
                  Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 border border-yellow-500 text-white font-semibold rounded hover:bg-gray-900 transition-all duration-200 transform hover:-translate-y-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Legal professionals in a meeting"
                className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-black bg-opacity-80 p-6 rounded-lg shadow-xl border border-gray-800">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-500 text-4xl font-bold">
                    98%
                  </span>
                  <p className="text-sm">Success rate in client cases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/10 to-transparent"></div>
      </section>

      {/* Services Section (Unchanged from last step) */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gray-900 text-yellow-500 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide a wide range of legal services to meet the diverse
              needs of our clients, from individuals to corporations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg transform hover:-translate-y-2 hover:border-yellow-500/50 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-yellow-500 text-5xl mb-5 inline-block">
                  {service.icon}
                </span>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Unchanged from last step) */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gray-900 text-yellow-500 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Attorneys
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team of highly qualified legal professionals is dedicated to
              providing exceptional service and achieving the best outcomes for
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg transform hover:-translate-y-2 hover:border-yellow-500/50 transition-all duration-300"
              >
                {/* --- THIS IS THE CORRECTED LINE --- */}
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-64 object-cover object-[center_25%]"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-yellow-500 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gray-900 text-yellow-500 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We take pride in providing excellent service and achieving the
              best possible outcomes for our clients.
            </p>
          </div>

          {/* --- 2. I'VE REPLACED THE COMMENT WITH THIS CODE --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg flex flex-col transform hover:-translate-y-2 hover:border-yellow-500/50 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-yellow-500 text-5xl mb-4">
                  format_quote
                </span>
                <p className="text-gray-300 leading-relaxed mb-6 italic flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-800 pt-5">
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          {/* --- END OF NEW CODE --- */}
        </div>
      </section>

      {/* CTA Section (Unchanged) */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Solve Your Legal Challenges?
                </h2>
                <p className="text-gray-300 mb-6">
                  Schedule a consultation with one of our expert attorneys to
                  discuss your specific legal needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/login"
                    className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="tel:+1234567890"
                    className="px-6 py-3 border border-yellow-500 text-white font-semibold rounded hover:bg-gray-800 flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2">call</span>{" "}
                    Call Us Now
                  </a>
                </div>
              </div>
              <div className="md:col-span-2 relative">
                {/* 24/7 Support Graphic */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
