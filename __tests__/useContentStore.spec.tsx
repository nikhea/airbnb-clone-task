import { useContentStore } from "../src/hooks/useContentStore";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useContentStore", () => {
  it("initializes with isListingVisible set to true", () => {
    const { result } = renderHook(() => useContentStore());
    expect(result.current.isListingVisible).toBe(true);
  });

  it("toggles the value of isListingVisible", () => {
    const { result } = renderHook(() => useContentStore());
    const { toggleListing } = result.current;

    act(() => {
      toggleListing();
    });

    expect(result.current.isListingVisible).toBe(false);

    act(() => {
      toggleListing();
    });

    expect(result.current.isListingVisible).toBe(true);
  });
});
