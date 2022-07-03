import { render, screen } from "@testing-library/react";
import Footer from "../components/HeaderFooter/Footer";

describe("testing for Footer documents", () => {
  it("should render the link in the Footer document", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /hubungi kami/i }));
    expect(screen.getByRole("link", { name: /tentang kami/i }));
  });
});
