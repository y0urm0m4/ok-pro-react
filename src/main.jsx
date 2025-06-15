import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import barba from '@barba/core';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


barba.init({
    transitions: [
        {
            name: "fade",
            leave({ current }) {
                const done = this.async();
                gsap.to(current.container, { opacity: 0, duration: 0.4, onComplete: done });
            },
            enter({ next }) {
                gsap.from(next.container, { opacity: 0, duration: 0.4 });
            },
        },
    ],
});
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,CustomEase, ScrollToPlugin);
ScrollSmoother.create({
    smooth: 1,
    effects: true,
});
