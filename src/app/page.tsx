"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";

/* ────────────────────────────────────────────────────────── */
/* SVG Icon helpers                                          */
/* ────────────────────────────────────────────────────────── */
const IconSearch = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const IconSun = () => (
  <svg className="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const IconMoon = () => (
  <svg className="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const IconArrowUpRight = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const IconCode = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z" />
  </svg>
);
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconGlobe = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 10-16 0" />
  </svg>
);
const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconGitHubLarge = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const IconChevronsUpDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="7 15 12 20 17 15" /><polyline points="7 9 12 4 17 9" />
  </svg>
);
const IconChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const IconBox = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconYouTube = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);
const IconInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const IconChat = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconSend = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const IconUsers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ────────────────────────────────────────────────────────── */
/* Metadata definitions                                      */
/* ────────────────────────────────────────────────────────── */
const metaRows: {
  icon: React.ReactNode;
  content: React.ReactNode;
}[] = [
  {
    icon: <IconCode />,
    content: (
      <>
        <span className="text-xs text-[var(--fg-secondary)] whitespace-nowrap">Media Designer</span>
        <span className="meta-row__divider" />
        <strong className="text-xs font-semibold text-[var(--fg)]">@GDG New Delhi</strong>
        <span className="flex-1" />
        <span className="meta-row__tag flex items-center gap-1.5"><span className="w-[6px] h-[6px] rounded-full bg-[#22c55e] inline-block" />Active</span>
      </>
    ),
  },
  {
    icon: <IconPin />,
    content: (
      <>
        <span className="text-xs text-[var(--fg-secondary)]">Surat, India</span>
        <span className="meta-row__divider" />
        <span className="font-mono text-[10px] text-[var(--fg-muted)]">IST UTC+5:30</span>
      </>
    ),
  },
  {
    icon: <IconMail />,
    content: (
      <a href="mailto:cinemawalaladka21@gmail.com" className="meta-row__link">
        cinemawalaladka21@gmail.com
      </a>
    ),
  },
  {
    icon: <IconGlobe />,
    content: (
      <>
        <a href="https://signalist.vercel.app" target="_blank" rel="noopener noreferrer" className="meta-row__link">
          signalist.vercel.app
        </a>
        <span className="meta-row__divider" />
        <span className="font-mono text-[10px] text-[var(--fg-muted)]">↗ External</span>
      </>
    ),
  },
  {
    icon: <span className="text-[14px] leading-none">🎭</span>,
    content: (
      <span className="text-xs text-[var(--fg-secondary)] italic">the artist is the glitch of the matrix</span>
    ),
  },
];

/* ────────────────────────────────────────────────────────── */
/* Stack data                                                */
/* ────────────────────────────────────────────────────────── */
type StackItem = { name: string; img: string; categories: string[] };
const STACK_DATA: StackItem[] = [
  { name: "C",            img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855269/portfolio/stack/C.webp",           categories: ["Language"] },
  { name: "C++",          img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855276/portfolio/stack/CPP.png",          categories: ["Language"] },
  { name: "Python",       img: "",                        categories: ["Language"] },
  { name: "HTML",         img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855284/portfolio/stack/HTML.webp",        categories: ["Language", "Frontend"] },
  { name: "CSS",          img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855277/portfolio/stack/CSS.png",          categories: ["Language", "Frontend"] },
  { name: "Tailwind CSS", img: "/stack/TailwindCSS.webp", categories: ["Frontend"] },
  { name: "GitHub",       img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855283/portfolio/stack/GitHub.png",       categories: ["Tools"] },
  { name: "Git",          img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855282/portfolio/stack/Git.png",          categories: ["Tools"] },
  { name: "Photoshop",    img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855285/portfolio/stack/Photoshop.png",    categories: ["Visual Design"] },
  { name: "Affinity",     img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855265/portfolio/stack/Affinity.png",     categories: ["Visual Design"] },
  { name: "Canva",        img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855271/portfolio/stack/Canva.png",        categories: ["Visual Design"] },
  { name: "Figma",        img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855279/portfolio/stack/Figma.png",        categories: ["Visual Design"] },
  { name: "Vercel",       img: "/stack/Vercel.png",       categories: ["Deployment"] },
  { name: "VS Code",      img: "/stack/VSCode.png",       categories: ["Code Editor"] },
  { name: "Antigravity",  img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855267/portfolio/stack/Antigravity.png",  categories: ["Code Editor"] },
  { name: "ChatGPT",      img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855273/portfolio/stack/ChatGPT.png",      categories: ["AI"] },
  { name: "Gemini",       img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855280/portfolio/stack/Gemini.png",       categories: ["AI"] },
  { name: "Claude",       img: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855274/portfolio/stack/Claude.png",       categories: ["AI"] },
];
const STACK_FILTERS = ["ALL", "Language", "Frontend", "Tools", "Visual Design", "Deployment", "Code Editor", "AI"];

/* ────────────────────────────────────────────────────────── */
/* GitHub Contributions types                                */
/* ────────────────────────────────────────────────────────── */
type ContributionDay = { date: string; contributionCount: number; contributionLevel: string };
type ContributionWeek = { contributionDays: ContributionDay[] };

/* ────────────────────────────────────────────────────────── */
/* Experience Component                                      */
/* ────────────────────────────────────────────────────────── */
const ExperienceItem = ({ item }: { item: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div data-search={`${item.company} - ${item.role}`} data-search-group="Experience" className="flex flex-col mb-4 relative">
      <div className="flex items-center gap-4 py-2">
        <div className="w-[15px] flex justify-center shrink-0 max-md:hidden">
          <div className={`w-[5px] h-[5px] rounded-full ${item.active ? 'bg-[var(--badge-blue)] ring-2 ring-[rgba(59,130,246,0.25)]' : 'bg-[var(--edge-strong)] border-[0.5px] border-[var(--bg)]'}`} />
        </div>
        <span className="text-[13.5px] font-semibold text-[var(--fg)] tracking-tight">{item.company}</span>
      </div>
      <div 
        onClick={() => setExpanded(!expanded)} 
        className="flex flex-col px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--edge)] rounded-[10px] ml-[31px] max-md:ml-0 cursor-pointer hover:border-[var(--fg-muted)] transition-colors group shadow-sm"
      >
        <div className="flex items-center gap-3 w-full">
          <div className="w-[26px] h-[26px] rounded-[6px] bg-[var(--bg-inset)] border border-[var(--edge-subtle)] flex items-center justify-center text-[var(--fg-secondary)] shrink-0 group-hover:text-[var(--fg)] group-hover:border-[var(--edge-strong)] transition-colors shadow-sm">
            {item.icon}
          </div>
          <div className="flex flex-col min-w-0 pr-4">
            <span className="text-[13px] font-medium text-[var(--fg)] truncate">{item.role}</span>
            <div className="flex items-center gap-2 font-mono text-[9px] text-[var(--fg-muted)] mt-0.5">
              <span className="text-[var(--fg-tertiary)]">{item.type}</span>
              <span className="w-[1px] h-[8px] bg-[var(--edge-strong)] opacity-50" />
              <span>{item.duration}</span>
              {item.location && (
                <>
                  <span className="w-[1px] h-[8px] bg-[var(--edge-strong)] opacity-50" />
                  <span>{item.location}</span>
                </>
              )}
            </div>
          </div>
          <div className={`ml-auto text-[var(--fg-tertiary)] shrink-0 group-hover:text-[var(--fg)] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
             <IconChevronDown />
          </div>
        </div>
        
        <div className={`grid transition-all duration-300 ease-out overflow-hidden ${expanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="min-h-0 flex flex-col gap-4 pl-[38px] pb-1">
            <div className="text-[12px] md:text-[13px] text-[var(--fg-secondary)] leading-relaxed font-sans mt-1">
              {item.description}
            </div>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill: string) => (
                <span key={skill} className="meta-row__tag rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────── */
/* Project Component                                         */
/* ────────────────────────────────────────────────────────── */
const ProjectItem = ({ item }: { item: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div data-search={item.title} data-search-group="Projects" className="flex flex-col border-b border-[var(--edge)] group cursor-pointer" onClick={() => setExpanded(!expanded)}>
      <div className="flex items-center px-4 py-[18px] hover:bg-[var(--bg-inset)] transition-colors">
        <div className="w-[32px] h-[32px] rounded-[6px] bg-[var(--bg-elevated)] border border-[var(--edge-subtle)] flex items-center justify-center text-[var(--fg-secondary)] shrink-0 group-hover:text-[var(--fg)] transition-colors shadow-sm mr-5">
           <IconBox />
        </div>
        <div className="flex flex-col min-w-0 pr-4">
          <span className="text-[14px] font-semibold text-[var(--fg)] tracking-tight truncate">{item.title}</span>
          <div className="mt-[2px]">{item.dateNode}</div>
        </div>
        <div className="ml-auto flex items-center gap-4 text-[var(--fg-tertiary)] shrink-0 group-hover:text-[var(--fg)] transition-colors">
           {item.link ? (
             <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors opacity-70 hover:opacity-100" onClick={(e) => e.stopPropagation()}>
               <IconLink />
             </a>
           ) : (
             <span className="opacity-30 cursor-not-allowed"><IconLink /></span>
           )}
           <span className={`opacity-70 group-hover:opacity-100 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
             <IconChevronsUpDown />
           </span>
        </div>
      </div>
      
      {/* Expanded Content */}
      <div className={`grid transition-all duration-300 ease-out overflow-hidden ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} onClick={(e) => e.stopPropagation()}>
        <div className="min-h-0 flex flex-col gap-5 px-4 pb-6 pl-[69px] max-md:pl-4">
          {(item.description || item.features || item.technicalHighlights) ? (
            <>
              {item.description && (
                <p className="text-[13px] text-[var(--fg-secondary)] pt-1 leading-relaxed font-sans cursor-text">
                  {item.description}
                </p>
              )}
              {item.features && item.features.length > 0 && (
                <div className="flex flex-col gap-2 cursor-text">
                  <span className="text-[12px] font-semibold text-[var(--fg)]">Key Features</span>
                  <ul className="text-[13px] text-[var(--fg-secondary)] flex flex-col gap-1.5 list-disc pl-4">
                    {item.features.map((f: any, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.technicalHighlights && item.technicalHighlights.length > 0 && (
                <div className="flex flex-col gap-2 cursor-text">
                  <span className="text-[12px] font-semibold text-[var(--fg)]">Technical Highlights</span>
                  <ul className="text-[13px] text-[var(--fg-secondary)] flex flex-col gap-1.5 list-disc pl-4">
                    {item.technicalHighlights.map((h: string, i: number) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tags.map((tag: string) => (
                    <span key={tag} className="meta-row__tag rounded-full cursor-text">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </>
          ) : (
             <p className="text-[13px] text-[var(--fg-secondary)] pt-1 italic cursor-text">Details coming soon...</p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────── */
/* Education Component                                       */
/* ────────────────────────────────────────────────────────── */
const EducationItem = ({ item }: { item: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div data-search={item.institution} data-search-group="Education" className="flex flex-col mb-4 relative">
      <div className="flex items-center gap-4 py-2">
        <div className="w-[15px] flex justify-center shrink-0 max-md:hidden">
          <div className="w-[5px] h-[5px] rounded-full bg-[var(--edge-strong)] border-[0.5px] border-[var(--bg)]" />
        </div>
        <span className="text-[13.5px] font-semibold text-[var(--fg)] tracking-tight">{item.institution}</span>
      </div>
      <div 
        onClick={() => setExpanded(!expanded)} 
        className="flex flex-col px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--edge)] rounded-[10px] ml-[31px] max-md:ml-0 cursor-pointer hover:border-[var(--fg-muted)] transition-colors group shadow-sm"
      >
        <div className="flex items-center gap-3 w-full">
          <div className="w-[26px] h-[26px] rounded-[6px] bg-[var(--bg-inset)] border border-[var(--edge-subtle)] flex items-center justify-center text-[var(--fg-secondary)] shrink-0 group-hover:text-[var(--fg)] group-hover:border-[var(--edge-strong)] transition-colors shadow-sm">
            {item.icon}
          </div>
          <div className="flex flex-col min-w-0 pr-4">
            <span className="text-[13px] font-medium text-[var(--fg)] truncate">{item.level}</span>
            <div className="flex items-center gap-2 font-mono text-[9px] text-[var(--fg-muted)] mt-0.5">
              <span className="text-[var(--fg-tertiary)] truncate">{item.stream}</span>
              <span className="w-[1px] h-[8px] bg-[var(--edge-strong)] opacity-50 shrink-0" />
              <span className="whitespace-nowrap">{item.duration}</span>
            </div>
          </div>
          <div className={`ml-auto text-[var(--fg-tertiary)] shrink-0 group-hover:text-[var(--fg)] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
             <IconChevronDown />
          </div>
        </div>
        
        <div className={`grid transition-all duration-300 ease-out overflow-hidden ${expanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`} onClick={(e) => e.stopPropagation()}>
          <div className="min-h-0 flex flex-col gap-3 pl-[38px] pb-1 cursor-text">
            {item.grade && (
              <div className="text-[12px] md:text-[13px] text-[var(--fg)] font-medium">
                {item.grade}
              </div>
            )}
            {item.activities && (
              <div className="text-[12px] md:text-[13px] text-[var(--fg-secondary)] font-sans leading-relaxed">
                <span className="text-[var(--fg)] font-medium">Activities and societies:</span> {item.activities}
              </div>
            )}
            <div className="text-[12px] md:text-[13px] text-[var(--fg-secondary)] leading-relaxed font-sans">
              {item.description}
            </div>
            {item.skills && item.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.skills.map((skill: string) => (
                  <span key={skill} className="meta-row__tag rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────── */
/* Certification Component                                   */
/* ────────────────────────────────────────────────────────── */
const CertificationItem = ({ item }: { item: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div data-search={item.title} data-search-group="Certifications" className="flex flex-col bg-transparent border border-[var(--edge)] rounded-[10px] hover:bg-[var(--bg-inset)] transition-colors hover:border-[var(--fg-muted)] group cursor-pointer" onClick={() => setExpanded(!expanded)}>
       <div className="flex items-start gap-4 p-4">
          <div className="w-[36px] h-[36px] rounded-[8px] bg-[var(--bg-elevated)] border border-[var(--edge-subtle)] flex items-center justify-center text-[var(--fg-secondary)] shrink-0 font-mono text-[10px] uppercase shadow-sm group-hover:text-[var(--fg)] group-hover:border-[var(--edge-strong)] transition-colors">
            {item.issuer.slice(0, 3)}
          </div>
          <div className="flex flex-col min-w-0 pt-0.5">
             <span className="text-[13px] font-semibold text-[var(--fg)] mb-[2px] truncate group-hover:underline underline-offset-2 decoration-[var(--edge-strong)]">{item.title}</span>
             <span className="font-mono text-[10px] text-[var(--fg-secondary)]">{item.issuer}</span>
          </div>
          <div className="ml-auto flex items-center gap-3 shrink-0 group-hover:text-[var(--fg)] transition-colors">
            <span className="font-mono text-[9px] text-[var(--fg-muted)] pt-1">{item.date}</span>
            <span className={`text-[var(--fg-tertiary)] opacity-70 group-hover:opacity-100 transition-transform duration-300 pt-0.5 ${expanded ? 'rotate-180' : ''}`}>
              <IconChevronDown />
            </span>
          </div>
       </div>

       {/* Expanded Content */}
       <div className={`grid transition-all duration-300 ease-out overflow-hidden ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} onClick={(e) => e.stopPropagation()}>
         <div className="min-h-0 flex flex-col md:flex-row gap-5 p-4 pt-0 border-t border-transparent group-hover:border-[var(--edge-subtle)] transition-colors">
           {/* Left side: Image */}
           <div className="md:w-[45%] shrink-0 flex items-center justify-center">
             {item.image ? (
               <img src={item.image} alt={item.title} className="w-full h-auto aspect-[4/3] object-cover border border-[var(--edge)] rounded-[6px] shadow-sm hover:border-[var(--fg-muted)] transition-colors" />
             ) : (
               <div className="w-full aspect-[4/3] bg-[var(--bg-elevated)] border border-[var(--edge)] rounded-[6px] flex flex-col items-center justify-center shadow-sm overflow-hidden text-[var(--fg-tertiary)] hover:border-[var(--fg-muted)] transition-colors cursor-crosshair">
                 <IconBox />
                 <span className="font-mono text-[9px] text-[var(--fg-muted)] mt-2 uppercase tracking-wide">Image Preview</span>
               </div>
             )}
           </div>
           
           {/* Right side: Details */}
           <div className="flex-1 flex flex-col gap-4 text-[13px] py-1 cursor-text">
             <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 items-baseline">
               <span className="text-[var(--fg-muted)] font-mono text-[10px] uppercase tracking-wide">Issuer</span>
               <span className="text-[var(--fg-secondary)] font-medium">{item.issuer}</span>
               
               <span className="text-[var(--fg-muted)] font-mono text-[10px] uppercase tracking-wide">Issued</span>
               <span className="text-[var(--fg-secondary)] font-medium">{item.date}</span>
               
               {item.id && (
                 <>
                   <span className="text-[var(--fg-muted)] font-mono text-[10px] uppercase tracking-wide">ID</span>
                   <span className="text-[var(--fg-secondary)] font-mono text-[11px] break-all">{item.id}</span>
                 </>
               )}
             </div>

             {item.skills && item.skills.length > 0 && (
               <div className="flex flex-col gap-2 mt-auto pt-2">
                 <span className="text-[12px] font-semibold text-[var(--fg)]">Skills</span>
                 <div className="flex flex-wrap gap-2">
                   {item.skills.map((skill: string) => (
                     <span key={skill} className="meta-row__tag rounded-full">
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
             )}
           </div>
         </div>
       </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────── */
/* Ordinal Suffix Helper                                     */
/* ────────────────────────────────────────────────────────── */
function getOrdinalSuffix(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

/* ────────────────────────────────────────────────────────── */
/* HOME                                                      */
/* ────────────────────────────────────────────────────────── */
const TITLES = [
  "Frontend Developer",
  "UI/UX Designer",
  "Tech Community"
];

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(true);
  const [titleIndex, setTitleIndex] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const signRef = useRef<HTMLDivElement>(null);
  const signBodyRef = useRef<HTMLDivElement>(null);

  /* ---------- Stack Filter ---------- */
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filteredStack = useMemo(() => {
    if (activeFilter === "ALL") return STACK_DATA;
    return STACK_DATA.filter(item => item.categories.includes(activeFilter));
  }, [activeFilter]);

  /* ---------- GitHub Contributions ---------- */
  const [ghWeeks, setGhWeeks] = useState<ContributionWeek[]>([]);
  const [ghTotal, setGhTotal] = useState(0);

  useEffect(() => {
    // Fetch real GitHub contribution data
    // Uses the public GitHub GraphQL proxy or direct API
    const fetchContributions = async () => {
      try {
        // Try public contribution fetch via GitHub's unofficial endpoint
        const res = await fetch('https://github-contributions-api.jogruber.de/v4/cinemawalaladka?y=last');
        if (res.ok) {
          const data = await res.json();
          // Transform the data to our format
          if (data.contributions) {
            const weeks: ContributionWeek[] = [];
            let currentWeek: ContributionDay[] = [];
            let total = 0;
            
            data.contributions.forEach((day: { date: string; count: number; level: number }, idx: number) => {
              total += day.count;
              currentWeek.push({
                date: day.date,
                contributionCount: day.count,
                contributionLevel: ['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'][day.level] || 'NONE',
              });
              if (currentWeek.length === 7 || idx === data.contributions.length - 1) {
                weeks.push({ contributionDays: [...currentWeek] });
                currentWeek = [];
              }
            });
            
            setGhWeeks(weeks);
            setGhTotal(total);
          }
        }
      } catch {
        // Silently fail - will show empty graph
      }
    };
    fetchContributions();
  }, []);

  /* ---------- Role Text Animation ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  /* ---------- Theme ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("daifolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const init = saved || (prefersDark ? "dark" : "light");
    setTheme(init);
    document.documentElement.setAttribute("data-theme", init);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("daifolio-theme", next);
      return next;
    });
  }, []);

  /* ---------- Search & Command Palette ---------- */
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState<{group: string, title: string, keywords: string, action: () => void}[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!isSearchOpen) {
      setSearchQuery("");
      return;
    }
    
    // Auto-index the entire site dynamically upon opening the command palette
    const index: typeof searchIndex = [];
    
    // 1. Index Navigation Menu Items
    index.push(
      { group: "Menu", title: "Daifolio (Home)", keywords: "home main profile root", action: () => { window.scrollTo({top:0, behavior:'smooth'}); setIsSearchOpen(false); } },
      { group: "Menu", title: "Resume", keywords: "cv resume document", action: () => { setIsSearchOpen(false); } }
    );

    // 2. Index Sections (Auto pulls all <h2> component boundaries in the site tree)
    document.querySelectorAll('h2').forEach((el) => {
       const title = el.textContent?.split('(')[0].trim() || "";
       if (!title) return;
       const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
       const section = el.closest('section') || el.parentElement?.closest('section');
       if (section && !section.id) section.id = id;
       
       if (section) {
         index.push({
           group: "Sections",
           title: title,
           keywords: title.toLowerCase(),
           action: () => {
             section.scrollIntoView({ behavior: 'smooth' });
             setIsSearchOpen(false);
           }
         });
       }
    });

    // 3. Index generic dynamic content loops based on structural markers
    document.querySelectorAll('[data-search]').forEach((el) => {
       const group = el.getAttribute('data-search-group') || "Content";
       // Optional: Skip indexing minor things (like Stack pills) when showing the default empty list?
       // We'll index them all so they are searchable.
       const title = el.getAttribute('data-search') || el.textContent?.trim() || "";
       const href = el.getAttribute('href');
       
       index.push({
         group,
         title,
         keywords: title.toLowerCase(),
         action: () => {
           if (href && href !== '#') {
             window.open(href, '_blank');
           } else {
             el.scrollIntoView({ behavior: 'smooth', block: 'center' });
           }
           setIsSearchOpen(false);
         }
       });
    });

    // 4. Index Programmatic Commands
    index.push(
      { group: "Commands", title: "Toggle Theme", keywords: "theme dark light mode switch", action: () => { toggleTheme(); setIsSearchOpen(false); } },
      { group: "Commands", title: "Copy Email Address", keywords: "email copy contact", action: () => { navigator.clipboard.writeText("hello@akshad.tech"); setIsSearchOpen(false); } }
    );

    // Deduplicate logic
    const uniqueIndex = index.filter((v,i,a) => a.findIndex(t => (t.title === v.title && t.group === v.group)) === i);
    setSearchIndex(uniqueIndex);
  }, [isSearchOpen, toggleTheme]);

  // Reactive filtering
  const filteredResults = useMemo(() => {
    if (!searchQuery) return searchIndex;
    const q = searchQuery.toLowerCase();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.keywords.includes(q) || 
      item.group.toLowerCase().includes(q)
    );
  }, [searchQuery, searchIndex]);

  // Grouped aggregation for UI
  const groupedResults = useMemo(() => {
    const groups: Record<string, typeof searchIndex> = {};
    filteredResults.forEach(item => {
       if (!groups[item.group]) groups[item.group] = [];
       groups[item.group].push(item);
    });
    return groups;
  }, [filteredResults]);

  const flatFiltered = useMemo(() => filteredResults, [filteredResults]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Keyboard navigation orchestrator
  useEffect(() => {
    if (!isSearchOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
       if (e.key === "ArrowDown") {
         e.preventDefault();
         setSelectedIndex(prev => (flatFiltered.length ? (prev + 1) % flatFiltered.length : 0));
       } else if (e.key === "ArrowUp") {
         e.preventDefault();
         setSelectedIndex(prev => (flatFiltered.length ? (prev - 1 + flatFiltered.length) % flatFiltered.length : 0));
       } else if (e.key === "Enter") {
         e.preventDefault();
         if (flatFiltered[selectedIndex]) {
            flatFiltered[selectedIndex].action();
         }
       }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, flatFiltered, selectedIndex]);

  /* ---------- 3D Sign Mouse Tilt ---------- */
  useEffect(() => {
    const el = signRef.current;
    const body = signBodyRef.current;
    if (!el || !body) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rY = (x - 0.5) * 4 - 1.5;
      const rX = (0.5 - y) * 3 + 3;
      body.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
    };
    const onLeave = () => {
      body.style.transform = "rotateX(3deg) rotateY(-1.5deg)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* ====== GRID GUIDES ====== */}
      <div className="grid-guides" aria-hidden="true">
        <div className="grid-guide grid-guide--1" />
        <div className="grid-guide grid-guide--2" />
        <div className="grid-guide grid-guide--3" />
        <div className="grid-guide grid-guide--4" />
        <div className="grid-guide grid-guide--5" />
        <div className="grid-guide grid-guide--6" />
      </div>

      {/* ====== PAGE FRAME ====== */}
      <div className="page-frame">

        {/* NAVBAR */}
        <nav className="flex items-center py-4 relative z-10">
          <span className="font-mono text-[13px] font-semibold tracking-tight">cinemawalaladka</span>
          
          <div className="flex items-center gap-5 md:gap-6 ml-auto mr-4 md:mr-6 max-md:hidden">
            {["Home", "Work", "Blog", "Resume"].map((item) => (
              <a key={item} href="#" className="font-sans text-[13.5px] font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors no-underline">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 max-md:ml-auto">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 py-1 px-2 border border-[var(--edge)] rounded-[5px] bg-[var(--bg-elevated)] text-[var(--fg-tertiary)] cursor-pointer hover:border-[var(--fg-muted)] transition-colors"
            >
              <IconSearch />
              <span className="font-mono text-[9px] text-[var(--fg-muted)] py-px px-1 border border-[var(--edge)] rounded-sm bg-[var(--bg-inset)] leading-[1.4]">Ctrl K</span>
            </button>
            <button onClick={toggleTheme} className="flex items-center justify-center w-[30px] h-[30px] border border-[var(--edge)] rounded-[5px] bg-[var(--bg-elevated)] text-[var(--fg-secondary)] cursor-pointer hover:border-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
              <IconSun /><IconMoon />
            </button>
          </div>
        </nav>

        <div className="h-line h-line--full" />

        {/* 3D HANGING SIGN */}
        <section className="flex flex-col items-center pt-6 pb-12 relative" style={{ perspective: 900 }}>
          {/* Wires with mounting hardware */}
          <div className="flex justify-center gap-[280px] w-full h-14 relative z-2 max-md:gap-[160px]">
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-col items-center w-[2px]">
                {/* Ceiling mount */}
                <div className="sign-rod__mount shrink-0" />
                {/* Wire rod */}
                <div className="sign-rod__wire w-[2px] flex-1 relative" style={{ background: "linear-gradient(to bottom, var(--wire) 0%, var(--edge-strong) 100%)" }} />
                {/* Bottom bracket */}
                <div className="sign-rod__bracket shrink-0" />
              </div>
            ))}
          </div>

          {/* 3D body */}
          <div ref={signRef} className="relative z-2 w-full max-w-[600px]">
            <div ref={signBodyRef} className="sign-3d__body">
              <div className="sign-3d__top" />
              <div className="sign-3d__bottom" />
              <div className="sign-3d__left" />
              <div className="sign-3d__right" />
              <div className="sign-3d__back" />

              <div className="sign-3d__front">
                {/* Left cap */}
                <div className="sign-cap sign-cap--left">
                  <div className="sign-cap__screw" />
                  <div className="sign-cap__screw" />
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center p-3 md:p-4 gap-4 md:gap-5 flex-wrap md:flex-nowrap overflow-hidden">
                  {/* Panel: Visual Designs */}
                  <div className="flex flex-col gap-px flex-[1.2] min-w-0">
                    <span className="font-mono text-[8px] font-medium text-[var(--fg-muted)] uppercase tracking-[0.1em] leading-none">VER — 01</span>
                    <div className="flex items-center gap-1">
                      <a href="/visual-designs" className="sign-ui-arrow" aria-label="Visual Designs">
                        <IconArrowUpRight size={16} />
                      </a>
                      <span className="text-sm font-semibold text-[var(--fg)] tracking-tight whitespace-nowrap leading-tight">Visual Designs</span>
                    </div>
                    <span className="font-mono text-[9px] text-[var(--fg-tertiary)] leading-none">UI/UX Design</span>
                  </div>

                  <div className="w-px self-stretch bg-[var(--sign-face-border)] my-0.5 shrink-0 hidden md:block" />

                  {/* Panel: Live Presence */}
                  <div className="flex flex-col gap-px flex-[0.8] items-center">
                    <span className="font-mono text-[8px] font-medium text-[var(--fg-muted)] uppercase tracking-[0.1em] leading-none">Online</span>
                    <div className="flex items-baseline gap-0.5 mt-0.5">
                      <span className="font-mono text-[22px] font-bold text-[var(--fg)] leading-none tabular-nums">
                        01
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[var(--fg-tertiary)] mt-[3px] leading-none">People Here</span>
                  </div>

                  <div className="w-px self-stretch bg-[var(--sign-face-border)] my-0.5 shrink-0 hidden md:block" />

                  {/* Panel: Pinterest */}
                  <div className="flex flex-col gap-px flex-[0.8]">
                    <span className="font-mono text-[8px] font-medium text-[var(--fg-muted)] uppercase tracking-[0.1em] leading-none">Pinterest</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-[var(--fg)]">Board</span>
                      <a href="/inspiration" className="sign-badge sign-badge--filled sign-badge--arrow">→</a>
                    </div>
                    <span className="font-mono text-[9px] text-[var(--fg-tertiary)] leading-none">Inspiration — 01</span>
                  </div>

                  <div className="w-px self-stretch bg-[var(--sign-face-border)] my-0.5 shrink-0 opacity-50 hidden md:block" />

                  {/* Panel: Toggle */}
                  <div className="flex flex-col gap-px flex-[0.5] min-w-[50px]">
                    <span className="font-mono text-[8px] font-medium text-[var(--fg-muted)] uppercase tracking-[0.1em] leading-none">Mode</span>
                    <div
                      className="sign-micro-toggle"
                      data-checked={toggleChecked}
                      onClick={() => setToggleChecked((p) => !p)}
                      role="switch"
                      aria-checked={toggleChecked}
                      tabIndex={0}
                    >
                      <div className="sign-micro-toggle__track">
                        <div className="sign-micro-toggle__thumb" />
                      </div>
                      <span className="sign-micro-toggle__label">{toggleChecked ? "SYS" : "SIG"}</span>
                    </div>
                    <div className="flex gap-[3px] mt-[3px]">
                      <span className="sign-indicator-dot sign-indicator-dot--red" />
                      <span className="sign-indicator-dot sign-indicator-dot--yellow" />
                      <span className="sign-indicator-dot sign-indicator-dot--green" />
                    </div>
                  </div>
                </div>

                {/* Right cap */}
                <div className="sign-cap sign-cap--right">
                  <div className="sign-cap__screw" />
                  <div className="sign-cap__screw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-line h-line--hatch" aria-hidden="true" />

        {/* PROFILE */}
        <section className="flex items-center gap-8 py-10 relative max-md:flex-col max-md:text-center max-md:gap-5">
          <div className="shrink-0 relative z-2">
            <div className="relative w-[120px] h-[120px]">
              <img className="w-[120px] h-[120px] rounded-full object-cover block bg-[var(--bg-inset)] border-[3px] border-[var(--bg)] relative z-2" src="https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855249/portfolio/public/pfp.png" alt="Arpit Rai" width={120} height={120} />
              <div className="profile-avatar__ring" />
              <div className="absolute top-[-3px] left-[-3px] w-6 h-4 rounded-sm overflow-hidden flex flex-col z-3 shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex-1 bg-white flag-stripe--white relative" />
                <div className="flex-1 bg-[#138808]" />
              </div>
            </div>
          </div>

          <div className="relative z-2">
            <div className="flex items-center gap-2 max-md:justify-center">
              <h1 className="text-[28px] font-bold tracking-tight leading-[1.15] text-[var(--fg)] max-md:text-2xl">Arpit Rai</h1>
              <img src="https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855233/portfolio/public/blue-tick.png" alt="Verified" width={20} height={20} className="shrink-0" title="Verified" />
            </div>
            <div className="relative h-[20px] w-full max-md:w-[200px] overflow-hidden mt-0.5 max-md:mx-auto">
              <div 
                className="absolute flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
                style={{ transform: `translateY(-${titleIndex * 20}px)` }}
              >
                {TITLES.map((title) => (
                  <span key={title} className="font-mono text-[13px] text-[var(--fg-tertiary)] tracking-tight h-[20px] flex items-center max-md:justify-center w-full">{title}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-0 z-1 max-md:hidden">
            <span className="font-mono text-[9px] text-[var(--fg-muted)] tracking-wide">28.6393° N, 77.4125° E</span>
          </div>
        </section>

        <div className="h-line h-line--full" />

        {/* METADATA ROWS */}
        <section className="relative z-1">
          {metaRows.map((row, i) => (
            <div key={i} className="meta-row">
              <div className="flex items-center gap-3 w-full py-2 relative z-1">
                <span className="flex items-center justify-center w-[18px] h-[18px] text-[var(--fg-tertiary)] shrink-0">{row.icon}</span>
                <span className="meta-row__divider" />
                {row.content}
              </div>
            </div>
          ))}
        </section>

        <div className="h-line h-line--full" />

        {/* SOCIAL LINKS */}
        <section className="relative z-1">
          <div className="flex max-md:flex-col">
            <a href="https://www.linkedin.com/in/arpitrai21/" target="_blank" rel="noopener noreferrer" className="social-cell flex-1 flex items-center gap-3 p-4 no-underline text-[var(--fg)]">
              <IconLinkedIn />
              <span className="w-px h-4 bg-[var(--edge)] shrink-0" />
              <span className="text-[13px] font-semibold">LinkedIn</span>
              <span className="font-mono text-[10px] text-[var(--fg-muted)] ml-auto">arpitrai21</span>
              <span className="text-[var(--fg-muted)] shrink-0 social-cell__arrow transition-transform"><IconArrowUpRight /></span>
            </a>
            <div className="w-px bg-[var(--edge)] self-stretch max-md:w-full max-md:h-px" />
            <a href="https://github.com/cinemawalaladka" target="_blank" rel="noopener noreferrer" className="social-cell flex-1 flex items-center gap-3 p-4 no-underline text-[var(--fg)]">
              <IconGitHubLarge />
              <span className="w-px h-4 bg-[var(--edge)] shrink-0" />
              <span className="text-[13px] font-semibold">GitHub</span>
              <span className="font-mono text-[10px] text-[var(--fg-muted)] ml-auto">cinemawalaladka</span>
              <span className="text-[var(--fg-muted)] shrink-0 social-cell__arrow transition-transform"><IconArrowUpRight /></span>
            </a>
          </div>
          <div className="h-px w-full bg-[var(--edge)]" />
          <div className="flex max-md:flex-col">
            <a href="https://x.com/cinemawalaladka" target="_blank" rel="noopener noreferrer" className="social-cell flex-1 flex items-center gap-3 p-4 no-underline text-[var(--fg)]">
              <IconX />
              <span className="w-px h-4 bg-[var(--edge)] shrink-0" />
              <span className="text-[13px] font-semibold">X</span>
              <span className="font-mono text-[10px] text-[var(--fg-muted)] ml-auto">cinemawalaladka</span>
              <span className="text-[var(--fg-muted)] shrink-0 social-cell__arrow transition-transform"><IconArrowUpRight /></span>
            </a>
            <div className="w-px bg-[var(--edge)] self-stretch max-md:w-full max-md:h-px" />
            <a href="https://www.instagram.com/cinemawalaladkaa?igsh=cGpqNHh0M2QwMXhi" target="_blank" rel="noopener noreferrer" className="social-cell flex-1 flex items-center gap-3 p-4 no-underline text-[var(--fg)]">
              <IconInstagram />
              <span className="w-px h-4 bg-[var(--edge)] shrink-0" />
              <span className="text-[13px] font-semibold">Instagram</span>
              <span className="font-mono text-[10px] text-[var(--fg-muted)] ml-auto">cinemawalaladkaa</span>
              <span className="text-[var(--fg-muted)] shrink-0 social-cell__arrow transition-transform"><IconArrowUpRight /></span>
            </a>
          </div>
        </section>

        <div className="h-line h-line--hatch" aria-hidden="true" />
        <div className="h-line h-line--full" />

        {/* ABOUT */}
        <div className="py-5 relative z-1">
          <h2 className="text-[28px] font-extrabold text-[var(--fg)] tracking-tight">About</h2>
        </div>
        <div className="h-line h-line--full" />
        <section className="py-10 relative z-1 font-mono">
          <div className="max-w-[850px] flex flex-col gap-8 text-[14px] md:text-[14.5px] leading-[1.85] text-[var(--fg-secondary)]">
            <p>
              Hello Reader! 👋 I&apos;m <strong className="text-[var(--fg)] font-medium">Arpit</strong>, a <strong className="text-[var(--fg)] font-medium">first-year BTech Computer Science Engineering student</strong> specializing in <strong className="text-[var(--fg)] font-medium">Cybersecurity</strong>. Currently, I&apos;m building my skills in <strong className="text-[var(--fg)] font-medium">Full-Stack Development</strong> while developing a strong foundation in <strong className="text-[var(--fg)] font-medium">modern web technologies</strong>.
            </p>
            
            <p>
              Alongside coding, I have a specialization in <strong className="text-[var(--fg)] font-medium">Visual Design</strong> and a strong interest in <strong className="text-[var(--fg)] font-medium">UI/UX</strong>, where I enjoy combining <strong className="text-[var(--fg)] font-medium">logic with creativity</strong> to build thoughtful and engaging digital experiences. This blend of <strong className="text-[var(--fg)] font-medium">technical problem-solving</strong> and <strong className="text-[var(--fg)] font-medium">creative thinking</strong> has helped me develop a <strong className="text-[var(--fg)] font-medium">disciplined approach toward projects</strong>.
            </p>

            <div className={`flex flex-col gap-8 overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${aboutExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <p>
                I&apos;m also associated with some of India&apos;s largest tech communities, including the <strong className="text-[var(--fg)] font-medium">Google Developer Groups</strong> and the <strong className="text-[var(--fg)] font-medium">AWS Cloud Club</strong>, where I continue to <strong className="text-[var(--fg)] font-medium">connect, grow, and learn</strong> as part of my development journey. As part of my practical learning, I&apos;ve developed a website for the <strong className="text-[var(--fg)] font-medium">AWS Cloud Club</strong> and continue expanding my skills day by day. I also enjoy exploring <strong className="text-[var(--fg)] font-medium">Vibecoding</strong> and <strong className="text-[var(--fg)] font-medium">Prompt Engineering</strong>, experimenting with <strong className="text-[var(--fg)] font-medium">emerging tools and workflows</strong>.
              </p>

              <p>
                Beyond tech, I actively pursue a <strong className="text-[var(--fg)] font-medium">creative storytelling journey</strong> under the digital identity <strong className="text-[var(--fg)] font-medium">@cinemawalaladkaa</strong>, where I explore <strong className="text-[var(--fg)] font-medium">visual storytelling</strong>, <strong className="text-[var(--fg)] font-medium">cinematic content</strong>, and <strong className="text-[var(--fg)] font-medium">creative experimentation</strong> alongside my technical path.
              </p>

              <p>
                Let&apos;s connect and collaborate on something exciting! 🚀
              </p>
            </div>

            <div>
              <button 
                onClick={() => setAboutExpanded(!aboutExpanded)} 
                className="text-[var(--fg)] text-[13.5px] border-b border-[var(--edge-subtle)] hover:border-[var(--fg)] pb-[1px] transition-colors flex items-center gap-1.5 cursor-pointer max-w-max"
              >
                <span>{aboutExpanded ? 'Show Less' : 'Read More'}</span>
                <span className={`text-[10px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${aboutExpanded ? 'rotate-180' : ''}`}>▼</span>
              </button>
            </div>
          </div>
        </section>

        <div className="h-line h-line--full" />

        {/* GITHUB CONTRIBUTIONS (Live) */}
        <section className="py-12 relative z-1 flex flex-col font-sans">
          <div className="w-full flex flex-col">
            {ghWeeks.length > 0 ? (
              <>
                <div className="flex gap-[3px] overflow-hidden justify-center max-md:justify-start">
                  {ghWeeks.map((week, col) => (
                    <div key={col} className="flex flex-col gap-[3px]">
                      {week.contributionDays.map((day, row) => {
                        const levelMap: Record<string, number> = {
                          'NONE': 0, 'FIRST_QUARTILE': 1, 'SECOND_QUARTILE': 2,
                          'THIRD_QUARTILE': 3, 'FOURTH_QUARTILE': 4
                        };
                        const level = levelMap[day.contributionLevel] ?? 0;
                        return (
                          <div
                            key={row}
                            className="w-[10px] h-[10px] rounded-sm"
                            style={{ backgroundColor: `var(--gh-${level})` }}
                            title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3 text-[11px] max-md:flex-col max-md:items-start max-md:gap-2">
                  <span className="text-[var(--fg)]">
                    <strong className="font-semibold">{ghTotal.toLocaleString()} contributions</strong>{' '}
                    <span className="text-[var(--fg-tertiary)]">in the last year on GitHub.</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-[var(--fg-tertiary)] text-[10px]">
                    Less
                    {[0, 1, 2, 3, 4].map(l => (
                      <div key={l} className="w-[10px] h-[10px] rounded-sm" style={{ backgroundColor: `var(--gh-${l})` }} />
                    ))}
                    More
                  </div>
                </div>
              </>
            ) : (
              /* Fallback skeleton while loading */
              <>
                <div className="flex gap-[3px] overflow-hidden justify-center max-md:justify-start">
                  {Array.from({ length: 52 }).map((_, col) => (
                    <div key={col} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, row) => (
                        <div
                          key={row}
                          className="w-[10px] h-[10px] rounded-sm animate-pulse"
                          style={{ backgroundColor: 'var(--gh-0)' }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3 text-[11px] max-md:flex-col max-md:items-start max-md:gap-2">
                  <span className="text-[var(--fg-tertiary)] font-mono text-[10px]">Loading contributions from GitHub...</span>
                  <div className="flex items-center gap-1.5 text-[var(--fg-tertiary)] text-[10px]">
                    Less
                    {[0, 1, 2, 3, 4].map(l => (
                      <div key={l} className="w-[10px] h-[10px] rounded-sm" style={{ backgroundColor: `var(--gh-${l})` }} />
                    ))}
                    More
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <div className="h-line h-line--hatch" aria-hidden="true" />
        <div className="h-line h-line--full" />

        {/* STACK */}
        <div className="py-5 relative z-1">
          <h2 className="text-[28px] font-extrabold text-[var(--fg)] tracking-tight">Stack</h2>
        </div>
        <div className="h-line h-line--full" />
        <section className="py-10 relative z-1">
          <div className="flex flex-wrap gap-2 mb-8">
            {STACK_FILTERS.map(f => (
              <button 
                key={f} 
                data-search={f}
                data-search-group="Stack Filter"
                onClick={() => setActiveFilter(f)}
                className={`stack-filter ${activeFilter === f ? 'stack-filter--active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
             {filteredStack.map(tech => (
               <div key={tech.name} data-search={tech.name} data-search-group="Tech Stack" className="stack-item">
                <span className="stack-item__label">{tech.name}</span>
                {tech.img ? (
                  <img src={tech.img} alt={tech.name} className="stack-item__img" width={28} height={28} />
                ) : (
                  <span className="stack-item__text">{tech.name.slice(0, 3).toUpperCase()}</span>
                )}
               </div>
             ))}
          </div>
        </section>

        <div className="h-line h-line--hatch" aria-hidden="true" />
        <div className="h-line h-line--full" />

        {/* COMMUNITY */}
        <div className="py-5 relative z-1">
          <h2 className="text-[28px] font-extrabold text-[var(--fg)] tracking-tight">Community</h2>
        </div>
        <div className="h-line h-line--full" />
        <section className="py-10 relative z-1">
          <div className="grid grid-cols-2 border-t border-l border-[var(--edge)]">
              <div data-search="GDG New Delhi" data-search-group="Community" className="community-cell">
                 <div className="community-logo-wrapper">
                   <img src="https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855263/portfolio/assets/GDG_NEW_DELHI.webp" className="community-logo" alt="GDG New Delhi" />
                   <span className="community-label">GDG New Delhi</span>
                 </div>
              </div>
              <div data-search="AWS Cloud Club" data-search-group="Community" className="community-cell">
                 <div className="community-logo-wrapper">
                   <img src="https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855262/portfolio/assets/AWS_CLOUD_CLUB.jpg" className="community-logo" alt="AWS Cloud Club" />
                   <span className="community-label">AWS Cloud Club</span>
                 </div>
              </div>
              <div data-search="HackWithIndia" data-search-group="Community" className="community-cell col-span-2">
                 <div className="community-logo-wrapper">
                   <img src="https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855264/portfolio/assets/HACKWITHINDIA_HWI.png" className="community-logo" alt="HackWithIndia" />
                   <span className="community-label">HackWithIndia</span>
                 </div>
              </div>
          </div>
        </section>
        
        <div className="h-line h-line--hatch" aria-hidden="true" />
        <div className="h-line h-line--full" />

        {/* EXPERIENCE */}
        <div className="py-5 relative z-1">
          <h2 className="text-[28px] font-extrabold text-[var(--fg)] tracking-tight">Experience</h2>
        </div>
        <div className="h-line h-line--full" />
        <section className="py-10 relative z-1">
          <div className="flex flex-col relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-4 bottom-8 w-[1px] bg-[var(--edge-strong)] opacity-[0.35] max-md:hidden" />
            
            {[
              {
                company: "AWS Cloud Club",
                role: "Design Lead",
                type: "Part-time",
                duration: "Jan 2026 — Present",
                location: "Remote / Community",
                description: (
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    <li>Lead visual design initiatives for the Communication Team at AWS Cloud Club.</li>
                    <li>Create and manage UI assets for communication and outreach materials.</li>
                    <li>Maintain creative consistency across branding, social content, and team communications.</li>
                    <li>Contribute design support for campaigns, events, and community engagement efforts.</li>
                  </ul>
                ),
                skills: ["Adobe Photoshop", "Adobe Premiere Pro", "Visual Design", "Branding", "UI Assets"],
                active: true,
                icon: <IconUser />
              },
              {
                company: "GDG New Delhi",
                role: "Media Designer",
                type: "Part-time",
                duration: "Jan 2026 — Present",
                description: (
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    <li>Worked as a Video Editor in the creative team of Google Developer Group New Delhi, contributing to GDG Cloud New Delhi.</li>
                    <li>Edited event after-movies, recap reels, promotional videos, and community content.</li>
                    <li>Collaborated with organizers to maintain visual consistency, branding standards, and content quality across social media platforms.</li>
                    <li>Managed motion graphics, transitions, sound synchronization, and export optimization for digital publishing.</li>
                  </ul>
                ),
                skills: ["Figma", "Adobe Premiere Pro", "Motion Graphics", "Content Design", "Visual Storytelling"],
                active: true,
                icon: <IconCode />
              },
              {
                company: "HackWithIndia",
                role: "Chapter Designer",
                type: "Community",
                duration: "Nov 2025 — Jan 2026",
                description: (
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    <li>Produced digital visual assets for HackWithIndia social media platforms.</li>
                    <li>Edited event footage into polished reels, highlight edits, and promotional videos optimized for online reach.</li>
                    <li>Delivered promotional creatives, branded graphics, and high-engagement short-form video content.</li>
                    <li>Collaborated with the core team to ensure visual consistency, brand alignment, and timely publication across official social channels.</li>
                  </ul>
                ),
                skills: ["Typography", "Adobe Photoshop", "Branding", "Social Media Creatives"],
                icon: <IconUser />
              },
              {
                company: "GDGC PPSU",
                role: "Graphic Designer",
                type: "Part-time",
                duration: "Sep 2025 — Jan 2026",
                location: "Surat, Gujarat",
                description: (
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    <li>Served as a Core Member at GDG On Campus, managing visual design and graphic creatives for events and promotions.</li>
                    <li>Designed posters, social media assets, and digital branding materials.</li>
                    <li>Collaborated with the core team to ensure consistent visual communication and support event marketing efforts.</li>
                    <li>Contributed to enhancing the overall brand presence of GDG On Campus across platforms.</li>
                  </ul>
                ),
                skills: ["Typography", "Adobe Photoshop", "Graphic Design"],
                icon: <IconCode />
              }
            ].map((item, i) => (
              <ExperienceItem key={i} item={item} />
            ))}
          </div>
        </section>

        <div className="h-line h-line--hatch" aria-hidden="true" />
        <div className="h-line h-line--full" />
        
        {/* PROJECTS */}
        <div className="py-5 relative z-1">
          <h2 className="text-[28px] font-extrabold text-[var(--fg)] tracking-tight flex items-baseline gap-2">
            Projects <span className="text-[14px] font-sans font-medium text-[var(--fg-muted)]">(2)</span>
          </h2>
        </div>
        <div className="h-line h-line--full" />
        <section className="relative z-1 mb-6">
          <div className="flex flex-col">
            {[
              {
                title: "Personal Portfolio Website",
                dateNode: (
                  <div className="flex items-center gap-1.5 mt-[1px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-red-500 ring-2 ring-red-500/20 indicator-pulse" />
                    <span className="font-sans text-[11px] font-medium text-[var(--fg-tertiary)] hover:text-[var(--fg-secondary)] transition-colors">Working On</span>
                  </div>
                ),
                link: "",
                description: "",
              },
              {
                title: "AWS Cloud Club Website",
                dateNode: <span className="font-sans text-[11.5px] font-medium text-[var(--fg-tertiary)]">16 Mar 2026</span>,
                link: "https://awsccppsu.vercel.app/",
                description: "Official website developed for AWS Cloud Club.",
                features: [
                  <><strong>Immersive 3D Experience</strong> — Interactive cloud-inspired hero built with Three.js and React Three Fiber</>,
                  <><strong>Smooth Motion System</strong> — GSAP-powered transitions with custom Canvas particle animations</>,
                  <><strong>Responsive Architecture</strong> — Optimized layouts across desktop, tablet, and mobile</>,
                  <><strong>Dynamic Event & Gallery Modules</strong> — Structured sections for events, workshops, and media showcases</>,
                  <><strong>Modern UI System</strong> — Dark theme with glassmorphism, blur effects, and premium micro-interactions</>,
                  <><strong>Performance Optimization</strong> — Vite-powered fast builds, minimal bundle size, optimized asset delivery</>
                ],
                technicalHighlights: [
                  "React 19 + Vite Architecture",
                  "Three.js + React Three Fiber Integration",
                  "GSAP + Canvas API Animation Pipeline",
                  "Cloudinary Media Management",
                  "Variable-based Vanilla CSS Design System",
                  "react-router-dom Routing",
                  "Lenis Smooth Scrolling",
                  "Modular reusable component architecture"
                ],
                tags: [
                  "AWS", "React", "Vite", "Three.js", "React Three Fiber", "GSAP", "Cloudinary", "Canvas API", "Lenis", "Responsive Design", "UI/UX", "Performance Optimization"
                ]
              }
            ].map((p, i) => (
              <ProjectItem key={i} item={p} />
            ))}
          </div>
        </section>
        
        <div className="h-line h-line--hatch" aria-hidden="true" />
        <div className="h-line h-line--full" />
        
        {/* EDUCATION */}
        <div className="py-5 relative z-1">
          <h2 className="text-[28px] font-extrabold text-[var(--fg)] tracking-tight">Education</h2>
        </div>
        <div className="h-line h-line--full" />
        <section className="py-10 relative z-1">
          <div className="flex flex-col relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-4 bottom-8 w-[1px] bg-[var(--edge-strong)] opacity-[0.35] max-md:hidden" />
            
            {[
              {
                institution: "Krishna Vidya Niketan Ghaziabad",
                level: "Senior Secondary",
                stream: "Physics Chemistry Mathematics",
                duration: "Apr 2023 — May 2025",
                grade: "Grade: A",
                activities: "Inter-house Drawing & Poster Competition | Science Model Creation | Poster Presentation",
                description: "Years where logic met imagination navigating through science, stories, and self-discovery. A phase that sharpened my curiosity and deepened my love for both the technical and the creative.",
                skills: ["Strategic Planning"],
                icon: <IconPin />
              },
              {
                institution: "St Xavier's school Ballia",
                level: "Secondary",
                stream: "Science and mathematics",
                duration: "Apr 2015 — May 2023",
                grade: "Grade: A",
                activities: "Science Exhibition Participant | Morning Assembly Speaker | Class Monitor / Group Leader in projects | Storytelling Competitions",
                description: "Completed foundational education from Class 3 to 10 with a strong interest in creative writing, visual arts, and science. Participated actively in school activities including drama, art competitions, and poetry recitals. This phase sparked my love for storytelling and design—now carried into my creative and coding journey.",
                skills: ["Strategic Planning"],
                icon: <IconPin />
              }
            ].map((item, i) => (
              <EducationItem key={i} item={item} />
            ))}
          </div>
        </section>
        
        <div className="h-line h-line--hatch" aria-hidden="true" />
        <div className="h-line h-line--full" />

        {/* CERTIFICATIONS */}
        <div className="py-5 relative z-1">
          <h2 className="text-[28px] font-extrabold text-[var(--fg)] tracking-tight flex items-baseline gap-2">
            Certifications <span className="text-[14px] font-sans font-medium text-[var(--fg-muted)]">(3)</span>
          </h2>
        </div>
        <div className="h-line h-line--full" />
        <section className="py-10 relative z-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             {[
               { title: "Claude Code in Action", issuer: "Anthropic", date: "Apr 2026", id: "vg9v54mtwh3o", skills: ["Prompt Engineering"], image: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855236/portfolio/public/Claude_Code_in_Action.jpg" },
               { title: "Hands-on With AWS", issuer: "AWS Cloud Club - PPSU", date: "Apr 2026", id: "bbaf2004-fe6f-4726-98c3-6ed9e724848e", skills: ["Amazon Web Services (AWS)"], image: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855244/portfolio/public/Hands-on_With_AWS.png" },
               { title: "Hackfest 2.0", issuer: "GDG Cloud New Delhi", date: "Feb 2026", id: "CERT-0FD444E8-974A-4732", skills: ["Teamwork", "Communication"], image: "https://res.cloudinary.com/dcyj6oxeh/image/upload/v1776855241/portfolio/public/Hackfest_2.0.jpg" }
             ].map((cert, i) => (
                <CertificationItem key={i} item={cert} />
             ))}
          </div>
        </section>

        <div className="h-line h-line--full" />

        {/* QUOTE */}
        <section className="py-16 relative z-1 flex items-center justify-center">
          <div className="relative max-w-[640px] w-full px-8 py-10 rounded-[10px] border border-[var(--edge)] bg-[var(--bg-elevated)] shadow-sm overflow-hidden flex flex-col justify-center">
            {/* Background Quotes */}
            <div className="absolute -top-6 left-6 text-[140px] font-serif text-[var(--edge-strong)] opacity-[0.15] leading-none select-none pointer-events-none tracking-tighter">
              “
            </div>
            
            <div className="relative z-1 flex flex-col gap-4 mt-2">
              <p className="font-sans text-[14px] md:text-[15px] font-medium text-[var(--fg)] italic leading-[1.8] text-center px-4">
                "You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions."
              </p>
              <div className="w-full flex justify-end pr-2 md:pr-8">
                <span className="font-mono text-[11px] text-[var(--fg-secondary)] tracking-wide">
                  — Bhagavad Gita
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="h-line h-line--full" />
        
        {/* FOOTER */}
        <section className="py-10 relative z-1 font-sans">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Left: NAVIGATE */}
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[10px] text-[var(--fg-muted)] uppercase tracking-[0.05em]">Navigate</span>
              <ul className="grid grid-cols-2 sm:grid-cols-5 gap-y-3 gap-x-6">
                {["Home", "Work", "Projects", "Blog", "Resume", "Personal", "Pinterest Board"].map(link => (
                  <li key={link} data-search={link} data-search-group="Menu"><a href={link === "Pinterest Board" ? "/inspiration" : "#"} className="text-[13px] font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors no-underline whitespace-nowrap">{link}</a></li>
                ))}
              </ul>
            </div>
            
            {/* Right: CONNECT */}
            <div className="flex flex-col gap-5 md:ml-auto shrink-0">
              <span className="font-mono text-[10px] text-[var(--fg-muted)] uppercase tracking-[0.05em]">Connect</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: <IconX />, href: "https://x.com/cinemawalaladka", name: "X" },
                  { icon: <IconLinkedIn />, href: "https://www.linkedin.com/in/arpitrai21/", name: "LinkedIn" },
                  { icon: <IconGitHubLarge />, href: "https://github.com/cinemawalaladka", name: "GitHub" },
                  { icon: <IconInstagram />, href: "https://www.instagram.com/cinemawalaladkaa?igsh=cGpqNHh0M2QwMXhi", name: "Instagram" },
                  { icon: <IconMail />, href: "mailto:cinemawalaladka21@gmail.com", name: "Email" },
                ].map((social, i) => (
                  <a key={i} href={social.href} data-search={social.name} data-search-group="Social Links" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-[8px] bg-transparent border border-[var(--edge)] flex items-center justify-center text-[var(--fg-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--fg)] hover:border-[var(--fg-muted)] transition-colors shadow-sm" aria-label={social.name}>
                     {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <div className="h-line h-line--full" />

        <div className="flex justify-center items-center py-6 font-sans text-[11px] text-[var(--fg-muted)]">
          <span>&copy; 2026 Arpit Rai. All rights reserved.</span>
        </div>

        <div className="h-line h-line--hatch" aria-hidden="true" />

        {/* Frame ID */}
        <div className="flex justify-between py-3 pb-8 font-mono text-[8px] text-[var(--fg-muted)] uppercase tracking-[0.08em]">
          <span>cinemawalaladka</span>
          <span>v0.1.0</span>
          <span>BUILD 2026</span>
        </div>
      </div>

      {/* ====== SEARCH MODAL ====== */}
      <div
        className={`search-overlay ${isSearchOpen ? "active" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) setIsSearchOpen(false); }}
      >
        <div className="search-modal">
          <div className="flex items-center gap-3 py-4 px-5 text-[var(--fg-tertiary)] border-b border-[var(--edge)]">
            <IconSearch />
            <input
              type="text"
              className="flex-1 bg-transparent border-none font-sans text-[15px] text-[var(--fg)] outline-none placeholder:text-[var(--fg-muted)]"
              placeholder="Type a command or search..."
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <kbd className="font-mono text-[9px] py-0.5 px-1.5 border border-[var(--edge)] rounded-sm text-[var(--fg-muted)] bg-[var(--bg-inset)] cursor-pointer hover:border-[var(--fg-muted)] transition-colors" onClick={() => setIsSearchOpen(false)}>ESC</kbd>
          </div>
          
          <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-none flex flex-col font-sans">
             {Object.entries(groupedResults).map(([group, items]) => (
               <div key={group} className="flex flex-col mb-2">
                 <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--fg-muted)] px-3 py-2">
                   {group}
                 </div>
                 {items.map(item => {
                   const globalIdx = flatFiltered.indexOf(item);
                   const isSelected = globalIdx === selectedIndex;
                   return (
                     <div
                       key={item.title}
                       onClick={item.action}
                       onMouseEnter={() => setSelectedIndex(globalIdx)}
                       className={`flex items-center px-3 py-2.5 rounded-[6px] cursor-pointer text-[13px] ${isSelected ? 'bg-[var(--bg-inset)] text-[var(--fg)] font-medium dropdown-border shadow-sm' : 'text-[var(--fg-secondary)] hover:bg-[var(--bg-inset)] hover:text-[var(--fg)]'} transition-colors`}
                     >
                       <div className="w-[14px] h-[14px] flex items-center justify-center mr-3 text-[var(--fg-tertiary)] opacity-60">
                         {group === "Commands" ? <IconCode /> : (group === "Menu" ? <IconBox /> : <IconSearch />)}
                       </div>
                       <span className="truncate flex-1">{item.title}</span>
                     </div>
                   );
                 })}
               </div>
             ))}
             {flatFiltered.length === 0 && (
               <div className="py-8 text-center text-[12px] text-[var(--fg-muted)]">No results found for "{searchQuery}".</div>
             )}
          </div>

          <div className="flex items-center justify-between border-t border-[var(--edge)] px-4 py-2.5 bg-[var(--bg-elevated)] rounded-b-[12px] text-[var(--fg-muted)] text-[10px] font-medium max-md:hidden">
             <div className="flex items-center gap-3">
                <div className="w-[20px] h-[20px] border border-[var(--edge)] rounded-[4px] flex items-center justify-center font-mono text-[8px] bg-[var(--bg)] shadow-sm">00</div>
             </div>
             <div className="flex items-center gap-4">
               <span className="flex items-center gap-1.5"><span className="text-[var(--fg-secondary)] font-semibold">Go to</span> <kbd className="font-mono text-[8px] border border-[var(--edge)] rounded-[3px] px-1.5 py-0.5 bg-[var(--bg)] shadow-[0_1px_0_rgba(0,0,0,0.05)]">↵</kbd></span>
               <span className="flex items-center gap-1.5"><span className="text-[var(--fg-secondary)] font-semibold">Exit</span> <kbd className="font-mono text-[8px] border border-[var(--edge)] rounded-[3px] px-1.5 py-0.5 bg-[var(--bg)] shadow-[0_1px_0_rgba(0,0,0,0.05)]">Esc</kbd></span>
             </div>
          </div>
        </div>
      </div>

    </>
  );
}
