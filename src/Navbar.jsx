import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function StickyNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    // GSAP animation
    useEffect(() => {
        const el = dropdownRef.current;
        if (!el) return;

        // Stop any ongoing tweens to prevent conflicts
        gsap.killTweensOf(el);

        if (isOpen) {
            // Make sure element is visible before animating
            el.style.display = "flex";
            gsap.fromTo(
                el,
                { height: 0, opacity: 0 },
                {
                    height: el.scrollHeight,
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.inOut",
                }
            );
        } else {
            gsap.to(el, {
                height: 0,
                opacity: 0,
                duration: 0.35,
                ease: "power2.inOut",
                onComplete: () => {
                    el.style.display = "none";
                },
            });
        }
    }, [isOpen]);

    return (
        <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm" id="navbar">
            {/* Navbar container */}
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                {/* Brand / Logo placeholder */}
                <a href="#home" className="text-xl font-semibold tracking-wide">
                    Logo
                </a>

                {/* Burger button */}
                <button
                    aria-label="Toggle navigation"
                    className="rounded p-2 transition-all hover:scale-110 md:p-3"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* Dropdown menu */}
            <ul
                ref={dropdownRef}
                style={{ display: "none" }}
                className="flex w-full flex-col gap-4 py-4 md:gap-6 md:py-6"
            >
                {navItems.map(({ label, href }) => (
                    <li key={href} className="text-center">
                        <a
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-medium transition-colors hover:text-indigo-600"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

<div className="div"></div>

