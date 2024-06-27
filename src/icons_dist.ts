import { copyFile } from "fs/promises"
import { join } from "path"

async function copyAssets() {
  const paths = [
    "iphone_11",
    "iphone_11pro",
    "iphone_11pro_max",
    "iphone_12",
    "iphone_12mini",
    "iphone_12pro",
    "iphone_12pro_max",
    "iphone_13",
    "iphone_13mini",
    "iphone_13pro",
    "iphone_13pro_max",
    "iphone_14",
    "iphone_14plus",
    "iphone_14pro",
    "iphone_14pro_max",
    "iphone_15",
    "iphone_15plus",
    "iphone_15pro",
    "iphone_15pro_max",
    "iphone_se_2022",
    "samsung_S21",
    "samsung_S21ultra",
    "samsung_S22",
    "samsung_S22ultra",
    "samsung_S23",
    "samsung_S23ultra",
    "xiaomi_12",
    "xiaomi_12pro",
    "xiaomi_13",
    "xiaomi_13pro"
  ]

  for (const path of paths) {
    const devices = ["beige", "black"]
    for (const device of devices) {
      const files = ["BG.svg", "Frame.png", "Camera.png"]
      for (const file of files) {
        const src = join("assets", "device", path, device, file)
        const dest = join("dist", `${path}_${file.replace("BG", "bg").replace(".", `__${device}.`).toLowerCase()}`)
        try {
          await copyFile(src, dest)
          console.log(`Copied ${src} to ${dest}`)
        } catch (err) {
          console.error(`Failed to copy ${src} to ${dest}: ${err}`)
        }
      }
    }
  }
}

copyAssets()
