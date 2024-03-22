import { author, homepage, description, repository, default as project_pkg } from "~/package.json"
import { writeFileSync, existsSync } from "fs"
import ghProfileFetch from "@/utils/ghProfileFetch"

function jsonGen(filename: string = "xx.json", data: any, dest: string = "./data/") {
  const fsPath = dest + filename + ".json"
  writeFileSync(fsPath, JSON.stringify(data, null, 2))
  console.log("Generated", filename)
  return {
    filename,
    data
  }
}

;(async () => {
  
  jsonGen("project_pkg", {
    author,
    homepage,
    description,
    repository, 
    config: project_pkg["config"] || undefined
  })

  jsonGen("gh_author", {
    person: await ghProfileFetch("andriilive"),
    org: await ghProfileFetch("digitalandyeu"),
  })

  jsonGen("gh_doffcasescz", {
    person: await ghProfileFetch("devdoffcasescz"),
    org: await ghProfileFetch("doffcasescz"),
  })
})()
