import useFirebase from "./FirebaseHook";
import { renderHook, act } from "@testing-library/react-hooks";

jest.mock('firebaseConfig', () => ({
  firestore: () => ({
    collection: () => ({
      get: () => Promise.resolve({
        docs: [
          {
            ref: {id: 'abc123'},
            data: () => ({ name: 'vermont', card_number: '111111' })
          },
          {
            ref: {id: '123abc'},
            data: () => ({ name: 'maine', card_number: '222222' })
          }
        ]
      })
    })
  })
}));

describe("useFirebase", () => {
  it("should return data with a successful request", async () => {

    const { result } = renderHook(() => useFirebase());


    act(() => {
      result.current.fetchCol("some-data");
    });

    expect(result.current.state.isloading).toBe(true);

    await act(async () => {
      result.current.fetchCol("some-collection");
    });

    expect(result.current.state.data).toEqual([{ id: 'abc123', name: 'vermont', card_number: '111111' }, { id: '123abc', name: 'maine', card_number: '222222' }]);
    expect(result.current.state.isloading).toBe(false);
  });

  // it("fetches erroneously data from an API", async () => {
  //   const error = new Error("some-error");
  //   // axios.mockImplementationOnce(() => Promise.reject(error));
  //   const { result } = renderHook(() => useFirebase());

  //   await act(async () => {
  //     result.current.fetchData("some-data");
  //   });

  //   expect(result.current.state.data).toBe(null);
  //   expect(result.current.state.error).toEqual(error);
  // });
});
