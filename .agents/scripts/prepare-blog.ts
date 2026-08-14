import Handlebars from "handlebars";
import { constants } from "node:fs";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

function getArgument(name: string): string | undefined {
  const prefix = `--${name}=`;

  return process.argv
    .slice(2)
    .find((argument) => argument.startsWith(prefix))
    ?.slice(prefix.length);
}

const patch = getArgument("patch");
const date = getArgument("date");

if (!patch || !/^\d+$/.test(patch)) {
  throw new Error("Missing or invalid --patch parameter. Example: --patch=123");
}

if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  throw new Error("Missing or invalid --date parameter. Example: --date=2026-08-07");
}

const [year, month, day] = date.split("-");

const outputDirectory = path.join("blog", year);
const outputFilename = `${month}-${day}-version-1_1_${patch}.mdx`;
const outputPath = path.join(outputDirectory, outputFilename);

const templatePath = path.join(".ai", "scripts", "templates", "blog-post.mdx");

const templateSource = await readFile(templatePath, "utf8");
const template = Handlebars.compile(templateSource);

const content = template({
  patch,
});

await mkdir(outputDirectory, { recursive: true });

try {
  await access(outputPath, constants.F_OK);
  throw new Error(`File already exists: ${outputPath}`);
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
    throw error;
  }
}

await writeFile(outputPath, content, "utf8");

console.log(`Created: ${outputPath}`);
