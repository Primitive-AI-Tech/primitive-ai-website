export function ChapterIcon({ name }: { name: string }) {
  return (
    <span className="chapter-icon" aria-hidden="true">
      <img
        src={`/images/home/v5/icons/${name}.png`}
        width={24}
        height={24}
        loading="lazy"
        decoding="async"
        alt=""
      />
    </span>
  );
}
