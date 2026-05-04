#!/usr/bin/env bash
set -euo pipefail

HARNESS_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$HARNESS_DIR"

echo "━━━ Harness v2 Setup ━━━"
echo ""

# Check Node.js
NODE_VERSION=$(node -v 2>/dev/null | sed 's/v//' | cut -d. -f1)
if [ -z "$NODE_VERSION" ] || [ "$NODE_VERSION" -lt 18 ]; then
  echo "✗ Node.js 18+ required. Found: $(node -v 2>/dev/null || echo 'none')"
  exit 1
fi
echo "✓ Node.js $(node -v)"

# Check npm
if ! command -v npm &>/dev/null; then
  echo "✗ npm not found"
  exit 1
fi
echo "✓ npm $(npm -v)"

# Install dependencies
echo ""
echo "Installing dependencies..."
npm install --silent 2>&1 | tail -1
echo "✓ Dependencies installed"

# Build
echo ""
echo "Building..."
npm run build 2>&1 | tail -1
echo "✓ Build complete"

# Check system tools
echo ""
echo "Checking system tools..."
MISSING=()
for tool in pdftotext pdfinfo pdftoppm tesseract libreoffice; do
  if command -v "$tool" &>/dev/null; then
    echo "  ✓ $tool"
  else
    echo "  ○ $tool (optional - missing)"
  fi
done

# Check OpenRouter API key
echo ""
if [ -n "${OPENROUTER_API_KEY:-}" ]; then
  echo "✓ OPENROUTER_API_KEY configured"
else
  echo "○ OPENROUTER_API_KEY not set"
  echo "  To use LLM features: export OPENROUTER_API_KEY=<your-key>"
fi

# Make harness available (postinstall + npm link)
echo ""
echo "Registering 'harness' command..."
npm link --silent 2>/dev/null && echo "✓ Run 'harness --help' from anywhere" || echo "○ Run: npm link"

echo ""
echo "━━━ Setup complete ━━━"
echo ""
echo "Quick start:"
echo "  export OPENROUTER_API_KEY=sk-or-v1-..."
echo "  harness init my-case"
echo "  harness ingest my-case ~/document.pdf"
echo "  harness search my-case \"search terms\""
echo "  harness run my-case"
echo ""
