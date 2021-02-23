import useFirebase from "./FirebaseHook";
import { renderHook, act } from "@testing-library/react-hooks";
import {CardHolder} from 'modules/CardHolders/containers/CardHoldersContainer'

// jest.mock("axios");

describe("useFirebase", () => {
  it("should return data with a successful request", async () => {
    const data: CardHolder[] = [
      {id: '1', name: 'user1', card_number: '111111'},
      {id: '2', name: 'user2', card_number: '222222'}
    ];

    // axios.mockResolvedValue({
    //   data,
    // });

    const { result } = renderHook(() => useFirebase());

    act(() => {
      result.current.fetchData("some-data");
    });

    expect(result.current.state.isloading).toBe(true);

    await act(async () => {
      result.current.fetchData("some-collection");
    });

    expect(result.current.state.data).toEqual(data);
    expect(result.current.state.isloading).toBe(false);
  });

  it("fetches erroneously data from an API", async () => {
    const error = new Error("some-error");
    // axios.mockImplementationOnce(() => Promise.reject(error));
    const { result } = renderHook(() => useFirebase());

    await act(async () => {
      result.current.fetchData("some-data");
    });

    expect(result.current.state.data).toBe(null);
    expect(result.current.state.error).toEqual(error);
  });
});
