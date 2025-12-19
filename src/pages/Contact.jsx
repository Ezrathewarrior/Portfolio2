function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form
        action="https://formspree.io/f/xeejodzz"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

