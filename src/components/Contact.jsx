const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-neutral-800 px-6 py-28 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl font-light tracking-tight text-white">
          Let’s work together
        </h2>

        <p className="mt-6 text-neutral-400 leading-relaxed">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Say hello
          </a>
        </div>

        {/* Email hint */}
        <p className="mt-6 text-xs text-neutral-500">
          Or reach out directly at{" "}
          <span className="text-neutral-300">gopalmankar812@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
