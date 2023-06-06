import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const EventsLayout = () => {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
};

export default EventsLayout;
