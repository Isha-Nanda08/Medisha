import React, { useState } from 'react';
import ReminderPrompt from './ReminderPrompt';

const PurchaseSuccessPage = () => {
  const [showReminderPrompt, setShowReminderPrompt] = useState(true);

  const handleReminderConfirmation = (daysPrior) => {
    // Logic to save the reminder in the calendar (for now, just logging)
    console.log(`Reminder set ${daysPrior} days before running out.`);
    setShowReminderPrompt(false);
  };

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      {showReminderPrompt && <ReminderPrompt onConfirmReminder={handleReminderConfirmation} />}
    </div>
  );
};

export default PurchaseSuccessPage;
