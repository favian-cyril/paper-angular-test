import { UserListComponent } from './user-list.component';
import { render, screen, waitFor } from '@testing-library/angular';

describe('UserListComponent', () => {
  it('should render list of users if data is returned', async () => {
    const okResponse = new Response(JSON.stringify([{ id: 1, name: 'Test User 1', email: 'test@test.com', website: 'testing.com'}]), { status: 200, statusText: 'OK', });
    spyOn(window, 'fetch').and.resolveTo(okResponse);
    await render(UserListComponent)
    await waitFor(() => {
      expect(screen.getByText('Test User 1')).toBeInTheDocument()
      expect(screen.getByText('test@test.com')).toBeInTheDocument()
      expect(screen.getByText('testing.com')).toBeInTheDocument()
    })
  });
  it('should show no data if empty data is returned', async () => {
    const okResponse = new Response(JSON.stringify([]), { status: 200, statusText: 'OK', });
    spyOn(window, 'fetch').and.resolveTo(okResponse);
    await render(UserListComponent)
    await waitFor(() => {
      expect(screen.getByText('No data')).toBeInTheDocument()
    })
  })
});
