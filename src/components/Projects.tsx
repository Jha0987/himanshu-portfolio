"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import {
  ExternalLink,
  CheckCircle2,
  FolderGit2,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Real systems built with modern stacks, emphasizing architecture, security, and responsive UI.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.projects
            .filter((p) => p.featured)
            .map((project, idx) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                reverse={idx % 2 !== 0}
              />
            ))}
        </div>

        {/* Secondary Projects / Other Works */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Additional Work & Prototypes
            </h3>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                        {project.number}
                      </span>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          aria-label={`GitHub for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-slate-400"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const images = project.images || [];

  return (
    <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 overflow-hidden hover:border-slate-700/80 transition-all shadow-xl">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Project Info Column */}
        <div
          className={`lg:col-span-6 space-y-6 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Tag & Number */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Project {project.number}
            </span>
            <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <Sparkles className="w-3 h-3" />
              Featured Application
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-cyan-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Key Features & Engineering Highlights
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700/60 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Visual / Browser Mockup Column */}
        <div
          className={`lg:col-span-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
            {/* Browser top chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-3 py-0.5 rounded-full border border-slate-800 truncate max-w-[220px]">
                {project.demoUrl ? project.demoUrl.replace("https://", "") : project.title.toLowerCase()}
              </div>
              <div className="w-8" />
            </div>

            {/* Main Screenshot Preview */}
            <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden group">
              {images.length > 0 ? (
                <Image
                  src={images[selectedImage]}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={project.number === "01"}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                  Screenshot preview
                </div>
              )}
            </div>

            {/* Thumbnail switcher if multiple images exist */}
            {images.length > 1 && (
              <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2 overflow-x-auto">
                <span className="text-[11px] font-mono text-slate-400 mr-1 shrink-0">
                  Views:
                </span>
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-14 h-9 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                      selectedImage === i
                        ? "border-cyan-400 ring-2 ring-cyan-400/30 scale-105"
                        : "border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`View ${i + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="56px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
