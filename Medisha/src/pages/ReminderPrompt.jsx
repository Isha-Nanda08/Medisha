import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReminderPrompt = ({ onConfirmReminder }) => {
  const [daysPrior, setDaysPrior] = useState(7); // default days prior to set reminder
  const navigate = useNavigate();

  const handleSetReminder = () => {
    onConfirmReminder(daysPrior);
    navigate('/calendar'); // Redirects to the calendar page
  };

  return (
    <div className="reminder-prompt">
      <h2>Set Reminder for Next Purchase</h2>
      <label>
        How many days before running out would you like a reminder?
        <input
          type="number"
          value={daysPrior}
          onChange={(e) => setDaysPrior(Number(e.target.value))}
          min="1"
          placeholder="Days before running out"
        />
      </label>
      <button onClick={handleSetReminder}>Set Reminder</button>
    </div>
  );
};

export default ReminderPrompt;
