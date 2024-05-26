import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../../src/components/Footer";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";


describe("Footer Icons", () => {
  beforeEach(() => {
    render(<Footer />);
  });

   // Check for github icon and its path
  test("renders GitHub icon correctly", () => {
    const githubLink = screen.getByTestId("github-icon");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/Dipeshgehlot69"
    );
    expect(screen.queryByTestId("github-icon")).toContainHTML(
      render(<AiFillGithub />).container.innerHTML
    );
  });

  // Check for instagram icon and its path
  test("renders Instagram icon correctly", () => {
    const instagramLink = screen.getByTestId("instagram-icon");
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/dipesh324/"
    );
    expect(screen.queryByTestId("instagram-icon")).toContainHTML(
      render(<AiFillInstagram />).container.innerHTML
    );
  });

    // Check for twitter icon and its path
  test("renders Twitter icon correctly", () => {
    const twitterLink = screen.getByTestId("twitter-icon");
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute(
      "href",
      "https://twitter.com/Dipeshgehlot69"
    );
    expect(screen.queryByTestId("twitter-icon")).toContainHTML(
      render(<AiOutlineTwitter />).container.innerHTML
    );
  });
});
