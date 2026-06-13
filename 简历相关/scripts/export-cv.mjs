/**
 * CV PDF Export
 *
 * Compiles the LaTeX source in ../Botao_Ye_CV.tex to ../Botao_Ye_CV.pdf.
 * The CV is intentionally LaTeX-first so the generated PDF stays close to the
 * original academic / Overleaf-style resume layout.
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdtempSync, copyFileSync, statSync, rmSync } from 'fs';
import { spawnSync } from 'child_process';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cvDir = join(__dirname, '..');
const texFile = join(cvDir, 'Botao_Ye_CV.tex');
const outPdf = join(cvDir, 'Botao_Ye_CV.pdf');

function runXeLaTeX(buildDir) {
  const result = spawnSync(
    'xelatex',
    [
      '-interaction=nonstopmode',
      '-halt-on-error',
      `-output-directory=${buildDir}`,
      texFile,
    ],
    {
      cwd: cvDir,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }
  );

  if (result.status !== 0) {
    const output = `${result.stdout || ''}\n${result.stderr || ''}`.trim();
    throw new Error(`XeLaTeX failed.\n${output}`);
  }
}

function generatePDF() {
  console.log('Generating CV PDF from LaTeX ...');

  if (!existsSync(texFile)) {
    throw new Error(`Missing LaTeX source: ${texFile}`);
  }

  const buildDir = mkdtempSync(join(tmpdir(), 'botao-cv-'));
  const builtPdf = join(buildDir, 'Botao_Ye_CV.pdf');

  try {
    runXeLaTeX(buildDir);

    if (!existsSync(builtPdf)) {
      throw new Error(`XeLaTeX finished but did not create: ${builtPdf}`);
    }

    copyFileSync(builtPdf, outPdf);
    const kb = (statSync(outPdf).size / 1024).toFixed(0);
    console.log(`Done: ${outPdf} (${kb} KB)`);
  } finally {
    rmSync(buildDir, { recursive: true, force: true });
  }
}

try {
  generatePDF();
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
