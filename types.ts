
export enum SubstitutionType {
  COMPRESENZA = "Compresenza Automatica",
  DOCENTE_CLASSE = "Docente della Classe",
  STESSA_MATERIA = "Stessa Materia",
  DISPONIBILITA = "Disponibilità Generica",
  DISPONIBILITA_EXTRA = "Disponibilità Aggiuntiva",
  A_PAGAMENTO = "A Pagamento",
  PULL_OUT = "Pull-out da Compresenza",
  MANUALE = "Forzatura Manuale",
  ENTRATA_POSTICIPATA = "Entrata Posticipata",
  USCITA_ANTICIPATA = "Uscita Anticipata",
  VUOTO = "Nessuna"
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  isSupport: boolean;
  hoursOwed: number;
}

export interface SubstitutionCell {
  hour: number;
  className: string;
  substituteName?: string;
  type: SubstitutionType;
  notes?: string;
}

export interface DailyScheduleRow {
  teacherName: string;
  hours: (SubstitutionCell | null)[]; // Array di 10 ore
}

export interface SupervisionSlot {
  interval: string;
  post: string;
  teacher1: string;
  teacher2: string;
}

export interface StatData {
  name: string;
  value: number;
  color?: string;
}
