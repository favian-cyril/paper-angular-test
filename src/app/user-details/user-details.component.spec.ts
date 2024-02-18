import { UserDetailsComponent } from './user-details.component';
import { render, waitFor, screen } from '@testing-library/angular';

describe('UserDetailsComponent', () => {
  it('should display user details if data is returned', async () => {
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
    }
    const okResponse = new Response(JSON.stringify(mockData), { status: 200, statusText: 'OK', });
    spyOn(window, 'fetch').and.resolveTo(okResponse);
    await render(UserDetailsComponent)
    await waitFor(() => {
      expect(screen.getByText('Foo Bar')).toBeInTheDocument()
      expect(screen.getByText('Test')).toBeInTheDocument()
      expect(screen.getByText('test@testing.com')).toBeInTheDocument()
      expect(screen.getByText('1-463-123-4447')).toBeInTheDocument()
      expect(screen.getByText('test.com')).toBeInTheDocument()
      expect(screen.getByText('Bar')).toBeInTheDocument()
      expect(screen.getByText('Foo')).toBeInTheDocument()
      expect(screen.getByText('Baz')).toBeInTheDocument()
      expect(screen.getByText('123123')).toBeInTheDocument()
      expect(screen.getByText('-68.6102, -47.0653')).toBeInTheDocument()
      expect(screen.getByText('Foo Baz')).toBeInTheDocument()
      expect(screen.getByText('lorem ipsum')).toBeInTheDocument()
      expect(screen.getByText('lorem ipsum dolor')).toBeInTheDocument()
    })
  });
  it('should show not found if user not found', async () => {
    const okResponse = new Response(JSON.stringify({}), { status: 200, statusText: 'OK', });
    spyOn(window, 'fetch').and.resolveTo(okResponse);
    await render(UserDetailsComponent)
    await waitFor(() => {
      expect(screen.getByText('User not found')).toBeInTheDocument()
    })
  })
});
