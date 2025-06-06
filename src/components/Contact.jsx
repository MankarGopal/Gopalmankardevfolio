const Contact = () => {
  return (
    <div
      className="border-b border-neutral-800 py-20 px-4 text-center"
      id="contact"
    >
      <h1 className="mb-10 text-4xl font-semibold">Get In Touch</h1>
      <p className="mb-10 max-w-xl mx-auto text-neutral-400">
        Whether you want to discuss a project or just say hi, my inbox is always
        open!
      </p>
      <a
        href="mailto:your-email@example.com"
        className="inline-block rounded bg-purple-700 px-6 py-3 text-white transition hover:bg-purple-600"
      >
        Say Hello 👋
      </a>
    </div>
  );
};

export default Contact;
