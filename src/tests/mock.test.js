import { describe } from "jest-circus";
import '@testing-library/jest-dom';

describe("Mock functions", () => {
  it("returns undefined by default", () => {
    const mock = jest.fn();
    let result = mock("foo");
    //tester que result est bien undefined
    expect(result).toBeUndefined();

    //tester que la fonction mock a bien été appelée
    expect(mock).toHaveBeenCalled();

    //appeler à nouveau la fonction mock
    mock("foo2");

    //tester que la fonction mock a bien été appelée 2 fois
    expect(mock).toHaveBeenCalledTimes(2);

    //tester que la fonction mock a bien été appelée avec le paramètre foo2
    expect(mock).toHaveBeenCalledWith("foo2");
  });

  const doAdd = (a, b, callback) => {
    let add = a + b + 3;
    callback(add);
  };

  it("calls callback with arguments added", () => {
    //mocker la fonction de callback puis appeler la fonction doAdd avec a=1 et b=2
    const mock = jest.fn();
    doAdd(1, 2, mock);

    // lance la fonction doAdd avec 1, 2 et le mock de la fonction de callback

    //vérifiez que la fonction a été appelée avec le bon paramètre
    expect(mock).toHaveBeenCalledWith(6);

    //vérifiez que la fonction mock a été appelée une seule fois
    expect(mock).toHaveBeenCalledTimes(1);
    
  });
});
