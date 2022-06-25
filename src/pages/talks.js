import React from "react";
import { useState } from "react";

import PageLayout from "../components/PageLayout";

import styled from "styled-components";
import { Link } from "gatsby";
import SEO from "../components/seo";

function Header({ children }) {
  return (
    <h2
      css={`
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-weight: normal;
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 170%;
        letter-spacing: 12px;
        margin-top: 4.2rem;
        line-height: 1;
        margin-bottom: 1.2rem;
        position: sticky;
        div {
          border-top: 1px solid black;
          margin-left: 1rem;
          margin-right: 1rem;
          margin-bottom: 0.4em;
          flex-grow: 1;
        }
        span {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          letter-spacing: 2px;
          div {
            display: none;
          }
        }
      `}
    >
      <span>{children}</span>
      <div />
    </h2>
  );
}

function Label({ label, children }) {
  return (
    <div
      css={`
        display: flex;
        margin: 0.65em 0em;

        @media (max-width: 768px) {
          display: block;
        }
      `}
    >
      <span
        css={`
          font-weight: bold;
          display: inline-block;
          min-width: 7ch;
          flex-shrink: 0;
          @media (max-width: 768px) {
            min-width: auto;
            margin-right: 1em;
          }
        `}
      >
        {label}
      </span>
      <span>{children}</span>
    </div>
  );
}

// TODO: add programming + free time.

const YoutubeEmbed = ({ url }) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

function Talk({ url, title, description, date, language, subject }) {
  return (
    <div
      css={`
        margin: 3rem 0rem;
      `}
    >
      <div
        css={`
          font-size: 70%;
          text-transform: uppercase;
          font-weight: 600;
          margin-left: 0.1rem;
          margin-top: -0.05rem;
        `}
      >
        {[subject, date, language].filter(Boolean).join(" • ")}
      </div>
      <h3
        css={`
          margin-bottom: 0.4rem;
          margin-top: 0.2rem;
        `}
      >
        {title}
      </h3>
      <div
        style={{
          marginBottom: "1em",
        }}
        css={`
          hyphens: auto;
          a {
            text-decoration: underline;
          }
        `}
      >
        {description}
      </div>
      <YoutubeEmbed url={url} />
    </div>
  );
}

function CV() {
  return (
    <PageLayout>
      <SEO title="Talks" />
      <h1>Talks</h1>
      <p
        css={`
          margin-top: 0em;
          margin-bottom: 0em;
        `}
      >
        This page lists some of the talks I gave recently in the context of my
        master's degree. I made them with the yet to be released presentation
        framework <em>Immersion</em>, which I developed for making mathematical
        presentations.
      </p>
      <Talk
        title="Master's Thesis Seminar: Morse Theory – A visual guide from handlebodies to the generalized Poincaré conjecture (slides)"
        date="May, 2020"
        language="English"
        subject="master's thesis"
        url="https://www.youtube.com/embed/IvfHUEwZiQk"
        description={
          <>
            My{" "}
            <a href="https://github.com/gillescastel/masterthesis">
              Master's thesis
            </a>{" "}
            was on Morse Theory and more specifically discusses a proof of the
            generalized Poincaré conjecture. I gave a one hour seminar
            discussing the contents of my thesis: Morse functions, handlebody
            decompositions, cobordisms, Morse homology, Morse inequalities,
            cancellation theorems resulting in the h-cobordism theorem, which
            finally implies the generalized Poincaré conjecture. The video below
            is me going through the slides.
          </>
        }
      />
      <Talk
        title="Connected sums and the Mazur swindle (slides only)"
        date="June, 2020"
        language="English"
        subject="differential topology"
        url="https://www.youtube.com/embed/-Ps2wN-v2Oc"
        description={
          <>
            This talk was part of my exam for Differential Topology. It
            discusses the subtleties of defining the connected sum for
            topological and differential manifolds, the monoid structure in the
            case of surfaces, and finally the irreducibility of the sphere. For
            this last topic, we follow a proof in the PhD thesis of Mazur,
            nowadays referred to as the Mazur swindle.
          </>
        }
      />
      <Talk
        title="What does a vector field know about volume?"
        date="November 3rd, 2020"
        language="English"
        subject="contact geometry"
        url="https://www.youtube.com/embed/gj0FnR8Fz70"
        description={
          <>
            In this talk, I discuss the origins and developments of contact
            geometry, only assuming basic knowledge of differential geometry.
            After important concepts and theorems are introduced, I discuss the
            similarly titled{" "}
            <a href="https://arxiv.org/abs/2003.06270" target="_blank">
              research paper
            </a>{" "}
            written by Hansjörg Geiges in 2020.
          </>
        }
      />
      <Talk
        title="Sensitivity conjecture"
        subject="computer science"
        description={
          <>
            The sensitivity conjecture is a conjecture in computer science that
            was unsolved for over 30 years. In 2019, Hao Huang proves that the
            conjecture is in fact true, and does so in an{" "}
            <a href="https://arxiv.org/abs/1907.00847" target="_blank">
              extremely elegant way
            </a>
            . This talk was in collaboration with two of my fellow students. We
            discuss the contents of the conjecture, developments and finally the
            proof of Huang, which was my part. The talk should be accessible to
            anyone with basic knowledge of linear algebra.
          </>
        }
        url="https://youtube.com/embed/GDNkDMOxC-I?start=1079"
        date="May 5th, 2020"
        language="English"
      />
      <Talk
        subject="Riemannian geometry"
        title="Theorem of Hadamard (slides only)"
        url="https://www.youtube.com/embed/hJeJ3mKpUdc"
        date="June, 2020"
        language="Dutch"
        description={
          <>
            This short talk was actually part of an exam on Riemannian geometry,
            which is why no recording is available. I introduce Jacobi vector
            fields, derive the Jacobi equation and prove two lemmas which
            eventually lead to the proof of the theorem of Hadamard:{" "}
            <em>
              ‘Any complete simply connected Riemannian manifold with negative
              sectional curvature is diffeomorphic to the Euclidian space’.
            </em>{" "}
            The video below is me going through the slides.
          </>
        }
      />
      <Talk
        subject="Riemann surfaces"
        title="Groups of Möbius transformations (slides only)"
        language="Dutch"
        url="https://www.youtube.com/embed/aXg_qtDSNgo"
        date="June, 2020"
        description={
          <>
            Just like the previous talk, this one was part of an exam on Riemann
            surfaces. I classify automorphisms of the unit disk, introduce the
            modular group PSL(2, ℤ), prove that it is generated by translation
            and circle reflection and deduce its fundamental region. I discuss
            an interpretation of its orbit space and end my talk with a brief
            discussion of Fuchs groups.
          </>
        }
      />
    </PageLayout>
  );
}

export default CV;
