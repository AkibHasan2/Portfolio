export function IconMail({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconGitHub({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function IconLinkedIn({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H3.7v11h2.8V9ZM5.1 3.3A1.8 1.8 0 1 0 5.12 6.9 1.8 1.8 0 0 0 5.1 3.3ZM20.3 20h-2.8v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10.8V9h2.7v1.5h.04c.38-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.1V20Z" />
    </svg>
  );
}

export default function SocialIcons({ email, githubUrl, linkedinUrl, className = "" }) {
  const item = "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted hover:bg-surface2 hover:text-paper";
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {email && (
        <a href={`mailto:${email}`} className={item} aria-label="Email">
          <IconMail />
        </a>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noreferrer" className={item} aria-label="GitHub">
          <IconGitHub />
        </a>
      )}
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noreferrer" className={item} aria-label="LinkedIn">
          <IconLinkedIn />
        </a>
      )}
    </div>
  );
}
