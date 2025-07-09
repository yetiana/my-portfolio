export default function Spiral({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M50,50 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}
