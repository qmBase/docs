import fs from "fs/promises";
import { runPrompt } from "../lib/runPrompt"; // your LLM wrapper

interface IProps {
  version: string;
}

export async function generateReleaseNotes({ version }: IProps) {
  // 1. Normalize persona
  // const personaContext = buildPersonaContext(persona);
  const changeContext = await fs.readFile("./blog/current/pending-changes.md", "utf-8");

  // 2. Load prompt template
  const template = await fs.readFile("./.ai/prompts/release-notes-writer.prompt.md", "utf-8");

  // TODO: Switch to handlebars eventually, but for now simple replace is fine since we control the template
  // 3. Inject variables
  const prompt = template.replace("{{changeContext}}", changeContext);

  console.log("Generated Prompt:", prompt);
  // 4. Run LLM
  const result = await runPrompt(prompt);

  // ./blog/{year}/{month}/{month}-{day}-version-{version}.md
  const outputPath = `./blog/${new Date().getFullYear()}/${String(new Date().getMonth() + 1).padStart(2, "0")}/${String(new Date().getDate()).padStart(2, "0")}-version-${version}.md`;

  // 5. Save content (IMPORTANT: never skip this step)
  await fs.writeFile(outputPath, result);

  return result;
}
