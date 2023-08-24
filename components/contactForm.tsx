import { getClasses } from "@/lib/utils";

const ContactForm = () => {
  return (
    <form
      className="flex flex-col gap-4 p-2 [&_label]:font-semibold [&_label]:text-slate-300"
      action="mailto:jaimetrovoada@gmail.com"
      method="GET"
    >
      <div className={getClasses("flex flex-col gap-1")}>
        <label htmlFor="subject">Subject</label>
        <input
          className={getClasses(
            "rounded border border-gray-800 bg-zinc-900/50 p-2 placeholder:capitalize placeholder:text-gray-500",
            {
              "border-red-600": false,
            }
          )}
          id="subject"
          type="text"
          name="subject"
          placeholder="Freelance Project Inquiry"
        />
      </div>
      <div className={getClasses("flex flex-col gap-1")}>
        <label htmlFor="body">Tell me about your project</label>
        <textarea
          className={getClasses(
            "resize-none rounded border border-gray-800 bg-zinc-900/50 p-2 placeholder:capitalize placeholder:text-gray-500",
            {
              "border-red-600": false,
            }
          )}
          id="body"
          name="body"
          rows={5}
          cols={30}
          placeholder="Tell me about your project"
        ></textarea>
      </div>
      <input
        className="w-fit cursor-pointer rounded-lg border-2 border-gray-400 p-4 py-2 font-semibold hover:border-yellow-400"
        type="submit"
        value="Send a message!"
      />
    </form>
  );
};

export default ContactForm;
