import { LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              <span className="text-gold">CBC</span> Mizzou
            </h3>
            <p className="text-sm leading-relaxed">
              The Claude Builders Club at the University of Missouri. Part of
              Anthropic&apos;s Campus Program empowering students to build with AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.claudeAi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Claude.ai
                </a>
              </li>
              <li>
                <a
                  href={LINKS.apiDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href={LINKS.anthropic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Anthropic
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="transition-colors hover:text-gold"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-gold">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.groupMe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  GroupMe
                </a>
              </li>
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={LINKS.email}
                  className="transition-colors hover:text-gold"
                >
                  cbcmizzou@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={LINKS.joinForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Sign Up Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Claude Builders Club @ Mizzou.
            Powered by{" "}
            <a
              href={LINKS.anthropic}
              target="_blank"
              rel="noopener noreferrer"
              className="text-anthropic-tan transition-colors hover:text-gold"
            >
              Anthropic
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
