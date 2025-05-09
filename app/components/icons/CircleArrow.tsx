import React from "react";

export const CircleArrow = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path d="M12 19.2644C16.4183 19.2644 20 15.7882 20 11.5C20 8.91898 18.7024 6.6321 16.7059 5.22032M12.9412 21L11.0588 19.1731L12.9412 17.3462M12 3.73558C7.58172 3.73558 4 7.21183 4 11.5C4 14.081 5.29757 16.3679 7.29412 17.7797M11.0588 5.65385L12.9412 3.82692L11.0588 2" stroke="#677281" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

    </svg>
);
