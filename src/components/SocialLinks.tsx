
import { Github, UsersRound, Twitter } from "lucide-react";

const SocialLinks = () => {
  const links = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/cat-shoulders",
      label: "GitHub",
    },
    {
      icon: <UsersRound className="w-6 h-6" />,
      href: "https://github.com/orgs/cat-shoulders/people",
      label: "Team",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://x.com/cat_shoulders",
      label: "X",
    },
  ];

  return (
    <>
      <div className="flex gap-6 items-center justify-center fade-in-delay-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 dark:text-gray-400 dark:hover:text-white"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="text-center fade-in-delay-3 mt-4 text-gray-600 text-sm">
      Sound Effect by <a href="https://pixabay.com/users/yoursperfectguy-46268990/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=246012">Abby</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=246012">Pixabay</a>
      </div>
    </>
  );
};

export default SocialLinks;
