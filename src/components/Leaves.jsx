const LeafSVG = ({ size, top, left, right, bottom, rotate, flip, opacity }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 280"
    style={{
      position: 'fixed',
      width: size,
      height: size * 1.4,
      top: top ?? 'auto',
      bottom: bottom ?? 'auto',
      left: left ?? 'auto',
      right: right ?? 'auto',
      transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
      opacity,
      pointerEvents: 'none',
      zIndex: 0,
    }}
  >
    <path d="M100 270 C60 220 10 160 20 90 C30 30 80 5 100 5 C120 5 170 30 180 90 C190 160 140 220 100 270Z" fill="#b0c89a" opacity="0.7" />
    <path d="M100 270 C100 180 95 100 100 5" stroke="#90b070" strokeWidth="2" fill="none" opacity="0.8" />
    <path d="M100 180 C80 160 55 140 35 120" stroke="#90b070" strokeWidth="1.2" fill="none" opacity="0.7" />
    <path d="M100 200 C120 175 145 155 165 135" stroke="#90b070" strokeWidth="1.2" fill="none" opacity="0.7" />
    <path d="M100 140 C75 120 50 105 30 85" stroke="#90b070" strokeWidth="1" fill="none" opacity="0.6" />
    <path d="M100 155 C125 130 150 112 170 92" stroke="#90b070" strokeWidth="1" fill="none" opacity="0.6" />
  </svg>
)

const leaves = [
  { size: 100, top: '2%',  left: '-2%',  rotate: -20,  flip: false, opacity: 0.22 },
  { size:  70, top: '5%',  right: '-1%', rotate: 150,  flip: true,  opacity: 0.20 },
  { size: 130, top: '18%', left: '-3%',  rotate: 15,   flip: true,  opacity: 0.18 },
  { size:  80, top: '25%', right: '-2%', rotate: -160, flip: false, opacity: 0.21 },
  { size:  90, top: '38%', left: '-1%',  rotate: -30,  flip: false, opacity: 0.19 },
  { size: 110, top: '42%', right: '-3%', rotate: 140,  flip: true,  opacity: 0.20 },
  { size:  75, top: '55%', left: '-2%',  rotate: 20,   flip: true,  opacity: 0.22 },
  { size: 120, top: '60%', right: '-2%', rotate: -150, flip: false, opacity: 0.18 },
  { size:  85, top: '72%', left: '-1%',  rotate: -15,  flip: false, opacity: 0.21 },
  { size:  95, top: '78%', right: '-1%', rotate: 160,  flip: true,  opacity: 0.20 },
  { size: 105, top: '88%', left: '-3%',  rotate: 25,   flip: true,  opacity: 0.19 },
  { size:  72, top: '92%', right: '-2%', rotate: -140, flip: false, opacity: 0.22 },
]

export default function Leaves() {
  return (
    <>
      {leaves.map((l, i) => (
        <LeafSVG key={i} {...l} />
      ))}
    </>
  )
}
