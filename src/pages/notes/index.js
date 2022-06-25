import React from "react";
import {useState} from "react";

import PageLayout from "../../components/PageLayout";

import styled from "styled-components";

import {Link} from "gatsby";

import SEO from "../../components/seo";

import years from "./_data.js";

function maybeMakeGoogleDriveURLDirect(url) {
  if (!url.startsWith("https://drive.google.com/open?id=")) return url;
  return url.replace(
    "https://drive.google.com/open?id=",
    "https://drive.google.com/uc?export=download&id="
  );
}

function Course({course}) {
  if (course.image) {
    var imageURL = require(`./_images/${course.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\'/g, "")}.svg`).default;
  }
  return (
    <div
      css={`
        border: 1px solid gray;
        &:hover .background-image {
          opacity: 0.8;
        }
      `}
    >
      <div
        css={`
          position: relative;
          padding: 1em;
          border-bottom: 1px solid lightgray;
        `}
      >
        <div
          css={`
            font-size: 70%;
            text-transform: uppercase;
            font-weight: 600;
          `}
        >
          {course.stage[0]}
          {course.stage.split(" ")[1]}
          {" • "}
          {course.year}
          {" • "}
          {course.lang}
          {" • "}
          {course.url && (
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={course.url}
            >
              {course.url.match(/(G|X)....../)[0]}
            </a>
          )}
          {" • "}
          {course.sp} ECTS
        </div>
        <h3>{course.title}</h3>
        {imageURL && (
          <div
            className="background-image"
            css={`
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              // height: 4em;
              bottom: 0;
              opacity: 0.6;
              transition: 0.1s opacity;
              z-index: -1;
              background-image: url(${imageURL});
              background-position: center center;
              background-size: cover;
            `}
          />
        )}
      </div>

      <div css={``}>
        <ul
          css={`
            list-style: none;
            padding: 0;
          `}
        >
          {course.files.map(({name, url, description}) => {
            return (
              <li
                css={`
                  margin: 0;
                  padding: 0;
                `}
              >
                <a
                  rel="nofollow noopener noreferrer"
                  href={maybeMakeGoogleDriveURLDirect(url)}
                  css={`
                    padding: 0.5em 1em;
                    width: 100%;
                    display: inline-block;
                    &:hover {
                      cursor: pointer;
                      background: #f7f7f7;
                    }
                  `}
                >
                  <span
                    css={`
                      font-weight: 600;
                    `}
                  >
                    {name}
                  </span>
                  {description && (
                    <div
                      css={`
                        font-size: 80%;
                      `}
                    >
                      {description}
                    </div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Grid({header, courses}) {
  return (
    <>
      <h2
        style={{
          marginTop: "2em",
          marginBottom: "1em",
        }}
      >
        {header}
      </h2>
      <div
        css={`
          display: grid;
          grid-gap: 1em;
          grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
          grid-auto-flow: row;
          // align-items: start;
        `}
      >
        {courses.map((course) => (
          <Course key={course.title} course={course} />
        ))}
      </div>
    </>
  );
}

function Notes() {
  const allCourses = years.flatMap((year) =>
    year.courses.map((c) => ({
      ...c,
      stage: year.stage,
      year: year.year,
    }))
  );

  const allUrls = allCourses
    .flatMap((course) => course.files)
    .map((file) => file.url);

  // console.log('All urls are unique?', new Set(allUrls).size == allUrls.length)

  return (
    <PageLayout large>
      <SEO title="Lecture Notes" />
      <div>
        <h1>Lecture Notes</h1>
        <p
          css={`
            max-width: 700px;
            margin-bottom: 2em;
          `}
        >
          These are a selection of my notes of courses taught at KU Leuven KULAK
          or at KU Leuven.{" "}
          {/*Most of these notes will only be useful to other KULeuven
          students, but not all of them: some notes I shared simply because they
          contain beautiful figures, like the report on Newton fractals, and
          some because they discuss interesting problems that I haven't found a
          detailed explanation on online, for example Takehome II of Relativity.*/}
          If you're interested in the L
          <span
            style={{
              position: "relative",
              top: "0.2em",
              marginLeft: "-0.05em",
              marginRight: "-0.15em",
            }}
          >
            A
          </span>
          T
          <span
            style={{
              position: "relative",
              top: "0.2em",
              marginLeft: "-0.1em",
              marginRight: "-0.05em",
            }}
          >
            E
          </span>
          X code, have a look on <a href='https://github.com/gillescastel/lecture-notes' >Github</a>.
        </p>
        <Grid
          header="Master"
          courses={allCourses.filter((c) => c.stage.startsWith("Master"))}
        />
        <Grid
          header="Bachelor"
          courses={allCourses.filter((c) => c.stage.startsWith("Bachelor"))}
        />
      </div>
    </PageLayout>
  );
}

export default Notes;
