import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutable', () => {

  describe('a number', () => {

    function increment(currentSate){
      return currentSate + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(state).to.equal(42);
      expect(nextState).to.equal(43);
    });

  });

  describe('a list', () => {

    function addMovie(currentState, movie){
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));

      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });

  });

  describe('a tree', () => {

    function addMovie(currentState, movie){
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      }));
      expect(state).to.equal(Map({
        movies: List.of('Trainspotting', '28 Days Later')
      }));
    });
  });

});