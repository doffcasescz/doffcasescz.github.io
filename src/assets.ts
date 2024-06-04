
import {glob} from "fast-glob";
import {rename} from "fs/promises";
import {join} from "path";

async function renameFolders(path: string, oldName: string, newName: string) {
    const folders = await glob(join(path, `**/${oldName}`), {onlyDirectories: true});
    await Promise.all(folders.map(folder => rename(folder, folder.replace(oldName, newName))));
}

// await renameFolders("assets/device", "biege", "beige");

(async () => {
    
    // rest of your code...
})()