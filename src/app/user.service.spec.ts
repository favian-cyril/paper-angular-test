import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users', async () => {
    const mockData = [{
      "id": 3,
      "name": "Foo Bar",
      "username": "Test",
      "email": "test@testing.com",
      "address": {
        "street": "Foo",
        "suite": "Bar",
        "city": "Baz",
        "zipcode": "123123",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "test.com",
      "company": {
        "name": "Foo Baz",
        "catchPhrase": "lorem ipsum",
        "bs": "lorem ipsum dolor"
      }
    }]
    const okResponse = new Response(JSON.stringify(mockData), { status: 200, statusText: 'OK', });
    const spy = spyOn(window, 'fetch').and.resolveTo(okResponse);
    const res = await service.getAllUsers();
    expect(res).toEqual(mockData);
    expect(spy).toHaveBeenCalled();
  })
  it('should return a specific user', async () => {
    const mockData = {
      "id": 3,
      "name": "Foo Bar",
      "username": "Test",
      "email": "test@testing.com",
      "address": {
        "street": "Foo",
        "suite": "Bar",
        "city": "Baz",
        "zipcode": "123123",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "test.com",
      "company": {
        "name": "Foo Baz",
        "catchPhrase": "lorem ipsum",
        "bs": "lorem ipsum dolor"
      }
    };
    const okResponse = new Response(JSON.stringify(mockData), { status: 200, statusText: 'OK', });
    const spy = spyOn(window, 'fetch').and.resolveTo(okResponse);
    const res = await service.getUser(3);
    expect(res).toEqual(mockData);
    expect(spy).toHaveBeenCalled();
  })
});
