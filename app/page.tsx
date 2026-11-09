'use client';

import { useState } from 'react';

export default function TextEditorPage() {
  const [find, setFind] = useState<string>('');
  const [replace, setReplace] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleReplace = () => {
    if (!find) return;
    const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    setText(text.replace(new RegExp(escaped, 'gi'), () => replace));
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Take Home Test Ian Ongkoyoyo</h1>

      <div className="border rounded p-3">
        <h2 className="font-semibold mb-2">Replace</h2>
        <div className="flex gap-3">
          <input
            className="flex-1 border rounded px-3 py-2"
            placeholder="Cari kata"
            value={find}
            onChange={(e) => setFind(e.target.value)}
          />
          <input
            className="flex-1 border rounded px-3 py-2"
            placeholder="Ganti dengan"
            value={replace}
            onChange={(e) => setReplace(e.target.value)}
          />
          <button
            className="border rounded px-4 py-2 disabled:opacity-50"
            onClick={handleReplace}
            disabled={!find}
          >
            Replace
          </button>
        </div>
      </div>

      <textarea
        className="border rounded p-3 h-60"
        placeholder="Tulis teks di sini"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="border rounded px-3 py-2 whitespace-pre-wrap">
        {text}
      </div>

      <div className="border rounded px-3 py-2">Word : {wordCount}</div>
    </div>
  );
}
