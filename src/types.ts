export interface WebinarTimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RegistrationFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  designation: string;
  phone: string;
  sector: string;
  notes?: string;
}

export interface LandscapeTopic {
  id: string;
  number: string;
  title: string;
  arabicName: string;
  authority: string;
  shortSummary: string;
  details: string[];
  keyMetric: string;
  metricLabel: string;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}
