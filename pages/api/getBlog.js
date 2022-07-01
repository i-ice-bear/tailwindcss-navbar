import * as fs from "fs";

export default function getBlogHandler(req, res) {
  console.log(res);
  fs.readFile(`json/${req.query.slug}.json`, "utf-8", (err, data) => {
    console.log(data);
    if (err) {
      res.status(200).json("not-vaildated");
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
}
