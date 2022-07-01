import * as fs from "fs";

export default async function blogextractor(req, res) {
  let data = await fs.promises.readdir("json");
  let allBlogs = [];
  let myfiles;
  for (let index = 0; index < data.length; index++) {
    const items = data[index];
    myfiles = await fs.promises.readFile(("json/" + items),'utf-8');
    allBlogs.push(JSON.parse(myfiles));
  }
  res.status(300).json(allBlogs);
}
