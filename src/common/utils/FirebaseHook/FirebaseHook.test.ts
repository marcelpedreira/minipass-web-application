import useFirebase from "./FirebaseHook";
import { renderHook, act } from "@testing-library/react-hooks";

jest.mock("axios");

// describe("makeRequest", () => {
//   it("should return data with a successful request", async () => {
//     const data = {
//       data: {
//         hits: [
//           {
//             objectID: "1",
//             title: "a",
//           },
//           {
//             objectID: "2",
//             title: "b",
//           },
//         ],
//       },
//     };

//     axios.mockResolvedValue({
//       data,
//     });

//     const response = await makeRequest({
//       endpoint: "some-endpoint",
//       token: "some-token",
//       method: "get",
//     });

//     expect(response).toEqual({ data });
//     expect(axios).toHaveBeenCalledWith({
//       method: "get",
//       url: `${baseURL}/some-endpoint`,
//       responseType: "json",
//       headers: { ["Authorization"]: "Bearer some-token" },
//     });
//   });
// });

describe("useFirebase", () => {
  it("should return data with a successful request", async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: "1",
            title: "a",
          },
          {
            objectID: "2",
            title: "b",
          },
        ],
      },
    };

    axios.mockResolvedValue({
      data,
    });

    const { result } = renderHook(() => useFirebase());

    act(() => {
      result.current.fetchData("some-collection");
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      result.current.getData({ endpoint: "some-endpoint" });
    });

    expect(result.current.data).toEqual(data);
    expect(result.current.loading).toBe(false);
  });

  it("fetches erroneously data from an API", async () => {
    const error = new Error("some-error");
    axios.mockImplementationOnce(() => Promise.reject(error));
    const { result } = renderHook(() => useApi());

    await act(async () => {
      result.current.getData({ endpoint: "some-endpoint" });
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual(error);
  });
});
