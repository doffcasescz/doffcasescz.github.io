import { glob } from "fast-glob"
import { rename, writeFile } from "fs/promises"
import { join } from "path"

async function renameFolders(path: string, oldName: string, newName: string) {
  const folders = await glob(join(path, `**/${oldName}`), { onlyDirectories: true })
  await Promise.all(folders.map((folder) => rename(folder, folder.replace(oldName, newName))))
}

async function assetsIndex() {
    const deviceIndex = await glob("assets/device/*", {deep: 0, onlyDirectories: true})
  const deviceFolderNames = deviceIndex.map((path) => path.split("/").pop())
  console.log("deviceFolderNames", deviceFolderNames)
  // console.log("deviceIndex", deviceIndex)

  let assetIndex = []

  for (const device of deviceFolderNames) {
    const blackAssets = await glob(`assets/device/${device}/black/*`, {onlyFiles: true})
    const beigeAssets = await glob(`assets/device/${device}/beige/*`, {onlyFiles: true})

    assetIndex.push({
        device: device,
        camera: blackAssets.find((path) => path.includes("Camera")),
        black: {
          bg: blackAssets.find((path) => path.includes("BG")),
          frame: blackAssets.find((path) => path.includes("Frame")),
        },
        beige: {
          bg: beigeAssets.find((path) => path.includes("BG")),
          frame: beigeAssets.find((path) => path.includes("Frame")),
        }
      })

    // assetIndex[device] = {
    // camera: blackAssets.find((path) => path.includes("Camera")),
    //   black: {
    //     bg: blackAssets.find((path) => path.includes("BG")),
    //     frame: blackAssets.find((path) => path.includes("Frame")),
    //   },
    //   beige: {
    //     bg: beigeAssets.find((path) => path.includes("BG")),
    //     frame: beigeAssets.find((path) => path.includes("Frame")),
    //   }
    // }
  }

  return assetIndex
}

// await renameFolders("assets/device", "biege", "beige");
// delete Camera.png from beige folder && move Camera.png up to device folder


;(async () => {
    const deviceIndex = await (await assetsIndex()).sort((a, b) => a.device.localeCompare(b.device))
    console.log("deviceIndex", deviceIndex)
    writeFile("assets/device.json", JSON.stringify(deviceIndex, null, 2))
})()
