import { v4 as uuidv4 } from "uuid";
import { mockRooms } from "./mock-room";

export const mockAppointments = [
  {
    Id: uuidv4(),
    Subject: "Reunião de Planejamento Estratégico",
    StartTime: new Date(2025, 2, 17, 8, 0), // Manhã inteira
    EndTime: new Date(2025, 2, 17, 12, 0),
    RoomId: mockRooms[0].id,
  },
  {
    Id: uuidv4(),
    Subject: "Apresentação de Novos Projetos",
    StartTime: new Date(2025, 2, 17, 13, 0),
    EndTime: new Date(2025, 2, 17, 15, 30),
    RoomId: mockRooms[1].id,
  },
  {
    Id: uuidv4(),
    Subject: "Treinamento de Equipe",
    StartTime: new Date(2025, 2, 17, 9, 0),
    EndTime: new Date(2025, 2, 17, 11, 0),
    RoomId: mockRooms[2].id,
  },
  {
    Id: uuidv4(),
    Subject: "Revisão de Contratos",
    StartTime: new Date(2025, 2, 17, 13, 0), // Tarde
    EndTime: new Date(2025, 2, 17, 15, 0),
    RoomId: mockRooms[3].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Vendas",
    StartTime: new Date(2025, 2, 17, 9, 0),
    EndTime: new Date(2025, 2, 17, 10, 30),
    RoomId: mockRooms[4].id,
  },
  {
    Id: uuidv4(),
    Subject: "Brainstorming de Marketing",
    StartTime: new Date(2025, 2, 17, 16, 0), // Final da tarde
    EndTime: new Date(2025, 2, 17, 17, 30),
    RoomId: mockRooms[0].id,
  },
  {
    Id: uuidv4(),
    Subject: "Entrevista de Emprego",
    StartTime: new Date(2025, 2, 17, 9, 30),
    EndTime: new Date(2025, 2, 17, 10, 30),
    RoomId: mockRooms[1].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Desenvolvimento",
    StartTime: new Date(2025, 2, 17, 15, 30),
    EndTime: new Date(2025, 2, 17, 17, 30),
    RoomId: mockRooms[2].id,
  },
  {
    Id: uuidv4(),
    Subject: "Apresentação de Resultados",
    StartTime: new Date(2025, 2, 17, 15, 0),
    EndTime: new Date(2025, 2, 17, 16, 30),
    RoomId: mockRooms[3].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Feedback",
    StartTime: new Date(2025, 2, 17, 13, 0),
    EndTime: new Date(2025, 2, 17, 14, 30),
    RoomId: mockRooms[4].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Lançamento",
    StartTime: new Date(2025, 2, 17, 13, 30), // Manhã
    EndTime: new Date(2025, 2, 17, 14, 30),
    RoomId: mockRooms[0].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Análise de Mercado",
    StartTime: new Date(2025, 2, 17, 11, 0),
    EndTime: new Date(2025, 2, 17, 12, 0),
    RoomId: mockRooms[1].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Planejamento Financeiro",
    StartTime: new Date(2025, 2, 17, 13, 0),
    EndTime: new Date(2025, 2, 17, 14, 30),
    RoomId: mockRooms[2].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Produto",
    StartTime: new Date(2025, 2, 17, 8, 30),
    EndTime: new Date(2025, 2, 17, 12, 0),
    RoomId: mockRooms[3].id,
  },
  {
    Id: uuidv4(),
    Subject: "Reunião de Encerramento",
    StartTime: new Date(2025, 2, 17, 16, 30),
    EndTime: new Date(2025, 2, 17, 18, 0),
    RoomId: mockRooms[4].id,
  },
];
