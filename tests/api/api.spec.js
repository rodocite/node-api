// TODO: Research how to test API on big databases
// these tests would take forever on a large db

import expect from 'expect';
import request from 'request';

describe('/names', () => {
  const url = "http://localhost:8080/names";

  it('should return an a JSON array', (done) => {
    request(url, (error, response, body) => {
      expect(Array.isArray(JSON.parse(body))).toBe(true);
      done();
    });
  });

  it('elements should be objects with id and name keys', (done) => {
    request(url, (error, response, body) => {
      var data = JSON.parse(body);

      data.forEach(element => {
        var id = Boolean(element.id);
        var name = Boolean(element.name);
        expect(id && name).toBe(true);
      });

      done();
    });
  });
});
