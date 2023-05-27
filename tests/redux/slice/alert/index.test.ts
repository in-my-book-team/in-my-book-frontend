import { fixtures } from './fixtures';
import method from '../../../../src/redux/alert/slice';

describe('alert slice', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it(`should handle ${fixtures.actions.showAlert.type}`, () => {
    const result = method(fixtures.state, fixtures.actions.showAlert);

    expect(result.isOpen).toEqual(true);
    expect(result.message).toEqual(fixtures.actions.showAlert.payload.message);
  });

  it(`should handle ${fixtures.actions.hideAlert.type}`, () => {
    const result = method(
      { ...fixtures.state, isOpen: true },
      fixtures.actions.hideAlert,
    );

    expect(result.isOpen).toEqual(false);
  });
});
