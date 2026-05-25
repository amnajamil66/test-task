"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { images } from "@/lib/assets";
import { PageSection } from "@/components/PageSection";
import { featureTabs } from "@/lib/data";
import { figma } from "@/lib/figma-tokens";
import { cn } from "@/lib/utils";

const t = figma.featureTabs;

export function FTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <PageSection
      width="full"
      padding="64"
      pageMarginX={0}
      align="center"
      className="features-tabs-section px-4 md:px-6 lg:px-0"
    >
      <div
        className="features-tabs-inner mx-auto flex w-full flex-col items-center"
        style={{ gap: t.headingGap, maxWidth: t.contentWidth }}
      >
        <h2 className="type-5xl-semibold text-center text-text-contrast">
          Lorem ipsum dolor
        </h2>

        <div
          className="features-tabs-row mx-auto flex w-full flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center"
          style={
            {
              gap: t.rowGap,
              maxWidth: t.contentWidth,
              "--features-list-width": `${t.listWidth}px`,
              "--features-row-height": `${t.rowHeight}px`,
              "--features-image-width": `${t.imageWidth}px`,
            } as CSSProperties
          }
        >
          <div
            className="features-tabs-list flex w-full max-w-[520px] flex-col"
            style={{ gap: t.listGap }}
          >
            {featureTabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={tab.id}
                  className={cn(
                    "features-tabs-item flex min-h-0 flex-1 flex-col rounded-md p-px",
                    isActive && "border-gradient-tab",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "flex h-full w-full flex-col justify-center rounded-md text-left shadow-md-custom",
                      isActive
                        ? "bg-bg-hover"
                        : "border border-[#313538] bg-bg-subtle",
                    )}
                    style={{
                      gap: t.tabInnerGap,
                      padding: `${t.tabPaddingY}px ${t.tabPaddingX}px`,
                    }}
                  >
                    <span className="feature-tab-title text-text-contrast">
                      {tab.title}
                    </span>
                    <p
                      className={cn(
                        "feature-tab-desc",
                        isActive ? "text-text-contrast" : "text-text-muted",
                      )}
                      style={{
                        fontSize: t.descType.fontSize,
                        lineHeight: `${t.descType.lineHeight}px`,
                      }}
                    >
                      {tab.description}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>

          <div
            className="features-tabs-media relative mx-auto shrink-0 overflow-hidden"
            style={{
              width: t.imageWidth,
              height: t.imageHeight,
              maxWidth: "100%",
              borderRadius: t.imageRadius,
            }}
          >
            <Image
              src={images.promptLibrary}
              alt="Prompt library interface"
              width={t.imageWidth}
              height={t.imageHeight}
              className="features-tabs-media-img h-full w-full"
              sizes={`${t.imageWidth}px`}
            />
          </div>
        </div>
      </div>
    </PageSection>
  );
}