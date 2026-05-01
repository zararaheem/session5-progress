// Vercel serverless function — proxies KV REST API so credentials stay server-side
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const KV_URL   = process.env.KV_REST_API_URL;
  const KV_TOKEN = process.env.KV_REST_API_TOKEN;

  if (!KV_URL || !KV_TOKEN) {
    return res.status(503).json({ error: 'KV not configured' });
  }

  const key = 's5data';

  try {
    if (req.method === 'GET') {
      const r = await fetch(`${KV_URL}/get/${key}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` }
      });
      if (!r.ok) throw new Error(`KV GET ${r.status}`);
      const data = await r.json();
      // KV returns {"result": "stored-string"} or {"result": null}
      return res.json({ value: data.result ?? null });

    } else if (req.method === 'POST') {
      let body = '';
      if (typeof req.body === 'string') {
        body = req.body;
      } else {
        body = JSON.stringify(req.body);
      }
      const { value } = JSON.parse(body);

      // Use the pipeline endpoint to safely SET a string value
      const r = await fetch(`${KV_URL}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([['SET', key, value]])
      });
      if (!r.ok) throw new Error(`KV SET ${r.status}`);
      return res.json({ ok: true });
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
