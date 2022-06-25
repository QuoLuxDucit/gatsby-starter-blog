const years = [
  {
    stage: "Bachelor 1",
    year: "16-17",
    courses: [
      {
        title: "Analysis I",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/n/G0N30BN.htm",
        sp: 9,
        year: "16-17",
        lang: "nl",
        files: [
          {
            name: "Lecture notes",
            description:
              "Real numbers, limits, topology of R, (uniform) continuity, sequences of functions, derivatives of functions, series in C, metric spaces, completeness",
            url:
              "https://drive.google.com/open?id=19s_im6uKgmo2JysT6Xc5KFVAmPWj9Pzv",
          },
          {
            name: "Exercise sessions",
            description:
              "Solutions to biweekly exercise sessions. Feedback added in green",
            url:
              "https://drive.google.com/open?id=1Bp_5DJkWt96Mni4PCVON6qE5N6aPwTVA",
          },
        ],
        image: true,
      },
    ],
  },
  {
    stage: "Bachelor 2",
    year: "17-18",
    courses: [
      {
        title: "Analysis II",
        sp: 6,
        year: "17-18",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/n/G0N86BN.htm",
        lang: "nl",
        files: [
          {
            name: "Summary",
            description: "Overview of all theorems and propositions",
            url:
              "https://drive.google.com/open?id=1bv409J367FP94xCQEylemrys6P7WhHY2",
          },
        ],
        image: true,
      },
      {
        title: "Numerical analysis",
        sp: 5,
        year: "17-18",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/n/X0A43AN.htm",
        lang: "nl",
        files: [
          {
            name: "Report: Newton fractals",
            description:
              "Contains some of the most beautiful plots I've ever made. Also covers Bairstow",
            url:
              "https://drive.google.com/open?id=1GrsySYoLfLXLGZJ5EP74fQpt4BWxqa5E",
          },
          {
            name: "Code: Newton fractals",
            description: "Code accompanying the report",
            url:
              "https://drive.google.com/open?id=1kTot3-ywNYYGaRfqTu-cCrtBy5Ne6jOe",
          },
        ],
        image: true,
      },
      {
        title: "Differential equations",
        sp: 9,
        year: "17-18",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/n/X0C11AN.htm",
        lang: "nl",
        files: [
          {
            name: "Report: van der Pol equation",
            description:
              "Numerical analysis of a non-linear ODE via linearization, Euler and Runge-Kutta method using Python",
            url:
              "https://drive.google.com/open?id=13_ZUAY3jKSfVbs3VtjLcox1-4ppfj-57",
          },
        ],
        image: true,
      },
      {
        title: "Algebra I",
        sp: 6,
        year: "17-18",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/n/X0A65CN.htm",
        lang: "nl",
        files: [
          {
            name: "Lecture notes",
            description:
              "Dual spaces, bilinear forms, groups, rings, factor rings, polynomial rings, divisbility, field extensions, Wedderburn theorem, Cayley-Hamilton, Jordan decomposition",
            url:
              "https://drive.google.com/open?id=13an-mC0aQjc_OcDMk__q1MG-9pbRLNR6",
          },
        ],
        image: true,
      },
    ],
  },
  {
    stage: "Bachelor 3",
    year: "18-19",
    courses: [
      {
        title: "Topology",
        year: "18-19",
        sp: 6,
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/X0D95AE.htm",
        lang: "en",
        files: [
          {
            name: "Lecture notes",
            description: "General topology, following Munkres",
            url:
              "https://drive.google.com/open?id=1VSHe4Pm866TxpmwzWBtoAr_Ds0Bv54PM",
          },
          {
            name: "Takehome I",
            description: "On the Zariski topology",
            url:
              "https://drive.google.com/open?id=1ptE0oj6PEshZWQt2lCSJ2UEZ7ZjWx4-J",
          },
          {
            name: "Takehome II",
            description: "Product topology, Cantor set",
            url:
              "https://drive.google.com/open?id=10Li65Nc3_dEbGPk_eP6I5Ou9hfVWy4QZ",
          },
          {
            name: "Takehome III",
            description: "Compact versus Lindelöf",
            url:
              "https://drive.google.com/open?id=1rtUAyGOsHGKOROfrCVbpnn3R_qeJHgkk",
          },
          // {name: 'Implications', url: 'blabla'},
          // {name: 'Connectedness', url: 'blabla'},
        ],
        image: true,
      },
      {
        title: "Complex analysis",
        sp: 6,
        year: "18-19",
        lang: "en",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/n/X0C93BN.htm",
        files: [
          {
            name: "Lecture notes",
            description:
              "Complex numbers, power series and holomorphic functions, integration, Cauchy theorem, Morera, Schwarz reflection, meromorphic functions, residue theorem, argument and maximum modules principle, homotopies, logarithm,  conformal mappings, Riemann mapping theorem",
            url:
              "https://drive.google.com/open?id=1PkLRHconRAlG2boVadfpkePuqhhHtNom",
          },
        ],
        image: true,
      },
      {
        title: "Bachelor's Thesis",
        sp: 6,
        year: "18-19",
        lang: "nl",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/n/X0D42AN.htm",
        files: [
          {
            name: "Thesis",
            description: "Elliptic curves and cryptography",
            url:
              "https://drive.google.com/open?id=1UacpvR0vb3ZoMQZ4crLjkWvTNiNamdUm",
          },
          {
            name: "Presentation",
            description:
              "Basics of RSA, elliptic curves and elliptic curve cryptography, algorithm of Lenstra",
            url:
              "https://drive.google.com/open?id=16XTZYX3BIahwjUbBLiM7jfZUsRd7bc6W",
          },
          // {name: 'Repository', description: 'Python code TODO', url: 'TODO'}
        ],
        image: true,
      },
    ],
  },
  {
    stage: "Master 1",
    year: "19-20",
    courses: [
      {
        title: "Algebraic Topology",
        sp: 6,
        year: "19-20",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/G0A84AE.htm",
        lang: "en",
        files: [
          {
            name: "Lecture notes",
            description:
              "Munkres: Fundamental groups, covering spaces, Seifert-Van Kampen, classification of covering spaces. Vick: Singular homology, Mayer-Vietoris, maps from spheres to spheres, hairy ball theorem, ham sandwich theorem, etc.",
            url:
              "https://drive.google.com/open?id=1bJPrXTVYBLFrztq334IoX9GtEfvEYPYu",
          },
          // {
          //   name: 'Problems',
          //   description: '10 solved problems',
          //   url:
          //     'https://drive.google.com/open?id=1nbxkCcYnkD_GgdgvaytuC8iw8Ac8myZH'
          // }
        ],
        image: true,
      },
      {
        title: "Differential geometry",
        year: "19-20",
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/G0B08AE.htm",
        sp: 6,
        lang: "en",
        files: [
          {
            name: "Lecture notes",
            description:
              "Differentiable manifolds, tangent vectors, vector fields, bundles, differential forms and integration, exterior derivative and Stokes theorem, de Rham cohomology, foliations, Lie groups and Lie algebras",
            url:
              "https://drive.google.com/open?id=1Ja6Zl-smsejKgS7h6LhRGBblCapQcWbj",
          },
          // {
          //   name: 'Takehome I',
          //   description:
          //     'Embedding of product of spheres, derivative of a map, Lie bracket, flow, existence of Riemmanian metrics',
          //   url:
          //     'https://drive.google.com/open?id=1TVl35_IVMuQ3HR3zmuzq3DKllMTqnNUo'
          // },
          // {
          //   name: 'Takehome II',
          //   description:
          //     'Volume form om spheres, orientability of RP², de Rham cohomology, folliations, Lie algebras and  morphisms',
          //   url:
          //     'https://drive.google.com/open?id=1004YmUErVRPuK5Y65dF7THsfKelRbFRS'
          // }
        ],
        image: true,
      },
      {
        title: "Functional Analysis",
        year: "19-20",
        sp: 6,
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/G0B03AE.htm",
        lang: "en",
        files: [
          {
            name: "Lecture notes",
            description:
              "Banach, Hilbert spaces, bounded and compact compact operators, Hahn-Banach extension theorem, Baire category, open mapping, closed graph, uniform boundedness, weak topologies, Banach-Alaoglu, Hahn-Banach separation theorem, amenability of groups, Krein-Milman",
            url:
              "https://drive.google.com/open?id=1sbzI2u0ZRhYK9T8p3levkdCnNFv0Z7qr",
          },
          {
            name: "Takehome I",
            description:
              "Polar decomposition, Volterra operator, Borel functional calculus",
            url:
              "https://drive.google.com/open?id=1eM7IAhkD5UtKlR9fbGFJ5t1N4vK35g_I",
          },
          {
            name: "Takehome II",
            description:
              "Properties of bounded operators, weak topology, ... Extreme points",
            url:
              "https://drive.google.com/open?id=1RySb6ckKlrOygmE8-Gn7-FqWe1_2cUjH",
          },
        ],
        image: true,
      },
      // {
      //   title: 'Relativity',
      //   year: '19-20',
      //   sp: 6,
      //   url: 'https://onderwijsaanbod.kuleuven.be/syllabi/e/G0I36AE.htm',
      //   lang: 'en',
      //   files: [
      //     {
      //       name: 'Takehome I',
      //       description:
      //         'Riemann tensor of the 3-sphere, GPS time dilation due to gravity',
      //       url:
      //         'https://drive.google.com/open?id=1M6QQvBEkvUr38tKizxXd0q3HWuI1ndhT'
      //     },
      //     {
      //       name: 'Takehome I: Mathematica notebook',
      //       description: 'Notebook accompanying the first takehome',
      //       url:
      //         'https://drive.google.com/open?id=1fmiogoWKAdznufnGyKECIotSTsfx_yJg'
      //     },
      //     {
      //       name: 'Takehome II',
      //       description:
      //         'Solving Einsteins equation in vacuuum with Λ ≠ 0, potential of radial geodesics, Komar integral for angular momentum of Kerr metric',
      //       url:
      //         'https://drive.google.com/open?id=19QDNjk-0JhfjhLVQGaBxTBmxT9LFT7rc'
      //     },
      //     {
      //       name: 'Takehome II: Mathematica notebook',
      //       description:
      //         'Notebook accompanying the second takehome',
      //       url:
      //         'https://drive.google.com/open?id=1YsNHN5zXUTdhbdaoIPhqzwME0IuiLJ1W'
      //     }
      //   ],
      //   image: true
      // },
      {
        title: "Symplectic Geometry",
        year: "19-20",
        sp: 6,
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/G0B11AE.htm",
        lang: "en",
        files: [
          {
            name: "Lecture notes",
            description:
              "Symplectic manifolds, Hamiltonian mechanics, Moser theorem, Darboux theorem, Weinstein lagrangian neighbourhood theorem, Lie groups, Lie group actions, Moment maps, Symplectic reduction, convexity properties of moment maps",
            url:
              "https://drive.google.com/open?id=18XNkeFR3jJ69REKhMqdKTlSVGH3a7FVC",
          },
        ],
        image: true,
      },
      {
        title: "Riemann surfaces",
        year: "19-20",
        sp: 6,
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/G0B05AE.htm",
        lang: "en",
        files: [
          {
            name: "Lecture notes",
            description:
              "Riemann surfaces, Riemann Hurwitz formula, Meromorphic functions on the complex torus, analytical continuation, holomorphic, meromorphic, harmonic differential forms, Hodge decomposition theorem, Abels' theorem, Jacobi inversion theorem",
            url:
              "https://drive.google.com/open?id=1kXVklz1lRlQxUGNOye3Ff_ZdU9kNQzMe",
          },
        ],
        image: true,
      },
    ],
  },
  {
    stage: "Master 2",
    year: "20-21",
    courses: [
      {
        title: "Group theory",
        year: "20-21",
        sp: 6,
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/G0A85AE.htm",
        lang: "en",
        files: [
          {
            name: "Lecture notes",
            description:
              "Representation theory, Character theory, Nilpotent groups, Polycylic groups, Group (co)homology, Group extensions",
            url:
              "https://drive.google.com/open?id=12UnmLq4rYlWV5v686-Ng0IMh9YeQyrBZ",
          },
        ],
        image: true,
      },
      {
        image: true,
        title: "Differential Topology",
        year: "20-21",
        sp: 6,
        url: "https://onderwijsaanbod.kuleuven.be/2020/syllabi/v/e/G0B12AE.htm",
        lang: "en",
        files: [
          {
            name: "Report",
            description: "Connected sums and the Mazur swindle",
            url:
              "https://drive.google.com/open?id=1Kc-powlowxxy8cJh11bnJ1MBMfGXbeCS",
          },
          {
            name: "Report",
            description: "Classification of vector bundles on spheres",
            url:
              "https://drive.google.com/open?id=1dTT7e5OV9EU2CYfF5jwSKUhdm0lU25yX",
          },
        ],
      },
      {
        image: true,
        title: "Advanced Reading Course",
        year: "20-21",
        sp: 6,
        url: "https://onderwijsaanbod.kuleuven.be/2020/syllabi/e/G0V75AE.htm",
        lang: "en",
        files: [
          {
            name: "Report",
            description:
              "A classification of topologically stable Poisson structures on a compact oriented surface",
            url:
              "https://drive.google.com/open?id=1N66Cc1TVEL_Xl5g9JGR7im6MRjjet2_Q",
          },
        ],
      },
      {
        title: "Master's thesis",
        year: "20-21",
        sp: 30,
        url: "https://onderwijsaanbod.kuleuven.be/syllabi/e/G0K97AE.htm",
        lang: "en",
        files: [
          {
            name: "Final version (+ LaTeX)",
            description:
              "Morse Theory: A visual guide from handlebodies to the generalized Poincaré conjecture",
            url: "https://github.com/gillescastel/masterthesis",
          },
        ],
        image: true,
      },
    ],
  },
];

module.exports = years;
