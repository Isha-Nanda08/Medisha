import React, { useState } from 'react';
import Home from "./pages/Home";

import Login from './pages/Login';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ConditionSearch from './pages/ConditionSearch';

// import ReminderCalendar from './pages/ReminderCalendar';
import PurchaseSuccessPage from './pages/PurchaseSuccessPage';
import CalendarPage from './pages/CalendarPage';
const App = () => {
  const [reminders, setReminders] = useState([]);

  // Function to handle reminder confirmation from PurchaseSuccessPage
  const handleReminderConfirmation = (daysPrior) => {
    const today = new Date();
    const reminderDate = new Date(today);
    reminderDate.setDate(today.getDate() + daysPrior);

    // Add a new reminder to the state
    setReminders((prevReminders) => [
      ...prevReminders,
      {
        date: reminderDate.toISOString().split('T')[0], // Storing date in YYYY-MM-DD format
        medicineName: "Your Medicine" // Placeholder, replace with actual medicine name if available
      }
    ]);
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        {/* <Route exact path="/calender" element={<RefillReminder/>}/> */}
        {/* <Route exact path="/reminder" element={<ReminderCalendar/>}/> */}
        {/* <Route exact path="/rebuy" element={<Rebuy/>}/> */}
        <Route exact path="/calendar" element={<CalendarPage reminders={reminders}/>}/>
        <Route exact path="/purchase-success" element={<PurchaseSuccessPage onConfirmReminder={handleReminderConfirmation}/>}/>
        {/* <Route exact path="/condition/:id" element={<ConditionSearch/>}/> */}
      </Routes>
    </Router>
    

  )
}

export default App
