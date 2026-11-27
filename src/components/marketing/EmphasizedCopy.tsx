import { useCopy } from "@/i18n/useCopy";

export function EmphasizedCopy({ message, fallback }: { message: string; fallback: string }) {
  const t = useCopy();
  const parts = t(message, fallback).split(/<em>(.*?)<\/em>/g);
  return <>{parts.map((part, index) => index % 2 ? <em key={index}>{part}</em> : part)}</>;
}
