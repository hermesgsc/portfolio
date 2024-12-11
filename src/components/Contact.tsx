"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Typography from "./Typography";
import Card from "./Card";

const Contact: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-primary-800 to-primary-900 p-6 flex items-center justify-center py-12 min-h-screen">
      <Card className="w-full max-w-2xl mx-auto shadow-lg overflow-hidden bg-white dark:bg-secondary-800">
        <div className="p-8">
          <div className="space-y-1 mb-6">
            <Typography
              variant="subtitle"
              weight="bold"
              className="flex items-center justify-between text-primary-900 dark:text-primary-100"
            >
              Contact
              <Icon
                icon="mingcute:user-1-line"
                width="24"
                height="24"
                className="text-primary-600 dark:text-primary-400"
              />
            </Typography>
            <Typography
              variant="caption"
              className="text-secondary-600 dark:text-secondary-300"
            >
              Feel free to send me an email or reach out to me on the social
              media platforms listed below.
            </Typography>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-secondary-700 dark:text-secondary-300"
              >
                Name
              </Typography>
              <input
                id="name"
                className="w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-700 dark:border-secondary-600 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-secondary-700 dark:text-secondary-300"
              >
                Email
              </Typography>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-700 dark:border-secondary-600 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-secondary-700 dark:text-secondary-300"
              >
                Subject
              </Typography>
              <input
                id="subject"
                className="w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-700 dark:border-secondary-600 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-secondary-700 dark:text-secondary-300"
              >
                Message
              </Typography>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 h-32 resize-none dark:bg-secondary-700 dark:border-secondary-600 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-300"
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
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
            <a
              href="https://www.linkedin.com/in/hermes-gabriel-78410b232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </a>
            <a
              href="mailto:hermesg.dev@gmail.com"
              target="blank"
              aria-label="Email"
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors duration-300"
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
