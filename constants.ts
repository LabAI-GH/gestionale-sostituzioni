import { SubstitutionType } from './types';

export const NUMERO_ORE = 10;

// Hex colors matching the GAS script
export const COLORS = {
  [SubstitutionType.COMPRESENZA]: "#FFFF00", // Yellow
  [SubstitutionType.DOCENTE_CLASSE]: "#90EE90", // Light Green
  [SubstitutionType.STESSA_MATERIA]: "#FFA500", // Orange
  [SubstitutionType.DISPONIBILITA]: "#ADDBE6", // Light Blue
  [SubstitutionType.DISPONIBILITA_EXTRA]: "#4682B4", // Steel Blue
  [SubstitutionType.A_PAGAMENTO]: "#D3D3D3", // Light Grey
  [SubstitutionType.PULL_OUT]: "#FF0000", // Red
  [SubstitutionType.MANUALE]: "#9370DB", // Purple
  [SubstitutionType.ENTRATA_POSTICIPATA]: "#E0E0E0", // Special Grey
  [SubstitutionType.USCITA_ANTICIPATA]: "#E0E0E0",
  [SubstitutionType.VUOTO]: "#FFFFFF"
};

// Text color logic (some backgrounds need white text)
export const TEXT_COLORS = {
  [SubstitutionType.PULL_OUT]: "white",
  [SubstitutionType.MANUALE]: "white",
  [SubstitutionType.DISPONIBILITA_EXTRA]: "white",
  "DEFAULT": "black"
};

export const ORE_LABELS = [
  "1ª Ora", "2ª Ora", "3ª Ora", "4ª Ora", "5ª Ora", 
  "6ª Ora", "7ª Ora", "8ª Ora", "9ª Ora", "10ª Ora"
];

export const MOCK_TEACHERS = [
  "Rossi Mario", "Bianchi Luigi", "Verdi Anna", "Neri Giulia", 
  "Gialli Luca", "Ferrari Marco", "Russo Sofia", "Esposito Antonio",
  "Romano Francesca", "Colombo Alessandro", "Ricci Elena", "Marino Davide"
];

export const MOCK_CLASSES = [
  "1A", "1B", "1C", "2A", "2B", "3A", "3B", "4A", "5A"
];