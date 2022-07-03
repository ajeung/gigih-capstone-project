import { render, screen } from "@testing-library/react";
import DoctorCard from "../components/DoctorCard/index";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  }),
}));

describe("testing for Doctor Card document", () => {
  it("should render elements in the Doctor Card document", () => {
    const { container } = render(<DoctorCard />);

    const photo = container.getElementsByClassName("doctor_photo");
    const title = container.getElementsByClassName("doctor_detail");
    const speciality = container.getElementsByClassName("rating");

    expect(photo.length).toBe(1);
    expect(title.length).toBe(1);
    expect(speciality.length).toBe(1);
  });

  it("should render the button and hovering in the Doctor Card document", () => {
    render(<DoctorCard />);
    const chat = screen.getByText("Chat");
    userEvent.hover(chat);
    userEvent.unhover(chat);
  });
});
