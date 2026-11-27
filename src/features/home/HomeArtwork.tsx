const artworkNames = [
  "hero",
  "problem",
  "handoffs",
  "execution",
  "value",
  "roles",
  "architecture",
  "control",
  "pilot",
  "customers",
  "pricing",
  "next",
] as const;

type HomeArtworkName = (typeof artworkNames)[number];

export function HomeArtwork({ name, alt = "", caption }: { name: HomeArtworkName; alt?: string; caption?: string }) {
  const isHero = name === "hero";
  const src = isHero
    ? "/images/home/editorial/hero-core-agentic-engine.webp"
    : `/images/home/photography/${name}.webp`;

  return (
    <figure className={`home-artwork home-artwork--${name}`} aria-hidden={alt || caption ? undefined : true}>
      <img
        src={src}
        alt={alt}
        width={1320}
        height={880}
        loading={isHero ? "eager" : "lazy"}
        fetchPriority={isHero ? "high" : undefined}
        decoding="async"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
