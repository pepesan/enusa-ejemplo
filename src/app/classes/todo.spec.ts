import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  it('should have a text property', () => {
    expect(new Todo().text).toEqual("")
  });
});
