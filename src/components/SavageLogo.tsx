interface SavageLogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

export default function SavageLogo({ className = '', size, alt = 'SAVAGE COMMUNITY' }: SavageLogoProps) {
  return (
    <img
      src="https://picsvg.com/svg/kusFp.jpg"
      alt={alt}
      style={size ? { width: size, height: size } : undefined}
      className={`object-contain select-none shrink-0 ${className}`}
      loading="eager"
    />
  );
}
