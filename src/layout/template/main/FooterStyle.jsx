import React from "react";

// Footer data configuration
const footerConfig = {
  brand: {
    name: "VEHICLECHECK PRO",
    description:
      "Professional vehicle inspection software trusted by drivers and fleet managers worldwide.",
    logo: {
      width: 144,
      height: 48,
    },
  },
  navigation: [
    {
      id: "product",
      title: "Product",
      links: [
        {
          id: "features",
          name: "Features",
          href: "/features",
          ariaLabel: "View product features",
        },
        {
          id: "pricing",
          name: "Pricing",
          href: "/pricing",
          ariaLabel: "View pricing plans",
        },
        {
          id: "trial",
          name: "Free Trial",
          href: "/trial",
          ariaLabel: "Start free trial",
        },
      ],
    },
    {
      id: "company",
      title: "Company",
      links: [
        {
          id: "about",
          name: "About Us",
          href: "/about",
          ariaLabel: "Learn about our company",
        },
        {
          id: "careers",
          name: "Careers",
          href: "/careers",
          ariaLabel: "View career opportunities",
        },
        {
          id: "press",
          name: "Press",
          href: "/press",
          ariaLabel: "Press releases and media",
        },
        {
          id: "partners",
          name: "Partners",
          href: "/partners",
          ariaLabel: "Our business partners",
        },
      ],
    },
    {
      id: "support",
      title: "Support",
      links: [
        {
          id: "help",
          name: "Help Center",
          href: "/help",
          ariaLabel: "Get help and support",
        },
        {
          id: "contact",
          name: "Contact Us",
          href: "/contact",
          ariaLabel: "Contact our team",
        },
        {
          id: "privacy",
          name: "Privacy Policy",
          href: "/privacy",
          ariaLabel: "Read privacy policy",
        },
        {
          id: "terms",
          name: "Terms of Service",
          href: "/terms",
          ariaLabel: "Read terms of service",
        },
      ],
    },
  ],
  copyright: {
    year: new Date().getFullYear(),
    company: "VehicleCheck Pro",
    text: "All rights reserved.",
  },
};

// Footer Link Component
const FooterLink = React.memo(({ link, className = "" }) => (
  <a
    href={link.href}
    aria-label={link.ariaLabel}
    className={`focus:ring-opacity-50 inline-flex items-center rounded-sm px-0 py-2.5 text-base font-normal text-white transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-gray-200 focus:ring-2 focus:ring-white focus:outline-none ${className} `}
  >
    {link.name}
  </a>
));

FooterLink.displayName = "FooterLink";

// Footer Column Component
const FooterColumn = React.memo(({ column }) => (
  <nav className="flex flex-col" aria-labelledby={`${column.id}-heading`}>
    <h3
      id={`${column.id}-heading`}
      className="mb-1 py-2.5 text-base font-semibold text-white"
    >
      {column.title}
    </h3>
    <ul className="m-0 list-none space-y-0 p-0">
      {column.links.map((link) => (
        <li key={link.id}>
          <FooterLink link={link} />
        </li>
      ))}
    </ul>
  </nav>
));

FooterColumn.displayName = "FooterColumn";

// Brand Logo Component
const BrandLogo = React.memo(({ brand }) => (
  <div className="flex w-full max-w-sm flex-col items-start justify-center gap-6 md:w-auto">
    <img
      className="h-12 w-36"
      src="./image/Logo.png"
      alt={`${brand.name} logo`}
    />
  </div>
));

BrandLogo.displayName = "BrandLogo";

// Main Footer Component
const FooterStyle = React.memo(() => {
  const { brand, navigation, copyright } = footerConfig;

  return (
    <footer
      className="w-full bg-black"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 py-16 sm:px-8 sm:py-20 lg:px-24 lg:py-24">
        <div className="mx-auto w-full max-w-[1129px]">
          {/* Main Footer Content */}
          <div className="mb-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-32">
            {/* Brand Section */}
            <div className="flex w-full flex-col items-start gap-9 lg:w-72 lg:flex-shrink-0">
              <BrandLogo brand={brand} />
              <p className="text-left text-base leading-7 font-normal text-white">
                {brand.description}
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row sm:gap-12 lg:gap-28">
              {navigation.map((column) => (
                <div key={column.id} className="w-full min-w-[112px] sm:w-auto">
                  <FooterColumn column={column} />
                </div>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-base leading-normal font-normal text-white">
              © {copyright.year} {copyright.company}. {copyright.text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

FooterStyle.displayName = "FooterStyle";

export default FooterStyle;
