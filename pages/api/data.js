import path from "path";
const fsp = require("fs").promises;
export default async function tracksAPI(req, res) {
  const file_data = await fsp.readFile(
    path.join(process.cwd(), "public/data/tracks.json")
  );
  const tracks = JSON.parse(file_data);
  res.status(200).json(tracks);
}
