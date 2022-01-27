export default async function tracksAPI(req, res) {
  try {
    const resp = await fetch(process.env.NEXT_PUBLIC_TRACKS_URL);
    const tracks = await resp.json();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json(null);
  }
}
