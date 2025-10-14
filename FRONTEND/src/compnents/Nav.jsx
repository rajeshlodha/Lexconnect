import React from "react";
import { Link } from "react-router-dom";

export const LandingPageContent = () => {
  return (
    <>
      {/* Hero Section */}
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

      {/* Services Section */}
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
            {/* Service Cards Go Here */}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
            {/* Attorney Cards Go Here */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Cards Go Here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
