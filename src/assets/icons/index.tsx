import { SVGProps } from "react";

const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    fill="#38bdf8"
    {...props}
  >
    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" />
  </svg>
);

const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    fill="#61DAFB"
    {...props}
  >
    <g>
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
    </g>
  </svg>
);

const HTMLIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#E44D26"
      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
    />
    <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
    <path
      fill="#EBEBEB"
      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
    />
    <path
      fill="#fff"
      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
    />
  </svg>
);

const CSSIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#1572B6"
      d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
    />
    <path
      fill="#33A9DC"
      d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
    />
    <path
      fill="#fff"
      d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
    />
    <path
      fill="#EBEBEB"
      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
    />
    <path
      fill="#fff"
      d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
    />
    <path
      fill="#EBEBEB"
      d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
    />
  </svg>
);

const JavascriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
    <path
      fill="#323330"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
    />
  </svg>
);

const TypescriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
    <path
      data-name="original"
      fill="#007acc"
      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
    />
  </svg>
);

const ViteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1="6"
        x2="235"
        y1="33"
        y2="344"
        gradientTransform="translate(0 .937) scale(.3122)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#41d1ff" />
        <stop offset="1" stop-color="#bd34fe" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="194.651"
        x2="236.076"
        y1="8.818"
        y2="292.989"
        gradientTransform="translate(0 .937) scale(.3122)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#ffea83" />
        <stop offset=".083" stop-color="#ffdd35" />
        <stop offset="1" stop-color="#ffa800" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"
    />
    <path
      fill="url(#b)"
      d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"
    />
  </svg>
);

const JenkinsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#d33833"
      d="M108.893 61.68c0 25.36-20.099 45.918-44.892 45.918-24.794 0-44.893-20.558-44.893-45.918s20.1-45.92 44.893-45.92 44.892 20.56 44.892 45.92"
    />
    <path
      fill="#ef3d3a"
      d="M20.938 73.052S17.688 25.167 61.81 23.8l-3.078-5.13-23.943 8.037-6.84 7.867-5.986 11.459-3.42 13.339 1.025 8.893"
    />
    <path
      fill="#231f20"
      d="M33.253 30.355c-7.876 8.06-12.75 19.186-12.75 31.496 0 12.307 4.874 23.436 12.75 31.494 7.88 8.057 18.74 13.03 30.747 13.03 12.007 0 22.867-4.973 30.747-13.03 7.876-8.058 12.751-19.187 12.751-31.494 0-12.31-4.875-23.437-12.751-31.496C86.867 22.3 76.007 17.327 64 17.326c-12.006.001-22.867 4.973-30.747 13.03zM31.26 95.294c-8.37-8.561-13.546-20.392-13.546-33.443 0-13.053 5.176-24.883 13.546-33.444 8.37-8.563 19.954-13.87 32.74-13.869 12.788-.002 24.374 5.306 32.741 13.869 8.372 8.561 13.548 20.392 13.547 33.444 0 13.05-5.175 24.882-13.547 33.443-8.367 8.562-19.953 13.87-32.74 13.87-12.787 0-24.372-5.308-32.74-13.87"
    />
    <path
      fill="#f0d6b7"
      d="m82.898 61.934-6.841 1.026-9.235 1.026-5.986.171-5.815-.17-4.446-1.369-3.934-4.275-3.078-8.722-.684-1.881-4.105-1.368-2.394-3.934-1.71-5.644 1.881-4.96 4.446-1.538 3.592 1.71 1.71 3.762 2.053-.342.683-.855-.683-3.933-.172-4.96 1.026-6.84-.04-3.908 3.119-4.985 5.472-3.934 9.578-4.104 10.603 1.539 9.235 6.67 4.276 6.84 2.736 4.96.684 12.313-2.053 10.604-3.762 9.405-3.591 4.96"
    />
    <path
      fill="#335061"
      d="m88.027 56.975-4.103 4.105v15.904l-3.58 14.66-1.721.047 1.367 16.418 6.498-.855L84.95 91.52l-2.902.079 7.863-.422s3.932-9.919 3.932-10.432c0-.513 3.422-14.365 3.422-14.365l-7.698-8.037-1.539-1.37zm-41.215 2.564-4.275 1.711-13.682 9.406.856 2.737 3.934 11.628 1.709 19.327 1.197 2.05 17.101 5.817 1.028-1.2-2.053-14.365v-4.103l24.455-1.027 1.88-1.026-14.876-7.012 2.736-5.3-3.933 1.367-1.54-1.881-2.052-8.893-1.711-.513-3.762-1.198-3.25-2.906-3.761-4.619z"
    />
    <path
      fill="#6d6b6d"
      d="m36.551 31.835 4.446-1.54 3.592 1.711 1.71 3.762 2.053-.342.513-2.052-1.026-3.933 1.026-9.407-.856-5.13 3.079-3.592 6.67-5.301-1.882-2.565-9.406 4.617-3.933 3.079-2.224 4.788-3.42 4.617-1.026 5.473.684 5.815"
    />
    <path
      fill="#dcd9d8"
      d="M59.445 4.021c-1.172-.012-2.543.108-2.543.108L45.787 8.406l-4.277 4.276-1.881 3.42 3.934-.342s2.565-6.328 12.826-9.406c6.413-1.924 5.01-2.312 3.056-2.333zM48.01 14.904l-9.406 2.223-2.737 8.893.684 5.814 1.88-1.195s-3.591-11.974 10.09-13.684l-.511-2.05z"
    />
    <path
      fill="#f7e4cd"
      d="M69.986.475a11.318 11.318 0 0 0-3.85.748c-10.26 3.933-17.785 11.115-17.615 15.732.292 7.864.172 7.87.172 7.87S51.601 9.774 66.31 6.866c12.108-2.393 18.468.512 20.863 3.248 0 0-8.25-9.82-17.186-9.64zm18.328 11.35c-.545-.003-4.913.108-5.074 4.277 0 0 0 .683.342 1.367 0 0 3.934-4.447 6.328-2.053l-1.539-3.59s-.02-.002-.057-.002zm-25.185 2.01c-.84.02-1.876.371-3.149 1.24-3.762 2.565-3.42 6.157-2.736 6.841.684.684.499 2.06 1.02 1.115.52-.945.349-4.022 2.23-4.877 1.881-.855 4.966-1.812 6.16-.222 0 0-.522-4.166-3.525-4.096zm26.437 10.476s-2.818.594-3.078 3.078c-.26 2.483 3.079.512 3.592.341l-.514-3.42zm-20.693.171s-3.762.513-3.762 2.907 4.276 2.223 5.473 1.197l-1.711-4.104zM38.432 30.64 34.5 34.742l.684 5.131 2.05 5.3 2.225.686c-3.25-3.933-1.711-6.671-1.027-10.433.683-3.763 7.183.172 7.183.172l-.172-2.567-2.564-2.05-4.447-.342zm38.609 7.847c-1.126-.05-1.556 3.635-1.648 4.586.31-.92 3.171-2.77 3.171-2.77s0-1.396-1.396-1.794a.549.549 0 0 0-.127-.022zm-1.648 4.586a.394.394 0 0 0-.02.221s.006-.08.02-.22zm-29.248 1.301-2.24 2.17.513 7.525 5.473 8.551s6.143 1.386 5.472.856c-7.353-5.815-7.866-16.59-8.037-17.788-.17-1.196-1.181-1.314-1.181-1.314zm19.244 2.549c-.675.01-1.122.228-1.248.396-.427.57.457 3.672.457 3.672l.855.172c-.17-3.421 1.881-3.764 1.881-3.764-.758-.364-1.42-.484-1.945-.476z"
    />
    <path
      fill="#49728b"
      d="m45.615 59.37-16.76 11.286 1.881 5.303 4.448 19.152.17 10.092 2.394.854c3.42-8.21-3.248-34.717-3.248-34.717l16.074-7.182-4.959-4.789zm6.614 19.448-.458 1.073s-.341 3.078-.341 3.933c0 .856.341 8.04.341 8.04h2.737V81.601l-2.28-2.784zm.056 14.584-7.695.342 2.222 1.54 5.473.855v-2.737zm35.742-36.427-3.248 3.591L96.75 69.46l.342-4.104-9.065-8.38zm-3.42 33.52-5.984 1.196.854 4.79c2.223 1.026 5.986-1.711 5.986-1.711l-.856-4.276z"
    />
    <path
      fill="#fff"
      d="M50.574 62.62v1.538l2.174 2.395 6.84 3.078.172-5.129-4.739-.516-4.447-1.367zm50.059 24.284-5.473 1.711-5.25 2.563-2.789-.51-2.172.853 1.832 14.368 6.668-1.883 12.656-.684 1.881-5.814-3.42-10.09-3.933-.514zm-22.01 4.787-9.97.002-16.026.854.291 7.869 1.762 10.6 3.54 14.369 7.866 1.709 12.998-1.026.17-2.566-1.54-13.852.909-17.959zm1.317-1.366-3.763-9.577-3.934-5.644s.855-2.394 2.053-2.394h3.933l3.762 1.368-.341 6.328-1.71 9.92"
    />
    <path
      fill="#dcd9d8"
      d="m52.115 65.014-.513.685 2.908 2.051 4.787 1.025-.17-2.05c-1.71.513-7.012-1.711-7.012-1.711zm23.77 7.353-3.932.512 6.67 15.734 1.367.172.684-1.71s-4.79-9.236-4.79-10.604c0 0 .856-2.052 2.053-1.54 1.198.514 3.764 1.882 3.764 1.882v-3.249l-5.816-1.197zm16.248 17.957-2.223.854 1.881 9.406c-.684-.171-5.13 1.883-5.13 1.883l.51 2.736 1.884-.685 5.984-.854 1.711 2.223 5.13.17 3.079-.684 2.736-4.103-.172-3.08-1.88-5.473c.513 4.104-1.54 8.039-1.54 8.039-.855 0-10.431-.514-10.431-.514 0-1.026-1.54-9.918-1.54-9.918zm-13.17.17-2.565 1.027s-.854 17.787 1.711 30.442c0 0-5.13 3.249-12.656 4.103l14.365-.513 1.711-1.026-2.052-28.047-.514-5.986zm4.47 18.297c-.736.004-1.83.526-2.603.475-.113 2.701.266 7.033.393 9.867 1.796.002 2.565-.392 3.906-.844.151-3.335-1.057-6.422-1.404-9.467a1.105 1.105 0 0 0-.291-.031z"
    />
    <path
      fill="#d33833"
      d="M84.777 63.818c-2.192.102-5.148 2.897-6.525 3.387.178.512.47.917.492 1.57.965-.238 2.14-.075 2.977.336-.968.108-2.038.102-2.678.563-.235.677.055 1.6-.102 2.54 2.296.648 4.919.994 7.82 1.079.566-.733.758-2.133.69-3.518-.08-1.67-.519-5.104-1.55-5.705-.34-.197-.718-.27-1.124-.252zm-22.535.748c-2.324.05-2.082 4.108-1.969 6.592.095 2.098 1.188 4.318 1.66 5.713.224.65.274 1.342.83 1.47.984.23 4.23-1.067 5.155-1.571 1.955-1.066 3.473-2.76 5.133-3.897l.062-1.658c-.998-.498-2.15-.852-3.617-.916.995-.5 2.457-.493 3.363-1.088l.026-.662c-1.654-.127-2.285-.864-3.375-1.461-1.784-.974-4.464-2.037-6.768-2.477a2.4 2.4 0 0 0-.5-.045zm13.43 3.457c-.442.004-.969.171-1.57.573-.114 1.259.18 1.67.433 3.115 3.493 1.093 3.525-3.704 1.137-3.688z"
    />
    <path
      fill="#ef3d3a"
      d="m84.557 62.621-6.498 3.762-.344 1.88v3.762l2.394.856s-1.197-1.71-.341-2.223c.855-.513 1.711 0 2.224-.855.513-.856 0-1.369.17-2.395.171-1.026 1.026-1.196 1.881-1.367.855-.17 3.25-.513 3.592.342l-1.026-3.078zm-21.536 1.03c-.847-.018-1.619.122-2.185.507-4.021 2.735-.78 9.056 1.19 12.774a551.56 551.56 0 0 0-.538-6.409c-.362-3.98.957-3.285 4.408-3.285.528 0 3.245.628 3.44 1.026.933 1.905-1.56 1.481 1.074 2.918 2.224 1.212 6.152-.737 5.254-3.432-.503-.6-2.62-.187-3.379-.58l-4.008-2.078c-1.168-.607-3.392-1.403-5.256-1.442Zm-.996 13.28c.042.532.086 1.063.127 1.594l.612-.183c-.204-.405-.46-.883-.739-1.41z"
    />
    <path
      fill="#231f20"
      d="M67.565.006c-3.59.068-7.101.665-10.027 1.742-2.175.8-4.282 1.516-6.192 2.638-5.111 3-10.537 5.008-12.052 11.047-3.734 1.672-4.86 6.451-4.672 11.997.036 1.081.623 2.432.42 3.449-.104.516-.804 1.177-.944 1.513-1.79 4.267-.355 9.876 1.713 12.909 1.25 1.832 3.32 3.457 6.05 3.888.109 1.635.502 3.042 1.257 4.699.478 1.048 2.263 2.932 1.606 4.269-.33.674-3.237 2.137-4.201 2.716-3.255 1.952-5.614 3.149-8.619 5.312-1.944 1.4-4.985 1.58-4.505 4.808.323 2.178 1.563 4.878 2.272 7.062.768 2.357 1.868 4.516 2.5 6.962 1.405 5.451 1.698 10.587 2.04 15.911.134 2.085-.088 4.291.453 5.442.558 1.19 2.626 1.57 4.12 2.264 4.315 1.995 8.893 5.042 14.552 4.437 1.349 4.536 2.624 9.367 4.243 13.34 5.803 2.086 14.964 1.76 20.997 1.035 1.834-.222 3.769-1.127 4.2-2.717-.129-.98-.272-1.95-.21-3.109 1.886-.39 4.453-.712 4.868-2.8.582-2.928-1.849-7.123-1.038-10.336 1.092-.354 2.258-.631 2.084-2.355 1.84-.958 4.023-1.172 6.353-1.082.3.58.727 1.138 1.111 1.457 3.264.656 6.425.71 9.135-.174 3.067-1.002 4.53-7.275 3.829-10.26-.498-2.115-1.624-5.58-2.584-7.628-2.601-5.56-10.353-2.07-14.502-.008 2.013-5.295 3.744-10.785 5.52-16.725.53-1.78 1.578-4.303 1.343-6.147-.22-1.734-2.924-3.556-4.347-4.93-.791-.762-4.479-3.562-4.693-4.61-.207-1.014 1.504-3.311 2.054-4.46.79-1.644 1.356-3.656 1.745-5.025 2.9-10.196 3.195-24.204-.951-32.586-1.57-3.175-5.96-7.56-8.705-9.637C79.74 1.254 73.546-.106 67.565.006Zm.478 2.84C72.89 2.799 78.28 4.509 81.93 6.568c3.05 1.72 5.3 5.048 7.446 7.817-3.009-.893-5.57.642-5.103 3.124 2.519-2.309 6.822-.025 8.095 2.528 1.217 2.44 1.209 6.057 1.396 9.685.453 8.798-1.61 17.875-6.031 24.234-1.182 1.698-2.174 3.554-3.836 4.723-4.006 2.813-10.095 5.363-15.309 3.614-6.89-2.312-10.02-6.903-13.81-12.16.103 2.888 2.134 5.258 4.14 7.467 1.745 1.925 3.851 4.1 6.117 4.998-1.89-.444-4.792-.583-5.58 1.114-4.41-.293-8.508-.744-10.594-3.733-1.644-2.356-3.314-6.363-4.063-9.458-.153-.636-.415-1.99-.351-2.337.246-1.343 2.638-1.933 1.697-3.81-1.736-.016-2.127 1.58-3.72 1.738-4.125.408-7.035-5.467-6.848-9.012.159-3.014 2.707-5.898 6.192-5.517 2.463.27 3.3 2.958 3.778 5.35 1.42.076 3.471-.061 4.143-1.169-.097-2.703-1.352-4.871-1.266-7.355.162-4.668 2.705-8.88.743-13.478 2.1-4.764 8.261-8.524 12.818-10.797 1.765-.88 3.856-1.264 6.06-1.286zM55.505 5.192c.198.032.38.186.556.374-.03.811-.83.794-1.37 1.054-.84 1.033-2.068 1.516-3.09 2.648-1.049 1.16-2.222 4.276-3.612 4.62-.697.174-1.493-.12-2.1-.08-1.605.101-2.735.923-4.363 1.159 2.102-4.595 8.659-8.313 13.774-9.762a.468.468 0 0 1 .205-.013zm8.74 9.973c-2.637.003-5.64 2.822-6.423 4.973-.318.874-.82 2.59.441 2.895 1.413-3.149 3.729-6.185 8.39-5.1.895-1.471-.705-2.552-1.887-2.73a3.477 3.477 0 0 0-.522-.038zm-16.656.48c1.802 4.586-1.293 10.036-.14 15.051.353 1.536 1.574 3.92-.376 3.972.051-4.37-5.37-7.143-9.455-4.574-.273-3.314-.746-7.973 1.514-10.459 2.085-2.296 4.959-3.725 8.457-3.99zm41.776 7.597c-.149 2.517.786 4.032 1.435 5.812-1.122.706-3.305.266-4.57.819-.09 3.723 5.76 1.888 6.65-.185-1.33-1.932-2.241-4.25-3.295-6.437l-.22-.01zm-20.325.057c-.692 1.964 1.188 5.298 2.242 6.984-1.373 1.333-3.842.226-5.679.14-1.753 2.769 3.423 3.29 5.644 2.634.608-.179 1.66-1.09 1.805-1.5.617-1.733-.627-2.493-1.267-3.117-1.42-1.384-1.746-3.31-2.745-5.141zm10.549 1.81c-.134-.018-.295.03-.488.17-.125 4.616 3.305 8.437 5.863 11.52 1.25 1.505 2.756 2.365 1.369 4.703-2.236.85-5.855 3.285-8.964 2.753-1.65-.282-1.278-2.155-1.87-3.173-1.138 1.497-.692 3.762.48 4.78 5.479.542 9.208-1.794 12.552-3.943-.133-.842 1.012-2.36.694-3.626-.11-.436-1.102-1.068-1.704-1.727-2.453-2.675-5.814-6.672-7.15-9.798-.12-.28-.201-1.583-.782-1.66zm-38.98 8.635c-1.267-.02-2.415.815-2.686 2.783.562-.368 1.015-1.415 2.028-.917-.89 1.737-.676 5.12.535 6.22-.007-2.062-.328-5.587 1.43-5.48 1.231.074 1.48 2.71 2.528 3.308.723-3.478-1.722-5.882-3.835-5.914zm50.051 10.36c-2.673 1.22-4.83 2.997-8.322 3.332-.169.577-.097 2.033-.004 2.99 4.567-.095 6.77-3.358 8.326-6.321zm-21.884 1.921c1.335 3.573 7.353 4.833 12.443 4.579-.008-1.058-.003-2.13-.215-2.998-3.96.116-9.315-.049-12.228-1.58zm-.553 2.858c-2.573.003-.403 1.434.033 1.994.902 1.16 1.96 3.139 3.608 4.015 2.598 1.38 7.758.801 9.63.04.692-.28 1.25-1.057 1.507-1.713-5.84.14-12.763.722-14.778-4.336zm19.436 9.83c2 1.611 3.208 3.127 5.126 4.85 1.04.933 3.088 2.051 3.295 3.56.115.842-.401 2.905-.591 3.852-.84 4.154-2.73 9.642-4.53 13.995-.654 1.582-1.28 3.56-2.143 3.902-2.364.936-5.233-.091-7.242 1.16 2.7-4.685 5.64-9.111 8.286-13.852-.403-.94-1.391-1.341-1.678-2.388 1.858-3.509 1.004-14.403-3.738-12.103.663-.974 2.404-1.778 3.215-2.976zm-41.724 2.48c.431-.17 3.577 3.923 4.042 4.255 2.55 1.81 5.716 3.24 8.677 4.653.181 1.359.6 3.12 1.338 5.476.813 2.602 1.484 6.274 4.922 4.398-.327 1.486-2.237 2.408-1.71 4.141.33 1.087 3.94 2.43 5.084 3.076 2.111 1.19 4.037 1.848 5.659 2.544-7.37.202-14.291.802-21.102 1.729-.816-1.264-.487-3.212-.573-5.225-.094-2.186.815-7.114-.044-7.42-.971-.345-1.153 1.623-1.188 2.057-.182 2.308 1.099 7.195-.164 9.958-1.382-.391-2.063-1.43-3.358-1.902-.508 1.6 1.052 1.677.892 2.693-.212 1.343-2.757.22-2.743 2.217 1.657.266 4.199-.515 5.97.232.463 5.433 1.207 10.581 2.022 16.352-7.048-.366-11.61-3.868-16.805-6.297-.323-11.49-2.154-23.41-6.688-33.14 4.756-3.67 10.078-7.552 15.77-9.796zm39.082 2.626c.316.015.613.094.884.252 1.032.602 1.471 4.036 1.551 5.706.067 1.385-.126 2.783-.69 3.517-2.902-.085-5.524-.43-7.82-1.078.157-.94-.135-1.865.1-2.543.639-.46 1.711-.452 2.678-.56-.836-.412-2.01-.575-2.975-.337-.023-.654-.316-1.058-.493-1.57 1.427-.509 4.554-3.496 6.765-3.387zm-5.2.127c-1.218.794-2.255 1.787-3.424 2.635-2.593.129-4.008-.179-5.913-1.668.03-.12.222-.066.23-.213 2.775 1.237 6.304-.504 9.106-.754zm-27.347.049c1.447 1.005 4.247.757 6.378 1.131.11.683-.442 1.58-.432 2.531-1.793-.11-7.427-2.16-5.946-3.662zm9.772.573c.155-.004.321.011.5.045 2.304.44 4.984 1.502 6.768 2.477 1.09.596 1.721 1.332 3.375 1.46-.007.22-.017.44-.025.662-.906.595-2.369.588-3.363 1.088 1.466.064 2.62.417 3.618.915l-.065 1.659c-1.661 1.137-3.178 2.83-5.133 3.896-.925.504-4.17 1.802-5.153 1.572-.557-.129-.607-.82-.83-1.47-.473-1.395-1.564-3.614-1.66-5.712-.113-2.485-.356-6.545 1.968-6.592zm13.294 3.463c.137-.011.267-.007.39.011 2.126.313 1.972 4.722-1.392 3.67-.253-1.444-.546-1.856-.433-3.115.542-.361 1.022-.533 1.435-.566zm1.936 5.014c1.218.13 2.182 1.81 3.92 1.7-.279 4.532-.133 9.08-1.398 13.232-2.357-4.322-3.744-9.54-6.795-13.217.322-.342.61-.721.926-1.071 1.382.578 2.284-.758 3.347-.644zm7.008 1.442c1.678-.013 3.052 1.084 3.807 2.297-2.364 4.05-4.626 8.208-7.43 11.78 1.175-3.458 1.679-9.245 1.857-13.657a4.222 4.222 0 0 1 1.766-.42zM71.71 76.03c2.8 3.554 4.504 8.125 6.38 12.537-4.432-1.336-8.96-3.504-12.844-5.702.762-3.304 3.75-5.016 6.464-6.835zm29.511 11.728c1.217.03 2.426 1.018 2.955 1.819.956 1.444 1.849 5.695 2.35 7.952.747 3.359-.932 6.629-3.603 7.277v.001c-1.944.472-4.926.596-6.199-.019 1.558-.851 3.899-.856 5.702-1.44-2.583-1.112-6.405-.064-9.511-.258-.375-3.835-.658-7.993-1.567-11.02 1.813-1.927 6.193-2.39 8.68-3.981a2.077 2.077 0 0 1 1.193-.331zm-.211 3.578c-3.183.094-5.67.937-7.09 2.938 2.583.165 4.443-2.408 7.09-2.938zm-12.54.785c.225.01.447.035.66.083 1.692 2.91 2.056 7.749 2 11.261-1.055.204-1.74.808-3.02.768-.327-4.001-1.256-8.208-1.638-12.02.61-.012 1.32-.12 1.997-.092zm-19.603.043c3.34-.054 6.58.142 9.385.726.685 4.453.43 8.845.93 13.21.662 5.808.166 12.434 1.3 17.876-6.173 1.913-14.59 1.728-21.574-.392-3.147-9.643-4.863-18.796-6.047-29.685 4.587-.858 10.437-1.645 16.006-1.735zm14.824.384c1.103 3.987 1.037 9.06 1.579 13.567-1.668.366-2.888.545-4.683.815-.357-4.682-.63-9.295-.566-13.971 1.272-.426 2.394-.4 3.67-.411zm14.486 2.296c-1.26.016-2.394.29-2.88 1.032 2.19.18 4.722-.17 6.88-.398-.984-.34-2.572-.653-4-.634zm-.361 3.24c-1.128.014-2.123.228-2.634.777 2.304.193 5.318.241 7.743.189-.983-.458-3.23-.99-5.11-.966zM83.098 108.82c.236-.037.45-.045.627.002.348 3.045 1.555 6.131 1.404 9.466-1.34.452-2.11.848-3.907.845-.126-2.834-.506-7.166-.392-9.868.662.044 1.561-.334 2.268-.445z"
    />
    <path
      fill="#81b0c4"
      d="M84.48 74.486a4.225 4.225 0 0 0-1.767.42c-.178 4.412-.68 10.199-1.856 13.656 2.805-3.571 5.066-7.73 7.43-11.779-.756-1.213-2.129-2.31-3.807-2.297zM71.71 76.03c-2.714 1.82-5.7 3.532-6.463 6.836 3.884 2.198 8.412 4.365 12.844 5.701-1.876-4.41-3.58-8.982-6.381-12.537z"
    />
    <path
      fill="#f0d6b7"
      d="M79.817 63.945c-1.218.795-2.255 1.787-3.424 2.636-2.593.128-4.008-.18-5.913-1.669.031-.12.223-.066.23-.213 2.775 1.237 6.304-.504 9.107-.754"
    />
    <path
      fill="#1d1919"
      d="M79.135 76.728a.94.94 0 1 1-1.881 0 .94.94 0 0 1 1.881 0m.941 4.361a.94.94 0 1 1-1.882 0 .94.94 0 0 1 1.882 0"
    />
  </svg>
);

const MySQLIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    fill="#00618A"
    {...props}
  >
    <path d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z" />
  </svg>
);

const SassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill="#CB6699"
      d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
    />
  </svg>
);

const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#F34F29"
      d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
    />
  </svg>
);

export {
  TailwindIcon,
  ReactIcon,
  JavascriptIcon,
  HTMLIcon,
  CSSIcon,
  TypescriptIcon,
  MySQLIcon,
  ViteIcon,
  JenkinsIcon,
  SassIcon,
  GitIcon,
};
