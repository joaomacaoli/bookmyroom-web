'use client'

import { useSchedule } from '@/contexts/schedule-context';

import {
  Day,
  TimelineViews,
  Week,
  Month,
  Agenda,
  ScheduleComponent,
  Inject,
  Resize,
  DragAndDrop,
  ActionEventArgs,
  ViewsDirective,
  ViewDirective,
} from '@syncfusion/ej2-react-schedule';


export default function Scheduler() {

  const { scheduleRef } = useSchedule();

  function handleActionComplete(args: ActionEventArgs) {
    if (args.requestType === 'eventCreated') {
      console.log('Novo agendamento:', args);
      // Aqui você pode fazer um fetch para salvar no banco de dados
    }
  }

  return (
    <div className='max-w-sm md:max-w-lg lg:max-w-4xl'>
      <ScheduleComponent
        ref={scheduleRef}
        width='100%'
        height='650px'
        currentView='Month'
      // actionComplete={handleActionComplete}
      >
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='Month' />
          <ViewDirective option='TimelineDay' />
        </ViewsDirective>

        <Inject services={[Day, Week, Month, TimelineViews, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}
