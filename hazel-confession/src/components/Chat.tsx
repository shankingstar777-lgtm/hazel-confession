import React, { useEffect, useState } from 'react';

type Message = { who: 'You' | 'Me'; text: string; time: number };

const STORAGE_KEY = 'hazel_confession_chat_messages_v1';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  function send(as: Message['who']) {
    const t = text.trim();
    if (!t) return;
    const m: Message = { who: as, text: t, time: Date.now() };
    setMessages(prev => [...prev, m]);
    setText('');
  }

  function clearAll() {
    setMessages([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  return (
    <div style={{marginTop: 20, width: '100%', maxWidth: 720}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3 style={{margin: 0}}>Private Chat (You ↔ Me)</h3>
        <button onClick={clearAll} style={{fontSize: 12}}>Clear</button>
      </div>
      <div style={{border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 12, marginTop: 8, maxHeight: 240, overflow: 'auto', background: 'rgba(0,0,0,0.25)'}}>
        {messages.length === 0 && <div style={{opacity: 0.8}}>No messages yet. Type below and press Enter or click send.</div>}
        {messages.map((m, i) => (
          <div key={i} style={{marginTop: 8}}>
            <div style={{fontSize: 12, opacity: 0.8}}>{m.who} • {new Date(m.time).toLocaleTimeString()}</div>
            <div style={{padding: '6px 8px', background: 'rgba(255,255,255,0.06)', borderRadius: 6, marginTop: 4}}>{m.text}</div>
          </div>
        ))}
      </div>

      <div style={{display: 'flex', gap: 8, marginTop: 8}}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') send('You'); }}
          placeholder="Type a message..."
          style={{flex: 1, padding: '8px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)'}}
        />
        <button onClick={() => send('You')} style={{padding: '8px 12px'}}>Send (You)</button>
        <button onClick={() => { if (text.trim()) { setMessages(prev => [...prev, { who: 'Me', text: text.trim(), time: Date.now() }]); setText(''); } }} style={{padding: '8px 12px'}}>Send (Me)</button>
      </div>
    </div>
  );
}
