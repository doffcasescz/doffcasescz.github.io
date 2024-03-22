import {author, homepage, description, repository, default as project_pkg} from "~/package.json"
import { writeFileSync } from "fs"
import ghProfileFetch from "@/utils/ghProfileFetch"

function jsonGen(
    filename: string = "xx.json",
    data: any,
    dest: string = "./data/"
  ) { 
    writeFileSync(dest + filename + ".json", JSON.stringify(data, null, 2))
    console.log("Generated", filename)
    return {
      filename,
      data
    }
  }

(async () => {
    jsonGen("project_pkg", {author, homepage, description, repository, config: project_pkg["config"] || undefined});
    jsonGen("gh_andriilive", await ghProfileFetch("andriilive"));
    jsonGen("gh_doffcasescz", await ghProfileFetch("doffcasescz"));
})()