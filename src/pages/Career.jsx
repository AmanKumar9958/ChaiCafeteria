import React, { useMemo, useState } from 'react';
import { uploadResumeToCloudinary } from '../lib/cloudinaryUpload';

export default function Career() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null); // { type: 'success'|'error', message: string }
  const [uploading, setUploading] = useState(false);
  const [resumeURL, setResumeURL] = useState('');
  const [resumePath, setResumePath] = useState('');
  const [uploadPct, setUploadPct] = useState(0);

  const accessKey = "2e7ea981-5d92-4908-90a3-67b0510817a6";

  const mailto = useMemo(() => {
    const to = 'connect@chaicafeteria.com';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);

    // If access key is missing, fallback to opening the email client
    if (!accessKey) {
      window.location.href = mailto;
      return;
    }

    // Simple required check
    if (!form.name || !form.email || !form.phone || !form.position) {
      setResult({ type: 'error', message: 'Please fill all required fields.' });
      return;
    }

    try {
      setSubmitting(true);
      const fd = new FormData();
      fd.append('access_key', accessKey);
      fd.append('subject', `Job Application: ${form.position || 'Open Position'}`);
      fd.append('from_name', form.name || 'Applicant');
      fd.append('email', form.email || '');
      fd.append('phone', form.phone || '');
      fd.append('position', form.position || '');
      fd.append('message', form.message || '');
      // Honeypot field
      fd.append('botcheck', '');
      // Include resume link instead of attachment (works on free tier)
      if (resumeURL) fd.append('resume_link', resumeURL);

      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      });
      const data = await resp.json();
      if (data.success) {
        setResult({ type: 'success', message: 'Application submitted successfully. We\'ll get back to you soon!' });
        setForm({ name: '', email: '', phone: '', position: '', message: '' });
        setResume(null);
      } else {
        setResult({ type: 'error', message: data.message || 'Submission failed. Please try again or email us directly.' });
      }
    } catch (err) {
      console.warn('Web3Forms submit error', err);
      setResult({ type: 'error', message: 'Network error. Please try again or email us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleUploadResume = async () => {
    setResult(null);
    if (!resume) {
      setResult({ type: 'error', message: 'Please choose a resume file to upload.' });
      return;
    }
    try {
      setUploading(true);
      setUploadPct(0);
      const { url, public_id, folder } = await uploadResumeToCloudinary(resume, { onProgress: (pct) => setUploadPct(pct) });
      setResumeURL(url);
      setResumePath(`${folder}/${public_id}`);
      setResult({ type: 'success', message: 'Resume uploaded successfully to Cloudinary. You can now submit your details.' });
      // Optional: clear the local file selection
      // setResume(null);
    } catch (err) {
      console.warn('Resume upload error', err);
      setResult({ type: 'error', message: 'Failed to upload resume. Please try again.' });
    } finally {
      setUploading(false);
    }
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
          {/* Status banners */}
          {result?.type === 'success' && (
            <div className="mb-4 rounded-lg border border-green-200 bg-green-50 text-green-800 px-4 py-3 text-sm">{result.message}</div>
          )}
          {result?.type === 'error' && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm">{result.message}</div>
          )}

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Hidden honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Section 1: Resume Upload */}
            <h2 className="text-lg font-bold text-brand-text mb-2">1) Upload Resume</h2>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-sm font-semibold mb-1">Choose File</label>
                <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={(e) => setResume(e.target.files?.[0] || null)} />
                {resume && <p className="text-xs text-gray-600 mt-1">Selected: {resume.name}</p>}
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleUploadResume}
                    disabled={uploading}
                    className="inline-flex items-center justify-center rounded-full border-2 border-brand-primary text-brand-text px-5 py-2 shadow-sm hover:bg-brand-primary/10 transition-colors disabled:opacity-70"
                  >
                    {uploading ? 'Uploading…' : 'Upload Resume to Cloudinary'}
                  </button>
                  {uploading && (
                    <span className="text-xs text-gray-600">{uploadPct}%</span>
                  )}
                  {resumeURL && (
                    <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="text-sm underline text-brand-primary">View/Download resume</a>
                  )}
                </div>
                {resumePath && <p className="text-[11px] text-gray-500 mt-1">Stored at: {resumePath}</p>}
              </div>
            </div>

            <hr className="my-6 border-black/10" />

            {/* Section 2: Basic Details */}
            <h2 className="text-lg font-bold text-brand-text mb-2">2) Basic Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input name="name" value={form.name} onChange={onChange} type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input name="email" value={form.email} onChange={onChange} type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="+91 9XXXXXXXXX" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Position</label>
              <select name="position" value={form.position} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-3 py-2" required>
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

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              {/* Web3Forms (emails, attachments depend on plan) */}
              <button
                type="submit"
                disabled={submitting}
                className="hover:cursor-pointer inline-flex items-center justify-center rounded-full bg-brand-primary text-black font-semibold px-6 py-3 shadow hover:bg-brand-secondary transition-colors disabled:opacity-70"
                title="Send via Web3Forms"
              >
                {submitting ? 'Submitting…' : (accessKey ? 'Submit via Web3Forms' : 'Send via Email')}
              </button>
              {!accessKey && (
                <a href={mailto} className="underline text-sm">Open email app</a>
              )}
              <span className="text-sm text-gray-600">Having trouble? <a className="underline" href={mailto}>Email us directly</a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
