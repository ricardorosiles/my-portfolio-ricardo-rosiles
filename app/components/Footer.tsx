import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.shortName}. Full Stack Developer.</p>
    </footer>
  );
}
