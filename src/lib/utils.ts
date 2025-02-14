// Utility function to join class names (if not defined correctly before)
export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}