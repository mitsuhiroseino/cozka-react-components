import fs from 'fs-extra';
import path from 'path';
import { LOCAL_PACKAGES } from './config';

for (const pkg in LOCAL_PACKAGES) {
  const pkgPath = LOCAL_PACKAGES[pkg];
  if (fs.existsSync(pkgPath)) {
    const modulePath = path.join('node_modules', pkg);
    if (fs.existsSync(modulePath)) {
      fs.removeSync(modulePath);
    }
    fs.ensureDirSync(modulePath);
    fs.copySync(pkgPath, modulePath);
    console.info(`${pkgPath} -> ${modulePath}`);
  }
}

const cachePath = 'node_modules/.cache/storybook';
if (fs.existsSync(cachePath)) {
  fs.removeSync(cachePath);
}
