import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../../src/components/Sidebar";
import { expect, test } from "vitest";

test("renders name and contact info", () => {
    render(<Sidebar />);
    expect(screen.getByText("Anahita Gheysari")).toBeInTheDocument();
    expect(screen.getByText(/fateme\.gheysari8686@gmail\.com/i)).toBeInTheDocument();
});
