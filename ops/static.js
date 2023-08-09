import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

async function copyFiles(source, target) {
	const entries = await fs.readdir(source);

	for (const entry of entries) {
		const sourcePath = path.join(source, entry);
		const targetPath = path.join(target, entry);
		const stat = await fs.stat(sourcePath);

		if (stat.isDirectory()) {
			if (!existsSync(targetPath)) await fs.mkdir(targetPath);
			await copyFiles(sourcePath, targetPath);
		} else if (stat.isFile() && entry.match(/\.(webp|svg)$/i)) {
			await fs.copyFile(sourcePath, targetPath);
		}
	}
}

(async function copyStatic() {
	const source = path.resolve('./storage');
	const target = path.resolve('./static/images');
	await copyFiles(source, target);
})();
