export function TypeIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3.33331 5.83334C3.33331 5.05677 3.33331 4.66849 3.46018 4.3622C3.62934 3.95382 3.95379 3.62937 4.36217 3.46021C4.66846 3.33334 5.05674 3.33334 5.83331 3.33334H14.1666C14.9432 3.33334 15.3315 3.33334 15.6378 3.46021C16.0462 3.62937 16.3706 3.95382 16.5398 4.3622C16.6666 4.66849 16.6666 5.05677 16.6666 5.83334M7.49998 16.6667H12.5M9.99998 3.33334V16.6667" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

interface IconProps {
    className?: string;
}

export function EmailIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M1.66669 5.83325L8.47079 10.5961C9.02176 10.9818 9.29725 11.1746 9.59691 11.2493C9.8616 11.3153 10.1384 11.3153 10.4031 11.2493C10.7028 11.1746 10.9783 10.9818 11.5293 10.5961L18.3334 5.83325M5.66669 16.6666H14.3334C15.7335 16.6666 16.4336 16.6666 16.9683 16.3941C17.4387 16.1544 17.8212 15.772 18.0609 15.3016C18.3334 14.7668 18.3334 14.0667 18.3334 12.6666V7.33325C18.3334 5.93312 18.3334 5.23306 18.0609 4.69828C17.8212 4.22787 17.4387 3.84542 16.9683 3.60574C16.4336 3.33325 15.7335 3.33325 14.3334 3.33325H5.66669C4.26656 3.33325 3.56649 3.33325 3.03171 3.60574C2.56131 3.84542 2.17885 4.22787 1.93917 4.69828C1.66669 5.23306 1.66669 5.93312 1.66669 7.33325V12.6666C1.66669 14.0667 1.66669 14.7668 1.93917 15.3016C2.17885 15.772 2.56131 16.1544 3.03171 16.3941C3.56649 16.6666 4.26656 16.6666 5.66669 16.6666Z" stroke="#9BA2AC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function PhoneIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z" stroke="#9BA2AC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function HashIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="2"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3.33331 6.66667H16.6666M3.33331 13.3333H16.6666M6.66665 2.5V17.5M13.3333 2.5V17.5" stroke="#00FF7B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function UserIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    );
}

export function LocationIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    );
}

export function DefaultColumnIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 3H3v18h18V3z"/>
            <path d="M9 3v18"/>
        </svg>
    );
}