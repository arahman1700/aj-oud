interface IconProps {
  className?: string;
}

export function MadaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#1D3C6E" />
      <text x="40" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
        mada
      </text>
      <rect x="4" y="13" width="6" height="6" rx="3" fill="#48B74B" />
    </svg>
  );
}

export function VisaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#FFFFFF" />
      <text x="40" y="21" textAnchor="middle" fill="#1A1F71" fontSize="16" fontWeight="700" fontFamily="Arial, sans-serif" fontStyle="italic">
        VISA
      </text>
    </svg>
  );
}

export function MastercardIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#FFFFFF" />
      <circle cx="33" cy="16" r="10" fill="#EB001B" />
      <circle cx="47" cy="16" r="10" fill="#F79E1B" />
      <path d="M40 8.27a10 10 0 0 1 0 15.46A10 10 0 0 1 40 8.27z" fill="#FF5F00" />
    </svg>
  );
}

export function ApplePayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#000000" />
      {/* Apple logo */}
      <path
        d="M24.5 10.3c-.6-.8-1.5-1.3-2.3-1.3-.1 0-.3 0-.4 0 .0.1.0.2.0.3 0 .9-.5 1.9-1.2 2.5-.6.5-1.2.8-2 .9.1.8.5 1.6 1 2.2.8 1 1.5 1.5 2.1 1.5.3 0 .6-.1 1-.3.3-.1.7-.3 1.1-.3s.7.1 1.1.3c.4.2.7.3 1 .3.7 0 1.4-.6 2.1-1.7.4-.6.7-1.2.8-1.5-1-.5-1.6-1.3-1.6-2.5 0-1 .5-1.8 1.4-2.4-.6-.8-1.4-1.3-2.4-1.3-.4 0-.8.1-1.2.3-.5.2-.8.3-1 .3-.3 0-.6-.1-1-.3-.3-.1-.7-.2-1-.2z"
        fill="#FFFFFF"
      />
      <path d="M23.8 7c.5-.7.8-1.4.8-2.1 0-.1 0-.2 0-.3-.8.1-1.6.5-2.2 1.2-.5.6-.9 1.3-.9 2.1 0 .1 0 .2 0 .2.1 0 .2 0 .3 0 .7 0 1.5-.4 2-.1.1z" fill="#FFFFFF" />
      <text x="48" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">
        Pay
      </text>
    </svg>
  );
}

export function GooglePayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5" />
      {/* G letter */}
      <path d="M22 16c0-3.3 2.7-6 6-6 1.6 0 2.7.6 3.6 1.4l-1.5 1.5c-.5-.5-1.2-1-2.1-1-1.8 0-3.2 1.5-3.2 3.3s1.4 3.3 3.2 3.3c1.4 0 2.2-.6 2.5-1.3H28v-1.8h4.8c.1.3.1.6.1 1 0 3.1-2.1 5.3-5 5.3-2.9.0-5.3-2.2-5.3-5z" fill="#4285F4" />
      <text x="52" y="20" textAnchor="middle" fill="#5F6368" fontSize="11" fontWeight="500" fontFamily="Arial, sans-serif">
        Pay
      </text>
    </svg>
  );
}

export function TabbyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5" />
      <text x="40" y="20" textAnchor="middle" fill="#3BFFC1" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">
        tabby
      </text>
    </svg>
  );
}

export function TamaraIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5" />
      <text x="40" y="20" textAnchor="middle" fill="#F5A623" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">
        tamara
      </text>
    </svg>
  );
}

export function AramexIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5" />
      <text x="40" y="20" textAnchor="middle" fill="#E65100" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
        aramex
      </text>
    </svg>
  );
}

export function SMSAIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5" />
      <text x="40" y="20" textAnchor="middle" fill="#0054A6" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">
        SMSA
      </text>
    </svg>
  );
}
