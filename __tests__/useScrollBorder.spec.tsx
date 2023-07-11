import { useScrollBorder } from "../src/hooks/useScrollBorder";
import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
// import { renderHook, act } from "@testing-library/react-hooks/dom";

jest.mock("react-dom", () => ({
  render: jest.fn(),
  createRoot: jest.fn(),
}));

describe("useScrollBorder", () => {
  it("returns false when the page is not scrolled", () => {
    act(() => {
      const { result } = renderHook(() => useScrollBorder());
      const showBorder = result.current;
      expect(showBorder).toBe(false);
    });
  });

  it("returns true when the page is scrolled", () => {
    act(() => {
      const originalScrollY = window.scrollY;
      Object.defineProperty(window, "scrollY", { value: 100 });

      const { result } = renderHook(() => useScrollBorder());
      const showBorder = result.current;
      expect(showBorder).toBe(false);

      Object.defineProperty(window, "scrollY", { value: originalScrollY });
    });
  });
});
