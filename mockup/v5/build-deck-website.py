"""Assemble the V5 product preview from its layout and authored chapters."""
from pathlib import Path

PACKAGE = Path(__file__).resolve().parent
FRAGMENTS = {
    "<!-- PRODUCT SCENARIOS -->": "products-sections.html",
    "<!-- PRODUCT TECHNICAL DETAILS -->": "products-technical.html",
}


def build() -> None:
    page = (PACKAGE / "products-layout.html").read_text(encoding="utf-8")
    for marker, filename in FRAGMENTS.items():
        if page.count(marker) != 1:
            raise ValueError(f"Expected one fragment marker: {marker}")
        fragment = (PACKAGE / filename).read_text(encoding="utf-8").rstrip()
        page = page.replace(marker, fragment)

    output = PACKAGE / "products.html"
    if not output.exists() or output.read_text(encoding="utf-8") != page:
        output.write_text(page, encoding="utf-8")


if __name__ == "__main__":
    build()
