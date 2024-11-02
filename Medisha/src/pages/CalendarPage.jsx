import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

const CalendarPage = ({ reminders }) => {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();

  const handleClickDate = (date) => {
    const reminder = reminders.find((reminder) => reminder.date === date.toISOString().split('T')[0]);
    if (reminder) {
      alert(`Reminder: Time to rebuy ${reminder.medicineName}`);
      navigate('/rebuy'); // Redirects to rebuy page
    }
  };

  return (
    <div>
      <h2>Your Medicine Reminders</h2>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={handleClickDate}
      />
    </div>
  );
};

export default CalendarPage;
