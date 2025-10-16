// cloudinaryUpload.js

// Unsigned upload to Cloudinary with progress
// With explicit resource_type detection to fix PDF loading issue.

export function uploadResumeToCloudinary(file, { onProgress } = {}) {
  return new Promise((resolve, reject) => {
    const cloudName = "dn8heymhj";        // Your Cloudinary cloud name
    const uploadPreset = "resume_uploads";  // Your unsigned upload preset

    if (!cloudName || !uploadPreset) {
      reject(new Error('Missing Cloudinary config.'));
      return;
    }

    // --- FIX: Explicitly determine the resource type ---
    const isPdf = typeof file?.type === 'string'
      ? file.type === 'application/pdf'
      : file.name.toLowerCase().endsWith('.pdf');
    
    // Use 'raw' for PDFs and 'auto' for everything else (like images).
    const resourceType = isPdf ? 'raw' : 'auto';

    // Construct the correct URL with the explicit resource type
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

    const form = new FormData();
    form.append('upload_preset', uploadPreset);
    form.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.upload.onprogress = (evt) => {
      if (evt.lengthComputable && typeof onProgress === 'function') {
        const pct = Math.round((evt.loaded / evt.total) * 100);
        onProgress(pct);
      }
    };

    xhr.onerror = () => reject(new Error('Network error during Cloudinary upload.'));
    xhr.timeout = 120000; // 2 minutes
    xhr.ontimeout = () => reject(new Error('Cloudinary upload timed out.'));

    xhr.onload = async () => {
      try {
        const res = JSON.parse(xhr.responseText);

        if (xhr.status >= 200 && xhr.status < 300 && res.secure_url) {
          // Use the direct, unmodified URL from Cloudinary. It is the most reliable.
          resolve({ url: res.secure_url, public_id: res.public_id });

        } else {
          const errMsg = res?.error?.message || `Cloudinary upload failed (status ${xhr.status})`;
          console.error('Cloudinary upload error:', { status: xhr.status, response: res });
          reject(new Error(errMsg));
        }
      } catch (e) {
        console.error('Cloudinary response parse error', e);
        reject(new Error('Invalid response from Cloudinary.'));
      }
    };

    xhr.send(form);
  });
}