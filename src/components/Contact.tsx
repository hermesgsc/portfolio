import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import Typography from "./Typography";
import Card from "./Card";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAILJS_USER_ID
    ) {
      console.error(
        "EmailJS configuration is missing in environment variables"
      );
      setStatus("Error: EmailJS configuration missing");
      setStatusType("error");
      return;
    }

    setLoading(true);

    const formData = new FormData(form.current as HTMLFormElement);
    console.log("Form data:", formData);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current as HTMLFormElement,
        process.env.REACT_APP_EMAILJS_USER_ID!
      )
      .then(
        (response) => {
          console.log(
            "Message sent successfully!",
            response.status,
            response.text
          );
          setStatus("Message sent successfully!");
          setStatusType("success");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.log("Error sending the message:", error.text);
          setStatus("Error sending the message. Please try again.");
          setStatusType("error");
          setLoading(false);
        }
      );
  };

  const closeStatus = () => {
    setStatus("");
    setStatusType("");
  };

  return (
    <section className="p-6 bg-primary-800 flex items-center justify-center">
      <Card className="p-6 border-primary-500 w-full max-w-2xl mx-auto bg-primary-700 shadow-lg rounded-xl">
        <div className="p-8">
          <div className="space-y-8 mb-6">
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

          <form ref={form} onSubmit={sendEmail} className="space-y-4 pt-6">
            <div className="space-y-2">
              <Typography
                variant="caption"
                as="label"
                className="block text-primary-300"
              >
                Name
              </Typography>
              <input
                type="text"
                name="user_name"
                className="w-full px-3 py-2 border border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-0 bg-primary-600 text-white"
                required
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
                type="email"
                name="user_email"
                className="w-full px-3 py-2 border border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-0 bg-primary-600 text-white"
                required
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
                name="message"
                className="w-full px-3 py-2 border border-primary-500 rounded-md shadow-sm focus:outline-none focus:ring-0 h-32 resize-none bg-primary-600 text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Send
            </button>
          </form>

          {loading && (
            <div className="mt-6 flex text-center items-center justify-center">
              <Icon icon={"line-md:loading-twotone-loop"} height={32} />
            </div>
          )}

          {status && !loading && (
            <div
              className={`mt-6 text-center p-3 flex justify-between items-center px-6 transition-all duration-300 ${
                statusType === "success"
                  ? "bg-emerald-200 text-emerald-600 border border-emerald-600 rounded-md"
                  : "bg-red-200 text-red-600 border-red-600 border rounded-md"
              }`}
            >
              <div className="flex items-center">
                <p>{status}</p>
              </div>
              <Icon
                onClick={closeStatus}
                className="text-primary-900 hover:cursor-pointer rounded-full hover:text-primary-300 transition-all"
                icon={"material-symbols-light:close"}
                height={32}
                width={32}
              />
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default Contact;
