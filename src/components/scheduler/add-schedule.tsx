'use client'

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useSchedule } from '@/contexts/schedule-context';


export default function AddSchedule() {

  const { scheduleRef } = useSchedule();

  // const onAddClick = () => {
  //   if (scheduleObj.current) {
  //     let Data = [{
  //       Id: 1,
  //       Subject: 'Conference',
  //       StartTime: new Date(2025, 2, 12, 9, 0),
  //       EndTime: new Date(2025, 2, 12, 10, 0),
  //       IsAllDay: false
  //     }, {
  //       Id: 2,
  //       Subject: 'Meeting',
  //       StartTime: new Date(2025, 2, 15, 10, 0),
  //       EndTime: new Date(2025, 2, 15, 11, 30),
  //       IsAllDay: false
  //     }];

  //     scheduleObj.current.addEvent(Data);
  //   }

  //   if (buttonObj.current) {
  //     buttonObj.current.element.setAttribute('disabled', 'true');
  //   }
  // }

  function onAddClick() {
    if (scheduleRef.current) {

      console.log(scheduleRef);

      const eventData = {
        // Id: new Date().getTime(), // Gera um ID único
        // Subject: '',
        // StartTime: new Date(), // Hora atual
        // EndTime: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hora depois
        // IsAllDay: false
      };

      scheduleRef.current.openEditor({}, 'Add'); // Abre o modal de criação
    }
  };

  return (
    <ButtonComponent id='add' title='Add' onClick={onAddClick} >
      Add
    </ButtonComponent>
  )
}
