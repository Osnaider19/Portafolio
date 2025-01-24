export const studies = [
  {
    title: "Técnico en desarrollo de software",
    corporation: "SENA - Montería (Córdoba) ",
    date: "02/2019 – 12/2019",
  },
  {
    title: "Desarrollador Front-end React Js",
    corporation: "Alura Latam - Remoto",
    date: "04/2023 – 09/2023",
  },
  {
    title: "Curso profesional de React Js",
    corporation: "Código facilito - Remoto",
    date: "04/2023 – 04/2023",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },

  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },
  {
    title: "Styled Components",
    icon: IconKeys.styled,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "Radix UI",
    icon: IconKeys.radix,
  },

  {
    title: "React Query",
    icon: IconKeys.reactQuery,
  },
  {
    title: "Vite",
    icon: IconKeys.vite,
  },
  {
    title: "Zustand",
    icon: IconKeys.zustand,
  },

  {
    title: "Shadcn UI",
    icon: IconKeys.shadcn,
  },
  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
];

export const projects = [
  {
    img: "../../../img/ecommerce-stripe-2.webp",
    title: "Ecommerce Stripe",
    link: "https://ecommerce-stripe-763m.vercel.app/",
    description: `Proyecto FullStack de un ecommerce con pasarela de pagos stripe integrada, destalles de el product etc.  `,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.mongodb,
      },
      {
        icon: IconKeys.stripe,
      },
    ],
  },
  {
    img: "../../../img/nexanime.webp",
    title: "NexAnime",
    link: "https://nexanime.vercel.app",
    description: `plataforma de anime para ver los animes en tendencia , más valorados , estadísticas.`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/cyberpunk.webp",
    title: "cyberpunk",
    link: "https://preeminent-liger-266356.netlify.app/",
    description: `este proyecto se trata de un clon de la pagína de cyberpunk , donde
      el ususario puede ver los tailer de él juegos y también los
      episodios de la serie....`,
    technologies: [
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
    ],
  },
  {
    img: "../../../img/store-games.webp",
    title: "Store games",
    link: "https://store-games-site.netlify.app/",
    description: `Simulando una página de juegos , consumiendo la API de rawg api
      donde los usuarios pueden buscar videojuegos, ver sus detalles como
      creadores , calificaciones,tiendas donde comprar.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.reactQuery,
      },
    ],
  },
  {
    img: "../../../img/movie.webp",
    title: "Movie Tv",
    link: "https://movietvsite.netlify.app/",
    description: `simulando una página de películas , consumiendo la API de themovietv
              donde los usuarios pueden buscar películas y ver trailer.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },

  {
    img: "../../../img/fit-nation.webp",
    title: "gym",
    link: "https://fitnation.netlify.app/",
    description: `landing page de una gym por ahora es una landing todavia está en
              desarrollo la idea es que los usuarios puedan comprar productos de
              el gym`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/spotify.webp",
    title: "Spotify-Clone",
    link: "https://www.linkedin.com/posts/osnaider-mart%C3%ADnez_clon-de-la-p%C3%A1gina-de-spotify-echo-con-react-activity-7119712602342965248-upgL?utm_source=share&utm_medium=member_desktop",
    description: `Clon de la página de Spotify con autenticación de usuario, reproductor de canciones, etc `,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.redux,
      },
      {
        icon: IconKeys.reactQuery,
      },
    ],
  },

  {
    img: "../../../img/landing.webp",
    title: "Landing Realidad Virtual",
    link: "https://realityvirtual.netlify.app/",
    description: `landing page de gafas de realidad virtual donde se muestra el
              producto y como funciona`,
    technologies: [
      {
        icon: IconKeys.astro,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/tasks-manager.webp",
    title: "Tasks Manager",
    link: "https://task-manager-ecru-chi.vercel.app/dashboard",
    description: `Administrador de tareas con drag and drop autenticación con Clerk , shadcn.  "En Desarrollo "`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.zustand,
      },
      {
        icon: IconKeys.shadcn,
      },
    ],
  },
];
