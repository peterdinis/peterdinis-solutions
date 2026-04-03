const ENCODED = "cGRpbmlzMUBnbWFpbC5jb20=";

export function getContactEmail(): string {
  if (typeof atob === "undefined") return "";
  try {
    return atob(ENCODED);
  } catch {
    return "";
  }
}
