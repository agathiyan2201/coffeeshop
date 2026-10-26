import { useState } from 'react';

const PREVIEW_LENGTH = 131;

export default function Description({ text }) {
  const [open, setOpen] = useState(false);
  const shown = open ? text : `${text.slice(0, PREVIEW_LENGTH).trimEnd()}..`;

  return (
    <>
      <h3 className="section-title">Description</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted">
        {shown}{' '}
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-sm font-semibold text-brand">
          {open ? 'Read Less' : 'Read More'}
        </button>
      </p>
    </>
  );
}
