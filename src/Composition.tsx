import React from "react";
import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  interpolate,
  useCurrentFrame,
} from "remotion";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => ({});

export const MyComposition = () => (
  <Composition
    id="MyComp"
    component={MyComponent}
    durationInFrames={450}
    fps={30}
    width={1280}
    height={720}
    calculateMetadata={calculateMetadata}
  />
);

export const MyComponent: React.FC<Props> = () => {
  const frame = useCurrentFrame();

  const intro = interpolate(frame, [0, 12, 72, 95], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const monument = interpolate(frame, [65, 115, 320, 365], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ending = interpolate(frame, [330, 370, 450], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const stoneY = interpolate(frame, [65, 130], [45, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at 50% 48%, #263442 0%, #111b26 52%, #080d14 100%)",
        color: "#f2e4c3",
        fontFamily: "Georgia, serif",
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, transparent 65%, rgba(3,7,12,0.75) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 34,
          left: 0,
          width: "100%",
          textAlign: "center",
          fontSize: 15,
          letterSpacing: 7,
          color: "#c6a66a",
          opacity: Math.max(intro, monument, ending),
        }}
      >
        ТҮРКІ ДҮНИЕСІНІҢ ЖАЗБА МҰРАСЫ
      </div>

      {/* Кіріспе */}
      <div
        style={{
          position: "absolute",
          top: 245,
          width: "100%",
          textAlign: "center",
          opacity: intro,
          transform: `translateY(${interpolate(frame, [0, 35], [22, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px)`,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            color: "#c9a66b",
            marginBottom: 22,
          }}
        >
          VIII ҒАСЫР
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: "bold",
            letterSpacing: 5,
            textShadow: "0 4px 25px #000",
          }}
        >
          КҮЛТЕГІН
        </div>
        <div
          style={{
            width: 110,
            height: 2,
            background: "#c9a66b",
            margin: "25px auto",
          }}
        />
        <div style={{ fontSize: 25, letterSpacing: 3 }}>
          Мәңгілікке қашалған тарих
        </div>
      </div>

      {/* Ескерткіш */}
      <div
        style={{
          position: "absolute",
          top: 125,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: monument,
          transform: `translateY(${stoneY}px)`,
        }}
      >
        <svg width="330" height="455" viewBox="0 0 330 455">
          <defs>
            <linearGradient id="stone" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#55534b" />
              <stop offset="0.45" stopColor="#aaa18b" />
              <stop offset="1" stopColor="#46463f" />
            </linearGradient>
          </defs>
          <path
            d="M65 440 L75 70 L105 35 L225 35 L255 70 L265 440 Z"
            fill="url(#stone)"
            stroke="#d0b98c"
            strokeWidth="3"
          />
          <path
            d="M87 420 L95 82 L112 53 L218 53 L235 82 L243 420"
            fill="none"
            stroke="#36372f"
            strokeWidth="3"
          />
          <path
            d="M115 95 L215 95 M112 130 L218 130 M110 165 L220 165
               M108 200 L222 200 M106 235 L224 235 M104 270 L226 270
               M102 305 L228 305 M100 340 L230 340"
            stroke="#34352f"
            strokeWidth="3"
            opacity="0.8"
          />
          <g fill="#34352f" fontSize="19" textAnchor="middle">
            <text x="165" y="120">𐰴 𐰇 𐰠</text>
            <text x="165" y="155">𐱅 𐰃 𐰏</text>
            <text x="165" y="190">𐰉 𐰃 𐰤</text>
            <text x="165" y="225">𐰋 𐰃 𐰠</text>
            <text x="165" y="260">𐰴 𐰀 𐰍</text>
            <text x="165" y="295">𐰇 𐰺 𐰢</text>
            <text x="165" y="330">𐰉 𐰃 𐰤</text>
            <text x="165" y="365">𐰴 𐰇 𐰠</text>
          </g>
          <path
            d="M55 440 L275 440"
            stroke="#c9a66b"
            strokeWidth="5"
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 62,
          width: "100%",
          textAlign: "center",
          opacity: monument,
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 3 }}>
          КҮЛТЕГІН ЕСКЕРТКІШІ
        </div>
        <div
          style={{
            fontSize: 19,
            color: "#c9a66b",
            marginTop: 13,
            letterSpacing: 2,
          }}
        >
          Орхон жазба ескерткіштері
        </div>
      </div>

      {/* Қорытынды */}
      <div
        style={{
          position: "absolute",
          top: 265,
          width: "100%",
          textAlign: "center",
          opacity: ending,
        }}
      >
        <div
          style={{
            fontSize: 46,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          ТАСҚА ҚАШАЛҒАН ТАРИХ
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 25,
            color: "#c9a66b",
            letterSpacing: 3,
          }}
        >
          ҰРПАҚҚА ЖЕТКЕН АМАНАТ
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          width: "100%",
          textAlign: "center",
          fontSize: 13,
          letterSpacing: 4,
          color: "#8e826c",
        }}
      >
        ТАРИХ • ЖАД • ҰРПАҚ
      </div>
    </AbsoluteFill>
  );
};
