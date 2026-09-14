const links = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M15.5 8.5H13.5V7C13.5 6.44772 13.9477 6 14.5 6H15.5V3.5H13.5C11.567 3.5 10 5.067 10 7V8.5H8.5V11H10V20.5H13.5V11H15.2L15.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function SocialIcons({ className = "" }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-primary"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
