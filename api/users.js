export default function handler(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://event-manager-f4x7p1zv2-guranda26s-projects.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST", "DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "GET" || req.method === "POST") {
    res.status(200).json({ users: [] });
  }
}
