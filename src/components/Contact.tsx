"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Typography from "./Typography";
import Card from "./Card";

const Contact: React.FC = () => {
  return (
    <section className="p-6 bg-primary-800 flex items-center  justify-center">
      <Card className="p-6 border-primary-500 w-full max-w-2xl mx-auto bg-primary-700 shadow-lg rounded-xl">
        <div className="p-8">
          <div className="space-y-4 mb-6">
            <Typography
              variant="subtitle"
              weight="bold"
              className="flex items-center justify-between text-primary-100"
            >
              Contact
              <Icon
                icon="mingcute:user-1-line"
                width="24"
                height="24"
                className="text-primary-300"
              />
            </Typography>
            <Typography variant="caption" className="text-primary-300">
              Feel free to send me an email or reach out to me on the social
              media platforms listed below.
            </Typography>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-primary-300"
              >
                Name
              </Typography>
              <input
                id="name"
                className="w-full px-3 py-2 border border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-0 bg-primary-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-primary-300"
              >
                Email
              </Typography>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-0 bg-primary-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-primary-300"
              >
                Subject
              </Typography>
              <input
                id="subject"
                className="w-full px-3 py-2 border border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-0 bg-primary-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-primary-300"
              >
                Message
              </Typography>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-0 h-32 resize-none bg-primary-600 text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Send
            </button>
          </form>

          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://github.com/hermesgsc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-primary-300 hover:text-secondary-600 transition-colors duration-300"
            >
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
            <a
              href="https://www.linkedin.com/in/hermes-gabriel-78410b232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-primary-300 hover:text-secondary-600 transition-colors duration-300"
            >
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </a>
            <a
              href="mailto:hermesg.dev@gmail.com"
              target="blank"
              aria-label="Email"
              className="text-primary-300 hover:text-secondary-600 transition-colors duration-300"
            >
              <Icon icon="mingcute:mail-line" width="24" height="24" />
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
