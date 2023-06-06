import { useRouteLoaderData, json, redirect } from 'react-router-dom';

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const id = params.id;
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete' },
      {
        status: 500,
      }
    );
  } else {
    return redirect('/events');
  }
};
