import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import NewEventPage from './pages/NewEvent';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EditEventPage from './pages/EditEvent';
import EventsLayout from './pages/EventsLayout';
import ErrorPage from './pages/Error';
import { action as addEvent } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                action: deleteEventAction,
                element: <EventDetailPage />,
              },
              {
                path: 'edit',
                action: addEvent,
                element: <EditEventPage />,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: addEvent,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

export default router;
