import { ListingData } from "../src/data/listingDataDemo";
import { useListingFilter } from "../src/hooks/useFiliterList";
import { renderHook } from "@testing-library/react-hooks";

describe("useListingFilter", () => {
  it("returns the full listing data when category is undefined or 'rooms'", () => {
    const { result } = renderHook(() => useListingFilter(undefined));
    const filteredData = result.current;
    expect(filteredData).toEqual(ListingData);

    const { result: result2 } = renderHook(() => useListingFilter("rooms"));
    const filteredData2 = result2.current;
    expect(filteredData2).toEqual(ListingData);
  });

  it("returns filtered listing data based on the category", () => {
    const { result } = renderHook(() => useListingFilter("pools"));
    const filteredData = result.current;
    const expectedData = ListingData.filter(
      (item) => item.category === "pools"
    );
    expect(filteredData).toEqual(expectedData);
  });
});
