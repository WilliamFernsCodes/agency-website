import { getReplitData } from "lib";
const handler = async (req, res) => {
  if (req.method != "POST") {
    res.status(405).json({ message: "Method Not Allowed. GET Only allowed" });
  }
  const users = req.body;
  const result = await getReplitData(users);
  res.status(200).json(result);
};

export default handler;
