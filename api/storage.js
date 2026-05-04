// Vercel serverless function — proxies Upstash Redis REST API server-side.
// Accepts either Vercel KV env vars (KV_REST_API_*) or Upstash direct env vars
// (UPSTASH_REDIS_REST_*) — whichever is present.
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const KV_URL   = process.env.KV_REST_API_URL   || process.env.UPSTASH_REDIS_REST_URL;
  const KV_TOKEN = process.env.KV_REST_API_TOKEN  || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!KV_URL || !KV_TOKEN) {
    return res.status(503).json({ error: 'KV not configured', fallback: true });
  }

  const key = 's5data';

  try {
    if (req.method === 'GET') {
      const r = await fetch(`${KV_URL}/get/${key}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` }
      });
      if (!r.ok) throw new Error(`KV GET ${r.status}`);
      const data = await r.json();
      return res.json({ value: data.result ?? null });

    } else if (req.method === 'POST') {
      const value = req.body && req.body.value;
      if (value === undefined) return res.status(400).json({ error: 'No value' });

      const r = await fetch(`${KV_URL}/set/${key}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });
      if (!r.ok) throw new Error(`KV SET ${r.status}`);
      return res.json({ ok: true });
    }
  } catch (e) {
    console.error('storage handler error:', e);
    return res.status(500).json({ error: e.message });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
