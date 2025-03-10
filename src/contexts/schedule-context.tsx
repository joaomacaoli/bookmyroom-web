'use client';

import { createContext, useContext, useRef, RefObject } from 'react';
import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';

// Tipo do contexto permitindo `null`
type ScheduleContextType = {
  scheduleRef: RefObject<ScheduleComponent | null>;
};

// Criar o contexto com `undefined` como estado inicial
const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

// Criar o Provider
export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const scheduleRef = useRef<ScheduleComponent | null>(null);

  return (
    <ScheduleContext.Provider value={{ scheduleRef }}>
      {children}
    </ScheduleContext.Provider>
  );
}

// Criar o Hook personalizado para acessar o contexto
export function useSchedule() {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error('useSchedule deve ser usado dentro de um ScheduleProvider');
  }
  return context;
}
