'use client'

import * as React from 'react';

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import AddSchedule from '../scheduler/add-schedule';

export default function Sidebar() {

  return (
    <>
      <SidebarComponent id="default-sidebar">
        <div className="title"> Sidebar content</div>
        <AddSchedule />
      </SidebarComponent>
    </>
  )
}
