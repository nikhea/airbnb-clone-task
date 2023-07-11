import { useCategoryStore } from "../src/hooks/useCategoryStore";
// import { act, renderHook } from "@testing-library/react-hooks";
import { renderHook, act } from "@testing-library/react-hooks/dom";

describe("useCategoryStore", () => {
  it("initializes with selectedCategory set to an empty string", () => {
    const { result } = renderHook(() => useCategoryStore());
    expect(result.current.selectedCategory).toBe("");
  });

  it("sets the selectedCategory to the provided category", () => {
    const { result } = renderHook(() => useCategoryStore());
    const { setSelectedCategory } = result.current;

    act(() => {
      setSelectedCategory("electronics");
    });

    expect(result.current.selectedCategory).toBe("electronics");
  });
});
