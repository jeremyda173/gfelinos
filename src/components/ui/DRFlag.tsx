export const DRFlag = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 32 20" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="20" fill="#fff"/>
    <rect width="14" height="8" fill="#002D62"/>
    <rect x="18" y="0" width="14" height="8" fill="#CE1126"/>
    <rect x="0" y="12" width="14" height="8" fill="#CE1126"/>
    <rect x="18" y="12" width="14" height="8" fill="#002D62"/>
    <path d="M14 0h4v20h-4zM0 8h32v4H0z" fill="#fff"/>
    <g transform="translate(16 10) scale(0.01)">
      <circle r="150" fill="#0072CE" stroke="#fff" strokeWidth="20"/>
    </g>
  </svg>
);
