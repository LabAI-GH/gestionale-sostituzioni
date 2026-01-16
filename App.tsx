
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SubstitutionView from './components/SubstitutionView';
import CreateSubstitutionForm from './components/CreateSubstitutionForm';
import Dashboard from './components/Dashboard';
import Supervision from './components/Supervision';
import { generateMockSchedule } from './services/mockService';
import { DailyScheduleRow, SubstitutionCell } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('list');
  const [scheduleData, setScheduleData] = useState<DailyScheduleRow[]>([]);
  const [currentDate, setCurrentDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Caricamento iniziale e persistenza
  useEffect(() => {
    const savedData = localStorage.getItem(`schedule_${currentDate}`);
    if (savedData) {
      setScheduleData(JSON.parse(savedData));
    } else {
      const initialData = generateMockSchedule(currentDate);
      setScheduleData(initialData);
      localStorage.setItem(`schedule_${currentDate}`, JSON.stringify(initialData));
    }
  }, [currentDate]);

  // Aggiornamento persistenza quando cambiano i dati
  const saveToStorage = (date: string, data: DailyScheduleRow[]) => {
    localStorage.setItem(`schedule_${date}`, JSON.stringify(data));
  };

  const handleGenerate = (date: string) => {
    setCurrentDate(date);
    const newData = generateMockSchedule(date);
    setScheduleData(newData);
    saveToStorage(date, newData);
    setCurrentView('list');
  };

  const handleUpdateCell = (teacherName: string, hourIndex: number, updatedCell: SubstitutionCell) => {
    const newData = scheduleData.map(row => {
      if (row.teacherName === teacherName) {
        const newHours = [...row.hours];
        newHours[hourIndex] = updatedCell;
        return { ...row, hours: newHours };
      }
      return row;
    });
    setScheduleData(newData);
    saveToStorage(currentDate, newData);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'create':
        return <CreateSubstitutionForm onGenerate={handleGenerate} />;
      case 'dashboard':
        return <Dashboard />;
      case 'supervision':
        return <Supervision />;
      case 'list':
      default:
        return (
          <SubstitutionView 
            data={scheduleData} 
            date={currentDate} 
            onUpdateCell={handleUpdateCell} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12 selection:bg-indigo-100 selection:text-indigo-900">
      <Header currentView={currentView} setView={setCurrentView} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
