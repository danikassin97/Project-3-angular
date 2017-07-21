import { ReservationsAngularPage } from './app.po';

describe('reservations-angular App', () => {
  let page: ReservationsAngularPage;

  beforeEach(() => {
    page = new ReservationsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
