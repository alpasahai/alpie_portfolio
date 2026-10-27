import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import { pan_left, pan_right } from "../utilities/animation";

//Links for the buttons
const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/alpa-sahai/" },
  { name: "GitHub", url: "https://github.com/alpasahai" },
];

//The ripped paper edge
const ripped_edge =
  "polygon(0% 8%, 3% 7.2%, 6% 7.8%, 9% 6.9%, 12% 7.4%, 16% 6.2%, 19% 6.8%, 23% 5.9%, 26% 6.6%, 30% 5.4%, 34% 6.1%, 37% 5.2%, 41% 5.8%, 45% 4.9%, 48% 5.5%, 52% 4.6%, 56% 5.3%, 60% 4.2%, 63% 4.9%, 67% 3.8%, 71% 4.5%, 75% 3.4%, 78% 4.1%, 82% 3%, 86% 3.6%, 89% 2.4%, 92% 3.1%, 95% 1.8%, 97.5% 2.2%, 100% 1%, 100% 100%, 0% 100%)";

//Empty form statte:
const empty_form = { name: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(empty_form); 
  const [errors, setErrors] = useState({}); 
  const [sending, setSending] = useState(false); 
  const [modal, setModal] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: false }); //clear the error once they start typing
  };

  //Error checking so returns true only if every box has something in it
  const validate = () => {
    const new_errors = {
      name: form.name.trim() === "",
      subject: form.subject.trim() === "",
      message: form.message.trim() === "",
    };
    setErrors(new_errors);
    return !new_errors.name && !new_errors.subject && !new_errors.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //stops the page from refreshing
    if (!validate()) return; 

    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: form.name, subject: form.subject, message: form.message },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setForm(empty_form); //clear the boxes
      setModal("sent");
    } 
    catch (err) {
      console.error("EmailJS error:", err);
      setModal("error"); //keep what they typed so they can try again
    } 
    finally {
      setSending(false);
    }
  };

  const boxStyle = (field) =>
    `w-full bg-transparent border-2 px-3 py-2 font-body text-lg text-rose placeholder-rose/70 outline-none focus:bg-white/40 transition-colors ${
      errors[field] ? "border-red-600" : "border-rose"
    }`;

  return (
    <div className="min-h-screen bg-maroon flex flex-col">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-[1.1fr_1fr] gap-16 px-12">
        {/*LEFT - the ripped paper enquiry sheet pans in frm the left*/}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pan_left}
          className="bg-creme pt-24 pb-16 px-14 flex flex-col"
          style={{ clipPath: ripped_edge }}
        >
          <h2 className="font-heading text-7xl text-rose mb-8">enquiries</h2>

          {/*noValidate = turn off the browser's own popups so we can use OUR error checking*/}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 flex-1">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className={boxStyle("name")} />
            <input name="subject" placeholder="Subject of Enquiry" value={form.subject} onChange={handleChange} className={boxStyle("subject")} />
            <textarea name="message" placeholder="Description" value={form.message} onChange={handleChange} className={`${boxStyle("message")} resize-none flex-1 min-h-[160px]`} />

            {/*Only shows up if something is missing*/}
            {(errors.name || errors.subject || errors.message) && (
              <p className="font-body text-red-600 text-sm -mt-2">Please fill in all the boxes before sending!</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="self-center mt-2 bg-rose text-creme font-nav text-3xl px-20 py-2 transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-wait"
            >
              {sending ? "Sending..." : "Submit"}
            </button>
          </form>
        </motion.div>

        {/*RIGHT - contact me + links pan in frm the right*/}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pan_right}
          className="flex flex-col items-end pt-10"
        >
          <h1 className="font-heading text-rose text-8xl leading-[0.8] text-right">
            contact
            <br />
            <span className="pr-4">me</span>
          </h1>
            <br></br>
          <p className="font-body text-blush text-sm leading-relaxed text-right">
            Like what you see? Feel free to check out my LinkedIn and GitHub or send through an enquiry and I'll do my best to respond as soon as I can!!
          </p>

          <div className="flex flex-col gap-6 mt-16 w-80 self-center">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank" //opens in a new tab so they don't leave my site
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-rose text-rose font-nav text-3xl text-center py-2 transition-colors hover:bg-rose hover:text-creme"
              >
                {social.name}
              </motion.a>
            ))}
          </div>

          <p className="font-body text-blush mt-auto pb-6">@alpie productions</p>
        </motion.div>
      </div>

      {/*THE MODAL - AnimatePresence lets it animate OUT when it closes, not just in*/}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)} //click the dark background to close
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.6, rotate: -4 }}
              animate={{ scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 12 } }}
              exit={{ scale: 0.6, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} //clicking the card itself shouldn't close it
              className="bg-creme px-16 py-10 flex flex-col items-center gap-6 shadow-2xl"
            >
              <h3 className="font-heading text-6xl text-rose">
                {modal === "sent" ? "Message Sent!" : "Message Error (it's having a moment)!"}
              </h3>
              <p className="font-body text-rose text-center">
                {modal === "sent"
                  ? "Thank you for reaching out, I'll get back to you soon!!"
                  : "Something went wrong sending your message, please try again."}
              </p>
              <button
                onClick={() => setModal(null)}
                className="bg-rose text-creme font-nav text-2xl px-10 py-1 hover:opacity-80"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
