import "../CSS_CODE/FooterCSS.css";
import {
  Plane,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  BadgeCheck,
  Lock,
} from "lucide-react";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
    <path d="M13.5 22v-8.4h2.8l.42-3.26h-3.22V8.24c0-.94.26-1.58 1.6-1.58h1.72V3.74C16.5 3.68 15.53 3.6 14.4 3.6c-2.36 0-3.98 1.44-3.98 4.08v2.28H7.6v3.26h2.82V22h3.08Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
    <path d="M22 5.9c-.7.32-1.46.53-2.25.63a3.9 3.9 0 0 0 1.72-2.16c-.76.45-1.6.78-2.5.96A3.88 3.88 0 0 0 12.1 8.6c0 .3.03.6.1.88-3.23-.16-6.1-1.71-8.02-4.07-.33.58-.53 1.25-.53 1.96 0 1.36.69 2.55 1.75 3.25-.64-.02-1.25-.2-1.78-.49v.05c0 1.9 1.35 3.48 3.14 3.84-.33.09-.68.14-1.03.14-.25 0-.5-.02-.74-.07.5 1.56 1.94 2.7 3.66 2.73A7.8 7.8 0 0 1 2 18.4a11 11 0 0 0 5.97 1.75c7.16 0 11.08-5.94 11.08-11.08 0-.17 0-.34-.01-.5.76-.55 1.42-1.23 1.96-2.02Z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
    <path d="M21.6 7.6a2.75 2.75 0 0 0-1.94-1.95C18 5.2 12 5.2 12 5.2s-6 0-7.66.45A2.75 2.75 0 0 0 2.4 7.6 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .4 4.4 2.75 2.75 0 0 0 1.94 1.95C6 18.8 12 18.8 12 18.8s6 0 7.66-.45a2.75 2.75 0 0 0 1.94-1.95c.27-1.45.4-2.93.4-4.4a28.7 28.7 0 0 0-.4-4.4ZM10 15.02V8.98L15.27 12 10 15.02Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.42 0 4.27 2.25 4.27 5.17V20Z" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkColumns = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press & Media", "Investor Relations", "Blog"],
    },
    {
      title: "Explore",
      links: ["Flights", "Hotels", "Trains", "Villas & Homestays", "Holiday Packages", "Cabs"],
    },
    {
      title: "Popular Destinations",
      links: ["Goa", "Manali", "Kerala", "Dubai", "Bali", "Singapore"],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Contact Us",
        "Cancellation Policy",
        "Refund Policy",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Partner With Us",
      links: ["List Your Property", "Travel Agent Program", "Affiliate Program", "Corporate Travel"],
    },
  ];

  return (
    <footer className="ys-footer">
      {/* ---------- Newsletter Strip ---------- */}
      <div className="ys-newsletter">
        <div className="ys-footer-container ys-newsletter-inner">
          <div>
            <h3>Get exclusive deals in your inbox</h3>
            <p>Fare drops, festive offers &amp; travel tips — no spam, unsubscribe anytime.</p>
          </div>
          <form
            className="ys-newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed! (Wire this up to your backend/newsletter API.)");
            }}
          >
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* ---------- Main Footer Grid ---------- */}
      <div className="ys-footer-container ys-footer-main">
        <div className="ys-brand-col">
          <div className="ys-logo">
            <span className="ys-logo-icon">
              <Plane size={20} strokeWidth={2.2} />
            </span>
            Yatra<span>Setu</span>
          </div>
          <p className="ys-brand-desc">
            India&apos;s trusted travel companion for flights, hotels, trains, villas &amp;
            holiday packages — booked simply, backed by 24x7 support.
          </p>

          <div className="ys-contact-list">
            <div><MapPin size={15} /> Cyber Hub, Gurugram, Haryana, India</div>
            <div><Phone size={15} /> +91 124 456 7890 (24x7)</div>
            <div><Mail size={15} /> support@yatrasetu.com</div>
          </div>

          <div className="ys-social-row">
            <a href="#!" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#!" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#!" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#!" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="#!" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        {linkColumns.map((col) => (
          <div className="ys-link-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#!" onClick={(e) => e.preventDefault()}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ---------- App Download + Trust Badges ---------- */}
      <div className="ys-footer-container ys-mid-strip">
        <div className="ys-app-block">
          <h4>Get the YatraSetu App</h4>
          <p>Book on the go &amp; manage trips from your phone</p>
          <div className="ys-app-buttons">
            <button className="ys-store-btn">
              <span className="store-icon">▶</span>
              <span>
                <small>GET IT ON</small>
                Google Play
              </span>
            </button>
            <button className="ys-store-btn">
              <span className="store-icon"></span>
              <span>
                <small>Download on the</small>
                App Store
              </span>
            </button>
          </div>
        </div>

        <div className="ys-trust-block">
          <div className="trust-item">
            <ShieldCheck size={20} />
            <span>Secure Payments</span>
          </div>
          <div className="trust-item">
            <BadgeCheck size={20} />
            <span>Verified Listings</span>
          </div>
          <div className="trust-item">
            <Lock size={20} />
            <span>256-bit SSL Encrypted</span>
          </div>
        </div>
      </div>

      {/* ---------- Bottom Bar ---------- */}
      <div className="ys-footer-bottom">
        <div className="ys-footer-container ys-bottom-inner">
          <p>© {currentYear} YatraSetu. All rights reserved.</p>
          <div className="ys-bottom-links">
            <a href="#!" onClick={(e) => e.preventDefault()}>Sitemap</a>
            <span>·</span>
            <a href="#!" onClick={(e) => e.preventDefault()}>Cookie Policy</a>
            <span>·</span>
            <a href="#!" onClick={(e) => e.preventDefault()}>Accessibility</a>
          </div>
          <p className="ys-made-note">Built for learning &amp; portfolio purposes.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;