import React, { useMemo, useState } from 'react';

export default function Career() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [resume, setResume] = useState(null);

  const mailto = useMemo(() => {
    const to = 'chaicafeteria99@gmail.com';
    const subject = encodeURIComponent(`Job Application: ${form.position || 'Open Position'}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Position: ${form.position}`,
      '',
      'Message:',
      form.message || '(no message)',
      '',
      'Note: Please attach your resume file before sending if your email client supports attachments.',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [form]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-text">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-brand-primary text-center"
        >
          Careers at Chai Cafeteria
        </h1>
        <p className="mt-4 text-center text-gray-700">We're always looking for friendly faces and passionate food lovers. Apply below.</p>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input name="name" value={form.name} onChange={onChange} type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input name="email" value={form.email} onChange={onChange} type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="+91 9XXXXXXXXX" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Position</label>
              <select name="position" value={form.position} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Select a role</option>
                <option value="Chef / Cook">Chef / Cook</option>
                <option value="Kitchen Assistant">Kitchen Assistant</option>
                <option value="Waiter / Service Staff">Waiter / Service Staff</option>
                <option value="Cashier / Front Desk">Cashier / Front Desk</option>
                <option value="Barista / Beverage">Barista / Beverage</option>
                <option value="Cleaner / Support">Cleaner / Support</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Briefly tell us about yourself" />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1">Resume (optional)</label>
            <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={(e) => setResume(e.target.files?.[0] || null)} />
            {resume && <p className="text-xs text-gray-600 mt-1">Selected: {resume.name}</p>}
            <p className="text-xs text-gray-500 mt-1">Note: Attachments cannot be auto-included via mailto. After the email opens, attach this file in your email app before sending.</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <a href={mailto} className="inline-block rounded-full bg-brand-primary text-black font-semibold px-6 py-3 shadow hover:bg-brand-secondary transition-colors">Send Application Email</a>
            <span className="text-sm text-gray-600">Or email us directly: <a className="underline" href="mailto:chaicafeteria99@gmail.com">chaicafeteria99@gmail.com</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}
